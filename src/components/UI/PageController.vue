<template>
  <footer>
    <ul>
      <li
        class="page"
        :class="pageNum === pageCurrent + 1 ? 'active' : null"
        v-for="pageNum in pages"
        :key="pageNum"
        @click="changePage(pageNum - 1)"
      >
        {{ pageNum }}
      </li>
    </ul>
  </footer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["pages", "pageCurrent"]),
  },
  methods: {
    ...mapActions(["changePage"]),
  },
};
</script>

<style scoped>
footer {
  width: 100vw;
  height: 3rem;
  position: fixed;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
}

ul {
  height: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.page {
  font-size: 14px;
  margin: 0 0.5rem;
  cursor: pointer;
}

.active {
  font-size: 18px;
  font-weight: bold;
}
</style>
