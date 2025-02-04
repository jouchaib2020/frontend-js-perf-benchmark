<template>
  <div>
    <label>branching factor</label>
    <input
      id="input-branching-factor"
      type="number"
      :value="branchingFactor"
      @change="onUpdateBranchingFactor"
    />
    <label>tree depth</label>
    <input
      id="input-tree-depth"
      type="number'"
      :value="treeDepth"
      @change="onUpdateTreeDepth"
    />
    <button id="btn-generate" @click="generate">Generate tree</button>
    <button id="btn-generate-simple" @click="generateSimple">
      Generate sitatic  tree
    </button>
    <div>{{ count }}</div>
    <button id="btn-increment-root" @click="increment"> + root</button>
    <div v-if="initialized">
      <template v-if="nodeType === 1">
        <Node
          v-for="n in branchingFactor"
          :key="n"
          :branching-factor="branchingFactor"
          :subtree-depth="treeDepth - 1"
        />
      </template>
      <template v-else>
        <Node2
          v-for="n in branchingFactor"
          :key="n"
          :branching-factor="branchingFactor"
          :subtree-depth="treeDepth - 1"
        />
      </template>
    </div>
  </div>
</template>

<script>
import Node from "./Node.vue";
import Node2 from "./Node2.vue";

export default {
  components: {
    Node,
    Node2,
  },
  data() {
    return {
      branchingFactor: 3,
      treeDepth: 3,
      initialized: false,
      count: 0,
      nodeType: 1,
    };
  },
  methods: {
    onUpdateBranchingFactor(event) {
      this.branchingFactor = parseInt(event.target.value, 10);
    },
    onUpdateTreeDepth(event) {
      this.treeDepth = parseInt(event.target.value, 10);
    },
    generate() {
      this.initialized = true;
    },
    generateSimple() {
      this.nodeType = this.nodeType == 1 ? 2: 1;
      this.initialized = true;
    },
    increment() {
      this.count += 1;
    },
  },
};
</script>
