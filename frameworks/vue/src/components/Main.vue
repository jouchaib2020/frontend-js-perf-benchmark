<template>
  <div>
      <h4>Select scenario</h4>
      <div>
        <div>
          <label>Scenario 1: Generate and delete components</label>
          <router-link id="btn-scen-1" to="/scenario-1">Select</router-link>
        </div>
        <div>
          <label>
            Scenario 2: Update components in a flat DOM tree
          <router-link id="btn-scen-2" to="/scenario-2">Select</router-link>
          </label>
        </div>
        <div>
          <label>
            Scenario 3: Update components in a deep DOM tree
          <router-link id="btn-scen-3" to="/scenario-3">Select</router-link>
          </label>
        </div>
        <div>
          <label>
            Scenario 4: Update components containing mostly static content
          <router-link id="btn-scen-4" to="/scenario-4">Select</router-link>
          </label>
        </div>
        <div>
          <label>
            Scenario 5
          <router-link id="btn-scen-5" to="/scenario-5">Select</router-link>
          </label>
        </div>
      </div>
    </div>
</template>

<script>
import Scenario1 from "./scenario-1/Scenario1.vue";
import Scenario2 from "./scenario-2/Scenario2.vue";
import Scenario3 from "./scenario-3/Scenario3.vue";
import Scenario4 from "./scenario-4/Scenario4.vue";
import Scenario5 from "./scenario-5/Scenario5.vue";

export default {
  components: {
    Scenario1,
    Scenario2,
    Scenario3,
    Scenario4,
    Scenario5,
  },
};
</script>
