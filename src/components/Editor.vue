<template>
  <div class="editor">
    <vue-editor v-model="code" @text-change="lineEditorCode=code"></vue-editor>
    <codemirror v-model="lineEditorCode" :options="cmOptions" @blur="code=lineEditorCode" />
  </div>
</template>

<script>
import {codemirror} from 'vue-codemirror';
import {VueEditor} from "vue2-editor";
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/htmlmixed/htmlmixed.js'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Editor",
  data() {
    return {
      code: "",
      lineEditorCode: "",
      cmOptions: {
        tabSize: 4,
        mode: 'htmlmixed',
        lineNumbers: true,
        line: true
      }
    }
  },
  components: {
    VueEditor,
    codemirror
  }
}
</script>

<style>
.editor {
  display: flex;
  flex-direction: row;
}
</style>