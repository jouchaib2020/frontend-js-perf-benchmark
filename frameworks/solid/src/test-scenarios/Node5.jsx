import { createSignal } from "solid-js";

export default function Node5(props) {
  const [count, setCount] = createSignal(0);
  return (
    <div>
      {props.prop}
      <div>
        {count()}
        <button
          className="btn-increment-node"
          onClick={() => setCount(count() + 1)}
        >
          +
        </button>
      </div>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      {props.subtreeDepth > 0 &&
        [...Array(props.branchingFactor)].map((_, i) => (
          <Node5
            key={i}
            branchingFactor={props.branchingFactor}
            subtreeDepth={props.subtreeDepth - 1}
            prop={props.prop}
          />
        ))}
    </div>
  );
}
