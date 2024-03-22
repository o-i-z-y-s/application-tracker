<template>
  <div id="app" :class="{ 'table-min-width': loaded }">
    <div class="content">
      <h1>Application Tracker</h1>
      <div v-if="!loaded">
        <create-or-upload @created="onCreate" />
      </div>
      <div v-else>
        <application-tracker :applicationsOrig="applications" />
      </div>
    </div>
    <p class="footer">Made in an evening by <a href="https://github.com/o-i-z-y-s">this dweeb.</a></p>
  </div>
</template>

<script>
import CreateOrUpload from './components/CreateOrUpload.vue'
import ApplicationTracker from './components/ApplicationTracker.vue'

export default {
  name: 'App',
  components: {
    CreateOrUpload,
    ApplicationTracker
  },
  data: function() {
    return {
      applications: '',
      loaded: false,
    }
  },
  methods: {
    onCreate(data) {
      this.applications = data;
      this.$nextTick(() => {
        this.loaded = true;
      });
    }
  }
}
</script>

<style>
#app {
  background: rgb(40,40,40);
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 95vh;
  min-width: 95vw;
}
.table-min-width {
  min-width: 525px;
}
h1 {
  margin-bottom: 3vh;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 95vh;
}
.footer {
  font-size: 0.8rem;
  min-height: 1vh;
  font-style: italic;
}
.footer > a {
  text-decoration: none;
  color: aqua;
  transition: 0.25s;
}
.footer > a:hover {
  letter-spacing: 1px;
}
</style>
