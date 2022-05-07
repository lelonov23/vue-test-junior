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
  padding: 0;
  display: grid;
  grid-template-columns: min-content min-content;
  gap: 2rem;
  justify-content: center;
}
@media only screen and (max-width: 767px) {
  .list {
    grid-template-columns: min-content;
  }
}
</style>
