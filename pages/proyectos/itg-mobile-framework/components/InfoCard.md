# Info card Component

An InfoCard is a component designed to present information in a concise, attractive and organized manner. It is used to show relevant details about a specific topic, such as a product, a brand, or a category. Its purpose is to capture the user's attention, provide a quick view of essential information and allow access to its detailed information.

![InfoCard](https://res.cloudinary.com/satronic/image/upload/v1712162379/InfoCard-complete_d0ftv3.png)

## Configuration

The following table shows the interface of the component, i.e. the properties through which you can control its appearance and behavior.

### `InfoCardProps` props

| Prop name          | Type      | Description                                                             | Default value |
| ------------------ | --------- | ----------------------------------------------------------------------- | ------------- |
| `title`            | `string`  | The title displayed on the InfoCard..                                   | -             |
| `imageUrl`         | `string`  | The URL of the image to be displayed on the InfoCard.                    | -             |
| `imageText`        | `string`  | The descriptive text that is placed above the image | -             |
| `buttonText`       | `string`  | The text shown in the Info Card button.                             | -             |
| `contentPosition`  | `enum`  | The position of the content (description, button) within the InfoCard. Available values ("center", "left", "right"). | `left` |
| `callToActionText` | `string`  | The text displayed on the call-to-action button.                        | -             |
| `csllToActionUrl`  | `string`  | Link or URL that directs users to a specific action or destination when clicked or tapped within the InfoCard component. This action could lead to a app route o external link.                             | -             |
| `className`        | `string`  | Name of the class through which you can access the customization of styles.                           | -             |

## Modus Operandi

This section outlines any behavioral changes that may occur depending on the configuration of the component. Currently, there are no specific behavioral changes to note.

## Customization

You can customize the appearance and behavior of the InfoCard component through the style handles found within the className property.

### Styles Handles

| Styles Handles             |
| ----------------------- |
| `containerHeader`       |
| `title`                 |
| `buttonContainer`       |
| `buttonTextStyle`       |
| `imageBackgroundStyles` |
| `textInfoCardStyles`    |


