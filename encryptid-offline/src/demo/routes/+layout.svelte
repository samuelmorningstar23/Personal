<script lang="ts">
    // the demo reuses the real pages as-is; these route files only swap the loaders
    import Layout from '../../routes/+layout.svelte';
    export let data;
</script>

<Layout {data}><slot /></Layout>
