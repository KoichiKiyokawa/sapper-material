<script lang="ts">
  import { MaterialApp } from 'svelte-materialify'
  import Nav from '../components/organisms/Nav.svelte'
</script>

<MaterialApp theme="light">
  <Nav />

  <main class="container mt-4">
    <slot />
  </main>
</MaterialApp>

<style lang="sass">
.container
  width: 95%
  max-width: 1400px
  margin: auto
</style>
