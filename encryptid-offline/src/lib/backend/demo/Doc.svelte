<script lang="ts">
    // Same slots as sveltefire's <Doc>, reading from the demo's local database.
    import { db } from './store';

    /** a document path like "teams/abc" or "/teams/abc" */
    export let ref: string;

    $: [collection, id] = ref.replace(/^\//, '').split('/');
    $: data = $db[collection]?.[id];
</script>

{#if data !== undefined && data !== null}
    <slot {data} />
{:else}
    <slot name="loading" />
{/if}
