<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Excel-like Data Display</title>
    <style>
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th, td {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }
      th {
        background-color: #f2f2f2;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <table>
        <thead>
          <tr>
            <th>Segment</th>
            <th>Country</th>
            <th>Product</th>
            <th>Discount Band</th>
            <th>Units Sold</th>
            <th>Manufacturing Price</th>
            <th>Sale Price</th>
            <th>Gross Sales</th>
            <th>Discounts</th>
            <th>Sales</th>
            <th>COGS</th>
            <th>Profit</th>
            <th>Date</th>
            <th>Month Number</th>
            <th>Month Name</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in data" :key="row.id">
            <td>{{ row.segment }}</td>
            <td>{{ row.country }}</td>
            <td>{{ row.product }}</td>
            <td>{{ row.discountBand }}</td>
            <td>{{ row.unitsSold }}</td>
            <td>{{ row.manufacturingPrice }}</td>
            <td>{{ row.salePrice }}</td>
            <td>{{ row.grossSales }}</td>
            <td>{{ row.discounts }}</td>
            <td>{{ row.sales }}</td>
            <td>{{ row.cogs }}</td>
            <td>{{ row.profit }}</td>
            <td>{{ row.date }}</td>
            <td>{{ row.monthNumber }}</td>
            <td>{{ row.monthName }}</td>
            <td>{{ row.year }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Vue.js CDN -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          data: [
            {
              id: 1,
              segment: 'Segment 1',
              country: 'Country 1',
              product: 'Product 1',
              discountBand: 'Discount 1',
              unitsSold: 100,
              manufacturingPrice: 10,
              salePrice: 20,
              grossSales: 2000,
              discounts: 200,
              sales: 1800,
              cogs: 800,
              profit: 1000,
              date: '2024-07-29',
              monthNumber: 7,
              monthName: 'July',
              year: 2024
            },
            // Add more rows as needed
          ]
        }
      });
    </script>
  </body>
</html>
