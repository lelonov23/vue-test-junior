<template>
  <div class="card">
    <header>
      <div class="control">
        <h2>{{ character.name }}</h2>
        <span :class="character.status.toLowerCase()">
          {{ character.status }}
        </span>
      </div>
      <div class="control">
        <span>{{ character.gender }}</span>
        <span>{{ character.origin.name }}</span>
      </div>
    </header>
    <div class="img-control">
      <img :src="character.image" :alt="`${character.name} image`" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["character"],
};
</script>

<style scoped>
.card {
  width: min-content;
}

h2 {
  margin: 0;
  font-size: 12px;
}

header {
  display: flex;
  flex-direction: column;
}

.control {
  display: flex;
  justify-content: space-between;
  font-weight: 700;
}

.control:last-child {
  font-weight: 400;
  color: #8d8d8d;
}

.alive {
  color: #00bd4c;
}
.dead {
  color: #e50000;
}
.unknown {
  color: #7b7b7b;
}
</style>
>
