<template>
  <div class="about">
    <v-select v-model="selectInit" :options="['vue.js', 'React']"></v-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectInit: [],
    }
  }
}
</script>

<style>

</style>

