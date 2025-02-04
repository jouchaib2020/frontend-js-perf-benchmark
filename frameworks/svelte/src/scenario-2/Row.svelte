<script>
import Cell from "./Cell.svelte";

export let columns;
let count = 0;
let offset = 0;

function onInput() {
    count += 1;
}
function updateRow() {
    offset += 1;
}

</script>

  <div style="margin-bottom: 20px">
    <div>
      Row: { count }
      <button class="row-btn-update-children" on:click="{updateRow}">
        + children
      </button>
      <button class="row-btn-update-self" on:click="{onInput}">+ parent</button>
    </div>
    {#each columns as column, i (column.id)}
        <Cell  value="{i + offset}" />
    {/each}    
  </div>