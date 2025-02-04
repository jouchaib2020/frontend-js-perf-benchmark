
<span>outer: { value }, inner: { count }<button class="cell-btn-increment" on:click="{increment}">+</button></span>

<script>
let count = 0;
export let value;

function  increment() {
    count += 1;
}
</script>
