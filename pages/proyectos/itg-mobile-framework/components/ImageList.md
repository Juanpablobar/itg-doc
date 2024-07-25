# IMAGE LIST

The `ImageList` component is an image slider that provides customizable navigation options. This allows the slider to operate automatically or in an infinite loop, depending on the store's needs.

![Image Slider](./slider-images.gif)

## Configuration

The `ImageList` component exports the following props:

### `ImageList` props

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `images`      | `array`       | Array of images to render in the slider         |         |
| `autoplay`      | `boolean`       | Enables automatic play of the slider         | `false`        |
| `infinite`      | `boolean`       | Enables infinite scrolling behavior for the slider         | `false`        |
| `showPaginationDots`      | `boolean`       | Visibility of pagination dots in the slider         | `false`        |
| `height`      | `number \| string`       | Height of the component          | `40% of screen height`        |
| `objectFit`      | `string`       | Defines how the content of the image adjusts within the container         | `fill`        |
| `className`      | `string`       | Class name to apply custom styles         |         |

- `images` array: 

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `image`      | `string`       | Image URL         |        |
| `link`      | `object`       | Image URL         |         |

- `link` object:

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `url`      | `string`       | Redirect URL         |         |
| `external`      | `boolean`       | Indicate if the URL is internal or external         |         |

## Modus Operandi

The component offers the functionality to display pagination dots and can operate in infinite or automatic mode depending on the configurations provided through props.

## Customization

`In order to apply style customizations in this and other blocks, follow the instructions given in the recipe on [Using className Handles for store customization](TODO: Link to styles hook docs).`

| CSS Handles |
| ----------- |
| `container` |
| `dotsContainer` |
| `dot` |
| `activeDot` |
| `containerItem` |
| `image` |
