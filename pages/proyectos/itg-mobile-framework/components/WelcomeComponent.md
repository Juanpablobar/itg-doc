# Welcome Component

The Welcome Component is a component designed to welcome users to your application and offer them the options to log in or register. Its goal is to provide an intuitive and engaging entry point for users to navigate the application.

| ![InfoCard](./WelcomeComponent.png) |

## Configuration

The following table shows the interface of the component, i.e. the properties through which you can control its appearance and behavior.

### ModalCustomProps

| Prop name          | Type      | Description                                                             | Default value |
| ------------------ | --------- | ----------------------------------------------------------------------- | ------------- |
| `title`            | `string`  | The main title text to display in the component.                                 | `undefined`            |
| `subTitle`         | `string`  | The subtitle text that provides additional information below the title.                   | `undefined`            |
| `signupText`        | `string`  | The specific text to display on the registration button. | `undefined`            |
| `signupLink`       | `string`| The link or path that the user will be directed to when clicking the register button.                            | `undefined`        |
| `signinText`  | `string`  | The specific text to display on the login button. | `undefined` |
| `signinLink` | `string`  | The link or path that the user will be directed to when they click the login button. | `undefined`
| `className`        | `string`  |It accepts a class name found in the personliezable styles and contains the styles handles to customize the appearance and style of the component.| `undefined`             |

## Modus Operandi

This section describes the behavioral changes that may occur depending on the configuration of the component.
The Welcome Component makes use of the Modal Custom component to render its content overlaid on other components.

## Customization

You can customize the appearance and behavior of the Welcome component through the style handles found within the className property.

### Styles Handles

| Styles Handles             | Description |
| ----------------------- |-------------|
| `modalContent`       |Allows you to customize the modalcontent, passing this class inside the modal.
| `textsContainer`       |Allows to customize the texts (title, subTitle) container.
| `title`                 |Allows to customize the title
| `subTitle`       |Allows to customize the subtitle
| `buttonsContainer`       |Allows to customize the container buttoms
| `signupButton`       |Allows to customize the signup button
| `signupButtonText`       |Allows to customize signup button text
| `signinButton`       |Allows to customize the signin button
| `signinButtonText`       |Allows to customize the signin button text


