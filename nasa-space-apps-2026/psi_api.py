#!/usr/bin/env python3
"""Minimal client for NASA's Physical Sciences Informatics (PSI) repository.

These are the public JSON endpoints the psi.nasa.gov web app calls. No login
is needed for public investigations. Example:

    python3 psi_api.py search combustion
    python3 psi_api.py get PSI-25
    python3 psi_api.py files PSI-25
    python3 psi_api.py url PSI-25 "PSI-25_Experimental table_BASS-II.csv" 1

Cite PSI data by its DOI (shown on each investigation page). Observed licence
for BASS-II (PSI-25) is CC0-1.0; check each record.
"""
import json
import sys
import urllib.parse
import urllib.request

BASE = "https://psi.nasa.gov/geode-py/ws"


def _get(url):
    with urllib.request.urlopen(url, timeout=60) as r:
        return r.read().decode("utf-8")


def search(term="", size=500, start=0, source="psi", kind="investigation"):
    """Elasticsearch-style hit list. Each hit['_source'] has Accession, Title,
    Acronym, Research Area, SubResearch Area, Project Type, Objectives, Approach,
    Hypothesis, Keywords, Experiment Hardware, Flight Platform, Related
    Investigations, Publication Title, Public Release Date, ..."""
    q = urllib.parse.urlencode({
        "term": term, "source": source, "type": kind, "size": size, "from": start,
        "sort": "Public Release Date", "order": "desc"})
    return json.loads(_get(f"{BASE}/repo/search?{q}"))["hits"]["hits"]


def filter_options():
    return json.loads(_get(f"{BASE}/repo/filter-options"))


def investigation(accession):
    """Full record: objective, approach, hypothesis, researchImpacts, doi,
    licenseIdentifier, experimentHardware, experimentalTable, publications
    (with DOIs), contacts, totalFileSize, version, ..."""
    return json.loads(_get(f"{BASE}/repo/investigations/{accession}"))


def files(accession, version=None):
    """File tree (nested 'files' lists). Version defaults to the record's."""
    if version is None:
        version = investigation(accession).get("version", 1)
    body = json.dumps({"folder": f"{accession}/", "fileType": "study",
                       "studyId": accession, "version": version,
                       "obfuscationcode": ""}).encode()
    req = urllib.request.Request(f"{BASE}/files/v2", data=body,
                                 headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=120) as r:
        return json.loads(r.read().decode("utf-8"))


def download_url(accession, file_name, version=1):
    """Returns a short-lived signed S3 URL for one file."""
    q = urllib.parse.urlencode({"file": file_name, "version": version,
                                "redirect": "false"})
    return _get(f"{BASE}/studies/{accession}/download?{q}").strip()


def walk(node, depth=0):
    for f in node.get("files", []):
        name = f.get("displayName") or f.get("key", "").rsplit("/", 1)[-1]
        if f.get("directory") or f.get("files"):
            print("  " * depth + f"[dir] {name}")
            walk(f, depth + 1)
        else:
            print("  " * depth + f"- {name}  ({f.get('size') or f.get('bytes_size')})")


if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else "search"
    if cmd == "search":
        for h in search(sys.argv[2] if len(sys.argv) > 2 else ""):
            s = h["_source"]
            print(f"{s['Accession']:8} {s.get('Research Area','') or '':28} {s.get('Title','')}")
    elif cmd == "get":
        d = investigation(sys.argv[2])
        keep = ["accession", "title", "investigationAcronym", "doi", "licenseIdentifier",
                "researchArea", "subResearchArea", "projectType", "flightProgram",
                "objective", "hypothesis", "approach", "researchImpacts", "totalFileSize", "version"]
        print(json.dumps({k: d.get(k) for k in keep}, indent=1))
        print("publications:", len(d.get("publications", [])))
    elif cmd == "files":
        walk(files(sys.argv[2]))
    elif cmd == "url":
        print(download_url(sys.argv[2], sys.argv[3], int(sys.argv[4]) if len(sys.argv) > 4 else 1))
    elif cmd == "filters":
        print(json.dumps(filter_options(), indent=1))
