# SearchSuggestions

The `SearchSuggestions` is a component that displays suggested terms based on the search term entered in the search bar and updates as the user types.

![Search Suggestions](./SearchSuggestions.png)

## Configuration

The `SearchSuggestions` component exports the following props

### `SearchSuggestions` props

| Prop name   | Type     | Description                       | Default value |
| ----------- | -------- | --------------------------------- | ------------- |
| `className` | `string` | Class name to apply custom styles |               |

## Customization

In order to apply style customizations to the `SearchSuggestions` component, follow the instructions given in the recipe on [Using className Handles for store customization](TODO: Link to styles hook docs).

| StyleSheet  |
| ----------- |
| `container` |
| `titleText` |
| `text`      |

## Modus Operandi

The behavior of the `SearchSuggestions` component depends directly on the Searchbar. When entering a search term, pressing a result will redirect you to the Search screen.
