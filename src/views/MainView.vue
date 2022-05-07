<template>
  <section>
    <character-list />
    <page-controller />
  </section>
</template>

<script>
import CharacterList from "@/components/list/CharacterList.vue";
import PageController from "@/components/UI/PageController.vue";

export default {
  components: { CharacterList, PageController },
};
</script>
