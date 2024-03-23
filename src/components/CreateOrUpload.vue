<template>
  <div>
    <div class="file-uploader" @dragover="dragover" @dragleave="dragleave" @drop="drop">
      <input ref="uploader" id="uploader" class="file-input" type="file" @change="onChange" accept=".csv">
      <label for="uploader" class="drop-space">
        <div v-if="hovering">Drop file here.</div>
        <div v-else><h3>Drag and drop your file<br>or click in here to upload it manually.</h3></div>
      </label>
    </div>

    <button v-if="show" class="btn btn-light loader" @click="load">You have a saved tracker.<br>Click here to load it.</button>
    <br v-if="show">
    <button class="btn btn-light" @click="onNew">Or click here to create<br>a new one instead.</button>
  </div>
</template>

<script>
import Application from '../application.js';
import Papa from 'papaparse';

export default {
  name: 'CreateOrUpload',
  data: function() {
    return {
      file: '',
      hovering: false,
      show: false
    }
  },
  mounted: function() {
    if (document.cookie) {
      this.show = true;
    }
  },
  methods: {
    onChange(e) {
      this.file = e.target.files[0];
      this.parseFile();
    },

    async parseFile(loaded = false) {
      if (this.file === '') {
        return;
      }

      let content = [];
      if (!loaded) {
        content = await this.parser();
      } else {
        content = this.file;
      }

      let applications = [];
      for (let i = 0; i < content.length; i++) {
        let tmp = {};
        tmp['company'] = content[i][0];
        tmp['title'] = content[i][1];
        tmp['payScale'] = content[i][2];
        tmp['dateApplied'] = content[i][3];
        tmp['mostRecentContactDate'] = content[i][4];
        tmp['step'] = content[i][5];
        tmp['notes'] = content[i][6];

        let application = new Application();
        application.init(tmp);
        applications[i] = application;
      }

      if (applications.length > 0) { 
        this.$emit('created', applications);
      }
    },

    async parser() {
      return new Promise((resolve) => {
        Papa.parse(this.file, { 
          complete: function(results) {
            resolve(results.data);
          }
        });
      })
    },

    onNew() {
      this.$emit('created', [new Application()]);
    },

    dragover(e) {
      e.preventDefault();
      this.hovering = true;
    },

    dragleave(e) {
      e.preventDefault();
      this.hovering = false;
    },

    drop(e) {
      e.preventDefault();
      this.file = e.dataTransfer.files[0];
      this.parseFile();
      this.hovering = false;
    },

    load() {
      let cookie = document.cookie;
      this.file = JSON.parse(cookie);
      this.parseFile(true);
    },
  }
}
</script>

<style scoped>
.file-uploader {
  padding: 2rem;
  border: 4px dashed whitesmoke;
  border-radius: 2rem;
  margin-bottom: 3vh;
}
.file-input {
  opacity: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  position: absolute;
}
.drop-space {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vw;
  padding: 4vh 3vw;
  cursor: pointer;
}
.loader {
  margin-bottom: 1rem;
}
</style>