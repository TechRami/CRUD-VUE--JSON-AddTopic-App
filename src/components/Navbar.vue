<template>
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'AddTopic' }"
        >Add Topic</router-link
      >
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style></style>
