import { createSignal } from "solid-js";

const StaticNode = (props) => (
  <div>
    {props.subtreeDepth > 0 &&
      [...Array(props.branchingFactor)].map((_, i) => (
        <StaticNode
          key={i}
          branchingFactor={props.branchingFactor}
          subtreeDepth={props.subtreeDepth - 1}
        />
      ))}
    -
  </div>
);

const DynamicNode = (props) => {
  const [count, setCount] = createSignal(0);

  const increment = () => {
    setCount(count() + 1);
  };

  return (
    <div>
      {props.subtreeDepth > 0 &&
        [...Array(props.branchingFactor)].map((_, i) => (
          <DynamicNode
            key={i}
            branchingFactor={props.branchingFactor}
            subtreeDepth={props.subtreeDepth - 1}
          />
        ))}
      <div>
        {count}
        <button className="btn-increment-leaf" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

const Scenario3 = () => {
  const [branchingFactor, setBranchingFactor] = createSignal(0);
  const [treeDepth, setTreeDepth] = createSignal(0);
  const [initialized, setInitialized] = createSignal(false);
  const [count, setCount] = createSignal(0);
  const [nodeType, setNodeType] = createSignal(1);

  const onUpdateBranchingFactor = (event) => {
    setBranchingFactor(parseInt(event.target.value, 10));
  };

  const onUpdateTreeDepth = (event) => {
    setTreeDepth(parseInt(event.target.value, 10));
  };

  const generate = () => {
    setNodeType(1);
    setInitialized(true);
  };

  const generateSimple = () => {
    setNodeType(2);
    setInitialized(true);
  };

  const increment = () => {
    setCount(count() + 1);
  };

  return (
    <div>
      <label>branching factor</label>
      <input
        id="input-branching-factor"
        type="number"
        onChange={onUpdateBranchingFactor}
      />
      <label>tree depth</label>
      <input id="input-tree-depth" type="number" onChange={onUpdateTreeDepth} />
      <button id="btn-generate" onClick={generate}>
        Generate tree
      </button>
      <button id="btn-generate-simple" onClick={generateSimple}>
        Generate static tree
      </button>
      <div>{count()}</div>
      <button id="btn-increment-root" onClick={increment}>
        + root
      </button>
      {initialized() && (
        <div>
          {nodeType() === 1
            ? [...Array(branchingFactor())].map((_, i) => (
                <DynamicNode
                  key={i}
                  branchingFactor={branchingFactor()}
                  subtreeDepth={treeDepth() - 1}
                />
              ))
            : [...Array(branchingFactor())].map((_, i) => (
                <StaticNode
                  key={i}
                  branchingFactor={branchingFactor()}
                  subtreeDepth={treeDepth() - 1}
                />
              ))}
        </div>
      )}
    </div>
  );
};

export default Scenario3;
