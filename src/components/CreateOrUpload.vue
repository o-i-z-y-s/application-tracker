<template>
  <div>
    <div class="file-uploader" @dragover="dragover" @dragleave="dragleave" @drop="drop">
      <input ref="uploader" id="uploader" class="file-input" type="file" @change="onChange" accept=".csv">
      <label for="uploader" class="drop-space">
        <div v-if="hovering">Drop file here.</div>
        <div v-else><h4>Drag and drop your file or click in here to upload it manually.</h4></div>
      </label>
    </div>

    <div class="btn-row">
      <button v-if="show" class="col btn btn-dark loader" @click="load">You have a saved tracker.<br>Click here to load it.</button>
      <button class="col btn btn-dark" style="margin-bottom: 1rem;" @click="onNew">Or click here to create<br>a new one instead.</button>
    </div>
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
    this.checkStorage();
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
      this.file = JSON.parse(window.localStorage.getItem('content'));
      this.parseFile(true);
    },

    // loadFromCookies() {
    //   const cookieValue = document.cookie
    //       .split("; ")
    //       .find((row) => row.startsWith("content="))
    //       ?.split("=",2)[1];
      
    //   this.file = JSON.parse(cookieValue);
    //   this.parseFile(true);
    // },

    // checkStorage() {
    //   if (window.localStorage.getItem('content')) {
    //     this.show = true;
    //   }
    // },

    // checkCookies() {
    //   try {
    //     const cookieValue = document.cookie
    //       .split("; ")
    //       .find((row) => row.startsWith("content="))
    //       ?.split("=",2)[1];

    //     if (cookieValue) {
    //       this.show = true;
    //     }
    //   }
    //   catch {
    //     return;
    //   }
    // },
  }
}
</script>

<style scoped>
.file-uploader {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border: 4px dashed whitesmoke;
  border-radius: 2rem;
  margin-bottom: 3dvh;
}
.file-input {
  opacity: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  position: absolute;
}
.drop-space {
  width: 20rem;
  padding: 1dvh 2dvw;
  cursor: pointer;
}
.btn {
  color: whitesmoke;
  border: 2px solid whitesmoke;
  border-radius: 1rem;
}
.btn-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.loader {
  margin-right: 1rem;
  margin-bottom: 1rem;
}

@media screen and (max-width: 400px) {
  .drop-space {
    width: 70dvw;
  }
  .loader {
    /* margin-right: 0rem; */
  }
}
</style>