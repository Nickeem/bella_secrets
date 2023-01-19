<script lang="ts">
    import type { Products, Products_array, payload } from './+page.server'
    import type { K, T } from 'vitest/dist/types-71ccd11d';
    import default_image from '$lib/images/pink_pineapple_sunrise.jpg';

    export let data:payload;

    let products = data.data;
    console.log(products);
    while (products.length < 20) {
      products.push(products[0]);
    }
    
</script>

<style>
  a.bella {
    color: white;
    font-family: 'Allura', cursive;
    font-size: 50px;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    text-decoration: none;
  }

  .body {
    background-color: rgb(255, 255, 255, 0.9992);
  }
  .inventory  {
    display: flex;
    flex-wrap: wrap; 
    padding: 5px;
    
  }

  .item {
    width: 320px;
    padding: 6px;
    margin-left: auto;
    margin-right: auto;
    border: 1px #ccc solid;
    margin-bottom: 6px;
    transition: box-shadow .3s;
    border-radius: 10px;
    background: #fff;
  }

  .item:hover {
    box-shadow: 0 0 11px rgba(138, 34, 217, 0.2); /* rgba(33,33,33,.2) **/
  }

  h2 {
    margin-left: 10px;
  }
</style>

<h1><a class="bella" href="/">Bella Secrets</a></h1>


<!-- load 20 items at a time -->
<div class="body">
  <h2>Inventory</h2>
  <div class="inventory">
    
    {#each products as product}
      <div class="item">
        <img src="{default_image}" width="300px" alt="Image of {product.type}">
        <div class="name">{product.name}</div>
        <div class="price">{product.price}</div>
      </div>
    {/each}
  </div>
</div>
  
