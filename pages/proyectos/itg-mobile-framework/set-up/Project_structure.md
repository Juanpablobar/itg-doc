# ¿Qué incluye el proyecto (template) y cómo configurarlo?

El proyecto sigue una estructura típica de una aplicación de React Native, con la adición de una configuración específica en el archivo **`plugins.config.js`** ubicado en la raíz del proyecto.

## Carpeta src

La carpeta src contiene los archivos principales de la aplicación. Aquí se encuentran las siguientes subcarpetas:

### components

Esta carpeta contiene los componentes propios o personalizados de la tienda (si aplica), como botones, tarjetas, barras de navegación, etc. Si la tienda que se quiere construir no requiere personalización en la lógica de los componentes base o algún componente personalizado, esta carpeta puede estar vacía.

### styles

Aquí se almacenan los estilos globales y específicos de la aplicación, como hojas de estilo, temas y variables.

Para más detalles revisa nuestra [guía de aplicación de estilos](/itg-mobile-framework/component_development/style_your_components).

### tests

Esta carpeta contiene los archivos de pruebas automatizadas para asegurar los flujos principales de la aplicación.

Para más detalles sobre tests automatizados revisar test automatizados.

## plugins.config.js

El archivo plugins.config.js, que puedes encontrar en la raíz del proyecto, es responsable de especificar la configuración del CMS (Sistema de Gestión de Contenidos) y la plataforma de comercio electrónico que se utilizarán en la aplicación.

### Configuración CMS

Se pueden incluir detalles como las claves de acceso, la configuración de autenticación, etc.

### Configuración de la plataforma ecommerce

Aquí se pueden definir detalles como las claves de autenticación, las configuraciones generales de la cuenta, tipo de moneda a usar, entre otros.

### Integraciones de plugins

Si la aplicación utiliza plugins o extensiones específicas para el CMS o la plataforma de ecommerce, estas configuraciones también pueden incluirse aquí.

Ejemplo de **`plugins.config.js`**:

```jsx
module.exports = {
  plugins: [
    {
      resolve: `itg-cms-plugin`,
      options: {
        provider: `itg`,
        account: `itglobers`,
        workspace: `master`,
      },
    },
    {
      resolve: `itg-ecommerce-plugin`,
      options: {
        provider: `vtex`,
        account: `itglobers`,
        workspace: `master`,
        culture: {
          country: 'COL',
          currency: 'COP',
          customCurrencyDecimalDigits: 0,
          customCurrencySymbol: '$',
          language: 'es',
          locale: 'es-CO',
        },
      },
    },
  ],
}
```

Esta estructura y el archivo de configuración proporcionan una base sólida para comenzar a desarrollar la aplicación de comercio electrónico en React Native, permitiendo una fácil expansión y personalización según las necesidades del proyecto.

Para entender mejor esta configuración y como es usada revisa las secciones [itg-ecommerce-plugin](/itg-mobile-framework/core-set-up/e-commerce-plugin) y [itg-cms-plugin](/itg-mobile-framework/core-set-up/cms-plugin).

## Archivo index.tsx

Por último, encontrarás este archivo que sirve como punto de entrada principal de la aplicación, donde se realiza la inicialización de React Native y se monta el componente raíz de la aplicación.

Este componente viene de la librería CORE y recibe como propiedades:

- Hojas de estilos globales y estilos custom, desde la carpeta [`styles`](#styles)
- Listado de plugins a utilizar desde el archivo **`plugins.config.js`**
- Componentes custom, en caso de tenerlos, desde la carpeta [`components`](#components).

### Inicialización de tu aplicación

Antes de inicializar tu proyecto, tu archivo **`index.tsx`** debería verse así:

```jsx
import React from 'react'
import Core from 'itg-core'
import analytics from '@react-native-firebase/analytics'

import { customComponents as components } from './components'
import { GlobalStyles } from './styles/config/styles'
import { Styles } from './styles'
import { plugins } from '../plugins.config'

const App = () => {
  analytics().setAnalyticsCollectionEnabled(true)

  return (
    <Core
      components={components}
      data={{ GlobalStyles, Styles }}
      plugins={plugins}
    />
  )
}
```
