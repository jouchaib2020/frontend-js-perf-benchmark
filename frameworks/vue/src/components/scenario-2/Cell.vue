<template>
  <span>
    outer: {{ value }}, 
</span>
<span>
    inner: {{ count }}
    <button class="cell-btn-increment" @click="increment">
      +
    </button></span>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count += 1;
    },
  },
};
</script>
