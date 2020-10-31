<script lang="ts">
  import { Button, Card, CardText, CardTitle } from 'svelte-materialify'
  import Input from '../components/atoms/Input.svelte'

  const form = {
    email: '',
    password: '',
  }

  function onSubmit() {
    console.log(form)
  }
</script>

<div class="card">
  <Card>
    <CardTitle>ログイン</CardTitle>
    <CardText>
      <form on:submit|preventDefault={onSubmit}>
        <Input
          type="email"
          required
          autocomplete="email"
          bind:value={form.email}>
          メールアドレス
        </Input>
        <Input
          bind:value={form.password}
          reuired
          type="password"
          minlength={6}
          autocomlete="current-password">
          パスワード
        </Input>
        <Button type="submit" class="secondary-color">送信</Button>
      </form>
    </CardText>
  </Card>
</div>

<style lang="sass">
.card
  width: 100%
  margin: auto
  max-width: 640px
</style>
