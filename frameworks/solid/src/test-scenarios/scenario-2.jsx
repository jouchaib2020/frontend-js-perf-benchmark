import { createSignal } from "solid-js";

function Cell(props) {
  const [count, setCount] = createSignal(0);
  return (
    <span style={{ "margin-right": "10px" }}>
      outer: {props.value},<br /> inner: {count()}
      <button onClick={() => setCount(count() + 1)}>+</button>
    </span>
  );
}

const Row = (props) => {
  const [count, setCount] = createSignal(0);
  const [offset, setOffset] = createSignal(0);

  const onInput = () => setCount(count() + 1);

  const updateRow = () => setOffset(offset() + 1);

  return (
    <div>
      <div>
        Row: {count()}
        <button className="row-btn-update-children" onClick={updateRow}>
          + children
        </button>
        <button className="row-btn-update-self" onClick={onInput}>
          + parent
        </button>
      </div>
      <div style={{ display: "flex", "margin-bottom": "20px" }}>
        {props.columns.map((column, i) => (
          <Cell key={column.id} value={i + offset()} />
        ))}
      </div>
    </div>
  );
};

const Scenario2 = () => {
  const [numRows, setNumRows] = createSignal(10);
  const [numColumns, setNumColumns] = createSignal(10);
  const [rows, setRows] = createSignal([]);

  const updateRows = (value) => setNumRows(parseInt(value, 10));
  const updateColumns = (value) => setNumColumns(parseInt(value, 10));

  const generate = () => {
    setRows(
      new Array(numRows()).fill(null).map((_, i) => ({
        id: i,
        columns: new Array(numColumns()).fill(null).map((_, y) => ({
          id: `row${i}-col${y}`,
        })),
      }))
    );
  };

  return (
    <div>
      <div>
        <label>Number of rows</label>
        <input
          id="input-rows"
          type="number"
          min="1"
          value={numRows()}
          onChange={(event) => updateRows(event.target.value)}
        />
        <label>Number of columns</label>
        <input
          id="input-columns"
          type="number"
          min="1"
          value={numColumns()}
          onChange={(event) => updateColumns(event.target.value)}
        />
        <button id="btn-generate" onClick={generate}>
          Generate
        </button>
      </div>
      <div>
        {rows().map((row) => (
          <Row key={row.id} columns={row.columns} />
        ))}
      </div>
    </div>
  );
};

export default Scenario2;
