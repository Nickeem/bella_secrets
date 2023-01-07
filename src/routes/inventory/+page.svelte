<script lang="ts">
    import type { Products } from './+page.server'
    export let data: Products[] = [
    {
      id: 'oMYlGzX6ZvBYt0WFtzDk',
      Brand: 'Bath & Body Works',
      Image_Name: '20230104_145611.webp',
      Product_Name: 'Cucumber Melon',
      Product_Type: 'Gentle Foaming Hand Soap',
      Quantity: 1
    }
  ];

    console.log(data)
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