<template>
  <div class="card">
    <header>
      <div>
        <h2>{{ character.name }}</h2>
      </div>
      <div></div>
    </header>
    <div></div>
  </div>
</template>

<script>
export default {
  props: ["character"],
};
</script>

<style scoped>
.card {
  background-color: #333;
}
</style>
>
