<template>
  <ul class="list">
    <character-list-item
      :key="character.id"
      v-for="character in filteredData"
      :character="character"
    />
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
import CharacterListItem from "../list/CharacterListItem.vue";

export default {
  components: { CharacterListItem },
  computed: {
    ...mapGetters(["filteredData"]),
  },
};
</script>

<style scoped>
.list {
  margin: 1rem 1.5rem;
  padding: 0;
  display: grid;
  grid-template-columns: 19rem 19rem;
  gap: 2rem;
  justify-content: center;
}
@media only screen and (max-width: 767px) {
  .list {
    grid-template-columns: 19rem;
  }
}
</style>
