# Image Slider Component

This component provides functionality for displaying an image slider in a store, allowing users to navigate through a set of images.

![Image Slider](https://user-images.githubusercontent.com/52087100/71204177-42ca4f80-227e-11ea-89e6-e92e65370c69.png)

## Configuration

The table below lists the props exported by the main component along with their descriptions:

### `ImageSliderContainer` props

| Prop name          | Type      | Description                                                             | Default value |
| ------------------ | --------- | ----------------------------------------------------------------------- | ------------- |
| `images`           | `array`   | Array of images to be displayed in the slider.                          | -             |
| `itemsPerView`     | `number`  | Number of items to display per view in the slider.                      | -             |
| `showPartialImage` | `boolean` | Whether it should display partially the next image of the slider or not | -             |
| `className`        | `string`  | Custom CSS class name for styling purposes.                             | -             |

### `ImageSlider` props

| Prop name        | Type       | Description                                                                  | Default value |
| ---------------- | ---------- | ---------------------------------------------------------------------------- | ------------- |
| `redirectToFn`   | `function` | Function to handle redirection on image click.                               | -             |
| `className`      | `string`   | Custom CSS class name for styling purposes.                                  | -             |
| `images`         | `array`    | Array of images to be displayed in the slider.                               | -             |
| `itemsPerView`   | `number`   | Number of items to display per view in the slider.                           | -             |
| `calculateSizes` | `function` | Function to calculate image sizes and item width based on screen dimensions. | -             |
| `onLayout`       | `function` | Function to calculate the width of the parent component.                     | -             |

#### `calculateSizes` object:

| Prop name   | Type     | Description                        | Default value |
| ----------- | -------- | ---------------------------------- | ------------- |
| `imageSize` | `number` | Size of the image to be displayed. | -             |
| `itemWidth` | `number` | Width of each item in the slider.  | -             |

#### `onLayout` object:

| Prop name | Type                | Description     | Default value |
| --------- | ------------------- | --------------- | ------------- |
| `event`   | `LayoutChangeEvent` | Event onLayout. | -             |

## Modus Operandi

This section outlines any behavioral changes that may occur depending on the configuration of the component. Currently, there are no specific behavioral changes to note.

## Customization

In order to apply style customizations to this component, follow the instructions provided in the documentation on [Using className Handles for store customization](TODO: Link to styles hook docs).

### CSS Handles

| CSS Handles             |
| ----------------------- |
| `container`             |
| `contentContainerStyle` |
| `itemContainer`         |
| `imageStyle`            |
| `text`                  |
