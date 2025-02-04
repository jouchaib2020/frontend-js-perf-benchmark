<template>
  <div style="margin-bottom: 20px;">
    <div>
      Row: {{ count }}
      <button class="row-btn-update-children" @click="updateRow">
        + children 
      </button>
      <button class="row-btn-update-self" @click="onInput"> + parent</button>
    </div>
    <Cell v-for="(col, i) in columns" :key="col.id" :value="i + offset" />
  </div>
</template>

<script>
import Cell from "./Cell.vue";

export default {
  components: {
    Cell,
  },
  props: {
    columns: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      count: 0,
      offset: 0,
    };
  },
  methods: {
    onInput() {
      this.count += 1;
    },
    updateRow() {
      this.offset += 1;
    },
  },
};
</script>
