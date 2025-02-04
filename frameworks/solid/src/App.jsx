import { Router, Route, A } from "@solidjs/router";

import Scenario1 from "./test-scenarios/scenario-1";
import Scenario2 from "./test-scenarios/scenario-2";
import Scenario3 from "./test-scenarios/scenario-3";
import Scenario4 from "./test-scenarios/scenario-4";
import Scenario5 from "./test-scenarios/scenario-5";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/scenario-1" component={Scenario1} />
      <Route path="/scenario-2" component={Scenario2} />
      <Route path="/scenario-3" component={Scenario3} />
      <Route path="/scenario-4" component={Scenario4} />
      <Route path="/scenario-5" component={Scenario5} />
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h4>Select scenario</h4>
      <div>
        {[1, 3, 4, 5].map((i) => (
          <div key={i}>
            <label>
              Scenario {i}:{" "}
              {i === 1
                ? "Generate and delete components"
                : i === 2
                ? "Update components in a flat DOM tree"
                : i === 3
                ? "Update components in a deep DOM tree"
                : i === 4
                ? "Update components with static content"
                : ""}
            </label>
            <A href={`/scenario-${i}`}>
              <button id={`btn-scen-${i}`}>Select</button>
            </A>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
