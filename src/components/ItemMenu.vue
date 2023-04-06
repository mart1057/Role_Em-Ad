
<template>
  <router-link :to="to" class="link" >
    <i class="icon"/>
      <span>
        <slot/>
      </span>
  </router-link>
</template>

<script>


export default {
  props: {
    to: { type: String, required: true },
  },
  setup(props) {
    return { }
  }
}
</script>

<style scoped>
</style>
