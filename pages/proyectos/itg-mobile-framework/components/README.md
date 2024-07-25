# Product Detail Container Component

The Product Detail Container Component is designed to manage the display of product details within a store. It coordinates with various sub-components to render information such as product image, brand, name, price, description, specifications, and more.

![Media Placeholder](https://user-images.githubusercontent.com/52087100/71204177-42ca4f80-227e-11ea-89e6-e92e65370c69.png)

## Configuration

### Exported Components

| Component                       | Description                                               |
| ------------------------------- | --------------------------------------------------------- |
| `ProductDetail`                 | Main component managing the display of product details.   |
| `ProductDetailImage`            | Renders the product image.                                |
| `ProductDetailFlags`            | Displays flags associated with the product.               |
| `ProductDetailBrand`            | Shows the brand name of the product.                      |
| `ProductDetailName`             | Displays the name of the product.                         |
| `ProductDetailPrice`            | Displays the price of the product.                        |
| `ProductDetailSku`              | Shows the SKU (Stock Keeping Unit) of the product.        |
| `ProductDetailQuantitySelector` | Allows selecting the quantity of the product to purchase. |
| `AddToCartButton`               | Button to add the product to the cart.                    |
| `ShareMedia`                    | Provides options for sharing the product on social media. |
| `Divider`                       | Renders a divider between different sections.             |
| `ProductDetailDescription`      | Displays the description of the product.                  |
| `ProductDetailSpecifications`   | Shows specifications of the product.                      |

### `ProductDetail` Props

| Prop name      | Type     | Description                                    | Default value |
| -------------- | -------- | ---------------------------------------------- | ------------- |
| `className`    | string   | Custom class name for styling purposes.        | `''`          |
| `product`      | object   | Information about the product being displayed. | `{}`          |
| `selectedItem` | object   | Currently selected item                        | `{}`          |
| `iconOrder`    | string[] | Order of icons for sharing media.              | `[]`          |

<a id="iconOrder"></a>

### `iconOrder` array Props

| Prop name   | Type     | Description                                                                     | Default value                           |
| ----------- | -------- | ------------------------------------------------------------------------------- | --------------------------------------- |
| `iconOrder` | string[] | Order of icons for sharing media. Omitting an icon will exclude it from display | `['whatsapp', 'instagram', 'facebook']` |

### `ProductDetailImage` Props

| Prop name               | Type                        | Description                                     | Default value |
| ----------------------- | --------------------------- | ----------------------------------------------- | ------------- |
| `className`             | string                      | Custom class name for styling purposes.         | `''`          |
| `scrollViewRef`         | React.RefObject<ScrollView> | Reference to the ScrollView component.          |               |
| `handleScroll`          | Function                    | Handler function for scroll events.             |               |
| `currentIndex`          | number                      | Index of the currently displayed image.         |               |
| `handlePaginationPress` | Function                    | Handler function for pagination button presses. |               |

### `ProductDetailFlags` Props

| Prop name   | Type   | Description                             | Default value |
| ----------- | ------ | --------------------------------------- | ------------- |
| `className` | string | Custom class name for styling purposes. |               |

### `ProductDetailBrand` Props

| Prop name   | Type   | Description                             | Default value |
| ----------- | ------ | --------------------------------------- | ------------- |
| `className` | string | Custom class name for styling purposes. |               |

### `ProductDetailName` Props

| Prop name   | Type   | Description                             | Default value |
| ----------- | ------ | --------------------------------------- | ------------- |
| `className` | string | Custom class name for styling purposes. |               |

### `ProductDetailPrice` Props [sub-component: `ProductDetailDiscount`]

| Prop name   | Type   | Description                             | Default value |
| ----------- | ------ | --------------------------------------- | ------------- |
| `className` | string | Custom class name for styling purposes. |               |

### `ProductDetailDiscount` Props

| Prop name     | Type     | Description                                                                         | Default value |
| ------------- | -------- | ----------------------------------------------------------------------------------- | ------------- |
| `className`   | string   | Custom class name for styling purposes.                                             |               |
| `listPrice`   | number   | The original price of the product.                                                  |               |
| `price`       | number   | The current price of the product.                                                   |               |
| `getDiscount` | Function | Function to calculate the discount based on the list and current prices. |               |

### `ProductDetailSku` Props

| Prop name         | Type                        | Description                                     | Default value |
| ----------------- | --------------------------- | ----------------------------------------------- | ------------- |
| `className`       | string                      | Custom class name for styling purposes.         |               |
| `handleSelectSKU` | (selectedSku: Item) => void | Function to handle the selection of a SKU item. |               |

### `ProductDetailQuantitySelector` Props

| Prop name           | Type       | Description                             | Default value |
| ------------------- | ---------- | --------------------------------------- | ------------- |
| `className`         | string     | Custom class name for styling purposes. |               |
| `decrementQuantity` | () => void | Function to decrement the quantity.     |               |
| `incrementQuantity` | () => void | Function to increment the quantity.     |               |
| `quantity`          | number     | The current quantity selected.          |               |
| `availableQuantity` | number     | The available quantity for selection.   |               |

### `AddToCartButton` Props

| Prop name   | Type   | Description                             | Default value |
| ----------- | ------ | --------------------------------------- | ------------- |
| `className` | string | Custom class name for styling purposes. |               |

### `ShareMedia` Props

| Prop name               | Type     | Description                                                      | Default value                           |
| ----------------------- | -------- | ---------------------------------------------------------------- | --------------------------------------- |
| `className`             | string   | Custom class name for styling purposes.                          |                                         |
| [iconOrder](#iconOrder) | string[] | Order of icons for sharing media.                                | `['facebook', 'instagram', 'whatsapp']` |
| `renderIcon`            | function | Function to render each share media icon based on its icon name. |                                         |
|                         |

### `Divider` Props

| Prop name      | Type   | Description                             | Default value |
| -------------- | ------ | --------------------------------------- | ------------- |
| `className`    | string | Custom class name for styling purposes. | -             |
| `marginTop`    | number | Margin on top of the divider.           | `8`           |
| `marginBottom` | number | Margin at the bottom of the divider.    | `16`          |

### `ProductDetailDescription` Props

| Prop name   | Type   | Description                             |
| ----------- | ------ | --------------------------------------- |
| `className` | string | Custom class name for styling purposes. |

### `ProductDetailSpecifications` Props

| Prop name   | Type   | Description                             |
| ----------- | ------ | --------------------------------------- |
| `className` | string | Custom class name for styling purposes. |

## Customization

`In order to apply style customizations in this and other blocks, follow the instructions given in the recipe on [Using className Handles for store customization](TODO: Link to styles hook docs).`

### `ProductDetailImage` Component

| CSS Handles       |
| ----------------- |
| `containerImage`  |
| `sliderContainer` |
| `image`           |
| `pagination`      |
| `dot`             |
| `activeDot`       |

### `ProductDetailFlags` Component

| CSS Handles      |
| ---------------- |
| `containerFlags` |
| `textFlags`      |

### `ProductDetailBrand` Component

| CSS Handles      |
| ---------------- |
| `containerBrand` |
| `textBrand`      |

### `ProductDetailName` Component

| CSS Handles     |
| --------------- |
| `containerName` |
| `textName`      |

### `ProductDetailPrice` Component

| CSS Handles      |
| ---------------- |
| `containerPrice` |
| `textPrice`      |

### `ProductDetailDiscount` Component

| CSS Handles             |
| ----------------------- |
| `containerDiscount`     |
| `textContainerDiscount` |
| `textPrice`             |
| `textDiscount`          |
| `textListPrice`         |

### `ProductDetailSku` Component

| CSS Handles    |
| -------------- |
| `containerSku` |
| `skuItem`      |
| `skuImage`     |

### `ProductDetailQuantitySelector` Component

| CSS Handles              |
| ------------------------ |
| `containerQuantity`      |
| `boxQuantity`            |
| `textQuantity`           |
| `buttonSelectorActive`   |
| `buttonSelectorInavtive` |
| `buttonSelector`         |
| `textSelector`           |

### `AddToCartButton` Component

| CSS Handles       |
| ----------------- |
| `containerButton` |
| `boxButton`       |
| `textButton`      |

### `ShareMedia` Component

| CSS Handles      |
| ---------------- |
| `containerMedia` |

### `Divider` Component

| CSS Handles        |
| ------------------ |
| `dividerContainer` |
| `divider`          |

### `ProductDetailDescription` Component

| CSS Handles            |
| ---------------------- |
| `containerDescription` |
| `titleDescription`     |
| `textDescription`      |

### `ProductDetailSpecifications` Component

| CSS Handles                      |
| -------------------------------- |
| `specificationsContainer`        |
| `specificationsTitle`            |
| `specificationsContentContainer` |
| `specificationsRowContainer`     |
| `specificationsRowName`          |
| `specificationsRowValue`         |
| `oddRowColor`                    |
| `evenRowColor`                   |
| `specificationsTextName`         |
| `specificationsTextValue`        |
