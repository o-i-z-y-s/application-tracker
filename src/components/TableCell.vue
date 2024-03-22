<template>
  <div>
    <select v-if="uid === 'step' && (editing || val === '')" class="form-select" @change="onChange">
      <option selected>Select</option>
      <option v-for="step, index in steps" :key="index">
        {{ step }}
      </option>
    </select>
    <input v-else-if="editing || (val === '' && uid !== 'step')" :value="val" class="form-control" @blur="onChange">
    <div v-else @click="editing = !editing">{{ val }}</div>
  </div>
</template>

<script>
export default {
  name: 'TableCell',
  props: {
    val: {
      type: String,
      required: true
    },
    uid: {
      type: String,
      required: true
    },
    index:  {
      type: Number,
      required: true
    }
  },
  data: function() {
    return {
      editing: false,
      steps: ['Applied','Phone Screen','Assessment','Onsite','Accepted','Rejected','Closed']
    }
  },
  methods: {
    onChange(e) {
      this.editing = false;
      this.$emit('update', e.target.value, this.index, this.uid);
    }
  }
}
</script>

<style scoped>

</style>