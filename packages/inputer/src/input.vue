<template>
  <div>
    <input type="text" v-model="name" @input="console">
    {{name}}
  </div>
</template>

<script>
  export default {
    name: 'inputer',
    data() {
      return {
        name: 'inputer'
      }
    },
    methods: {
      console() {
        console.log(this.name)
      }
    }
  }
</script>
