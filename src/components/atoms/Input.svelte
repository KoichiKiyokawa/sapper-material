<script lang="ts">
  import { TextField } from 'svelte-materialify'

  export let error: boolean = false
  export let rules: ((value: any) => string | false)[] = []
  export let value: string
</script>

<TextField
  {...$$restProps}
  bind:value
  bind:error
  {rules}
  validateOnBlur={true}
  class="secondary-text"
  filled>
  <slot />
</TextField>
