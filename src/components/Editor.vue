<template>
  <div class="editor">
    <div class="editorPanel">
      <vue-editor v-model="code" @text-change="guiToLine"></vue-editor>
    </div>
    <div class="editorPanel">
      <codemirror v-model="lineEditorCode" :options="cmOptions" @blur="lineToGui()" ref="editor"/>
    </div>
  </div>
</template>

<script>
import {codemirror} from 'vue-codemirror';
import {VueEditor} from "vue2-editor";
import 'codemirror/lib/codemirror.css'

import 'codemirror/mode/css/css.js'
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
  computed: {
    codemirror_ref: function () {
      return this.$refs.editor.codemirror
    }
  },
  methods: {
    // format: function () {
    //   return this.codemirror_ref.autoFormatRange(this.codemirror_ref.getCursor(true), this.codemirror_ref);
    // },
    guiToLine: function () {
      this.lineEditorCode = this.code;
    },
    lineToGui: function () {
      this.code = this.lineEditorCode.replaceAll('\n', '');
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
  --editor-height: 800px
}

.editorPanel {
  width: 50%!important;
  height: var(--editor-height) !important;
  max-height: var(--editor-height) !important;
  min-height: var(--editor-height) !important;
  display: flex;
  flex-direction: column;
}

.CodeMirror {
  height: var(--editor-height);
}

.quillWrapper {
  height: var(--editor-height) !important;
}
</style>