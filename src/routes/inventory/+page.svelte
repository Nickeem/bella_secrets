<script lang="ts">
    import type { Products } from './+page.server'
    import type { K, T } from 'vitest/dist/types-71ccd11d';

    export let data = {"data": []};

    console.log("data",data);

    //const products: Products[] = data["data"];


</script>

<style>
  a.bella {
    color: white;
    font-family: 'Allura', cursive;
    font-size: 50px;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    text-decoration: none;
}
</style>

<h1><a class="bella" href="/">Bella Secrets</a></h1>
<h2>Inventory</h2>

<!-- load 20 items at a time -->
<div class="inventory">
  <div class="item">
    <img src="" alt="">
    <div class="name"></div>
    <div class="price"></div>
  </div>
</div>