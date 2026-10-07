<center>
<img src="docs/icon.png" height="200">
</center>

# EncryptID Finale Platform
This platform was used the for the 3rd & Final Edition of EncryptID, an online cryptic hunt based on anime, pop culture and more hosted by the COSMOS Tech Society of IIT Madras.

<img src="docs/landing.jpeg">

## Key Features
1. Google Sign In
2. Team Creation
3. Answer Logs
4. Images, Files and Code Comments for levels
5. Error Logging with Sentry
6. Disabling progression for non-verified emails

## Tech Stack
- Web App - **Sveltekit**
- Backend - **Firebase**
- Error Logging - **Sentry**
- Deployment - **Vercel**

## Run it locally (no Firebase account needed)
Everything runs on your machine against the [Firebase Emulator Suite](https://firebase.google.com/docs/emulator-suite): Google sign-in, Firestore and the security rules are all emulated, and a few sample levels are seeded for you.

**Requirements:** Node.js 20+ and Java 21+ (the Firestore emulator is a Java program; check with `java -version`).

```
npm install
npm run local
```
Then open http://localhost:5173.

- **Sign in:** "sign in with google" opens the emulator's fake Google popup. Click *Add new account* and type any email. An email ending in `iitm.ac.in` (e.g. `you@smail.iitm.ac.in`) makes your team "IITM verified", which is the only kind of team that earns points and moves up the leaderboard.
- **Teams:** to test joining, sign in as a second user in another browser profile or a private window, and use the 8-character code shown on the first user's `/team` page.
- **Levels:** edit `seed/levels.json` (prompt, answer, hidden HTML comment, images, files) and restart, or run `npm run seed` while the emulators are up.
- **Data:** browse and edit the emulated users, teams, logs and levels in the Emulator UI at http://127.0.0.1:4000. All data is wiped when you stop `npm run local`.
- **Separate terminals:** if you'd rather keep the emulators running while you restart the web app, run `npm run emulators` in one terminal, then `npm run seed && npm run dev:emulator` in another.

Emulator mode is driven by `.env.emulator`, which `npm run local` loads (via `vite dev --mode emulator`). Sentry and the Discord webhook are optional and stay off locally.

You still need internet access: the first `npm run local` downloads the Firestore emulator once, and the sign-in popup loads its scripts from Google and unpkg. Nothing talks to a real Firebase project.

If the popup closes but the page stays on "create your account", the emulator's sign-in relay couldn't load Google's helper script in time. Reload the page and sign in again.

## Setup (deploying with a real Firebase project)
### Firebase
1. Create a new firebase project and do the following:
- setup auth with google sign in provider enabled
- setup cloud firestore
- setup cloud storage (optional)

2. Create a new web app
Firebase will then give you a configuration object. This is your client configuration. Copy this to text file since we'll be needing it later.

3. Create a new service account
Create a new service account and download the credentials json file

### Web App
1. Clone the repository
```
git clone https://github.com/kry0sc0pic/encryptid-finale.git
```

2. Install Dependencies
```
npm install
```

3. Client Configuration

Edit `src/lib/firebase.ts` and replace the non-emulator `firebaseConfig` with the client configuration from Step 2 of the firebase section.

4. Setup Environment Variables

Rename `.env.example` to `.env`. Set the values for the FB variables from the service account credentials you downloaded earlier in  step 3 of the firebase section.

### Sentry (optional)
1. Create a new sentry project with the platform as sveltekit.

2. Go to the project settings and copy the DSN value

3. Create a new auth token on your sentry organisation settings

4. Edit `.env` and set this auth token as the value for `SENTRY_AUTH_TOKEN` and set the dsn value for `PUBLIC_SENTRY_DSN`

### Firestore
1. Create the following collections/documents with the following data

`/index/userIndex`
```json
{"0":null}
```
`/index/nameIndex`
```json
{
  "teamcodes": {},
  "teamcounts": {},
  "teamnames": [],
  "usernames": []
}
```

2. Install and setup Firebase CLI
```
npm install -g firebase-tools
firebase login
firebase init
```
_make sure to select firestore indexes and security rules_

3. Deploy Security Rules and Indexes
```
firebase deploy --only firestore
```

### Discord Webhook (optional)
you can configure an optional discord webhook to receive messages when new users and teams are created along with the total count. 

To enable it, set the value for `WEBHOOK` to a valid discord webhook in `.env`

### Additional Configuration

If you are planning on using a platform other than vercel to deploy this, go to `svelte.config.js` and change the first import from `adapter-vercel` to `adapter-auto`.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=kry0sc0pic/encryptid-finale&type=Date)](https://star-history.com/#kry0sc0pic/encryptid-finale&Date)

## License
This platform is licensed under the GNU GPL 3.0