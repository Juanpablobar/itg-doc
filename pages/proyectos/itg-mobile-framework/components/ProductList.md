# PRODUCT LIST

The `ProductList` component is designed to represent a list of products, offering the ability to apply filters and sorting. Includes an optional title and a button to access the PLP and see all related products.

![Product List](./product-list.gif)

## Configuration

The `ProductList` component exports the following props:

### `ProductList` props

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `hideUnavailableItems`      | `boolean`       | Hide unavailable products         |    `false`     |
| `skusFilter`      | `string`       | Product SKU filter         |   `'ALL'`      |
| `installmentCriteria`      | `string`       | Define the rules for payment installments         |    `'ALL'`     |
| `category`      | `string`       | Show products from a specific category        |         |
| `collection`      | `string`       | Show products from a specific collection         |         |
| `orderBy`      | `string`       | Sorting method for the products         |         |
| `itemsPerPage`      | `number`       | Number of products per page         |    `10`     |
| `maxItems`      | `number`       | Maximum number of products in the list        |    `100`     |
| `title`      | `string`       | Product List Title         |   `'Nuevos productos'`      |
| `productWidth`      | `number \| string`       | Width of product cards         | `150`        |
| `imageResizeMode`      | `string`       | Defines how the image content of the products is adjusted        | `cover`        |
| `addToCartButton`      | `boolean`       | Control the visibility of the add to cart button for products       | `true`        |
| `textAddToCart`      | `string`       | Text of the add to cart button for products          | `Añadir`        |
| `textAvailability`      | `string`       | Text of the add to cart button for  unavailable products        | `No disponible`        |
| `buttonActiveOpacity`      | `number`       | Active opacity of the add to cart button for products         |    `0.5`    |
| `className`      | `string`       | Class name to apply custom styles         |         |



## Customization

`In order to apply style customizations in this and other blocks, follow the instructions given in the recipe on [Using className Handles for store customization](TODO: Link to styles hook docs).`

| CSS Handles |
| ----------- |
| `mainContainer` |
| `titleAndButtonContainer` |
| `listTitle` |
| `listButton` |
| `listButtonText` |
| `listContainer` |
| `nextPageLoaderContainer` |
| `nextPageLoader` |
| `productContainer` |
| `productImageContainer` |
| `productImage` |
| `containerPrice` |
| `productListPrice` |
| `containerPriceAndDiscount` |
| `productPrice` |
| `productDiscount` |
| `productName` |
| `productDescription` |
| `productButtonContainer` |
| `productButtonContainerDisabled` |
| `productButtonText` |
| `productButtonTextDisabled` |
| `productFlagsContainer` |
| `productFlag` |
