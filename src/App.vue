<template>
  <editor v-model="code"></editor>
</template>

<script>
import Editor from './components/Editor';

export default {
  name: 'App',
  data() {
    return {
      code: ''
    };
  },
  components: {
    Editor
  }
}
</script>

<style>

</style>
