---
title: "Personaliza la barra de navegación en Android"
subtitle: "Colorea la barra e intégrala con tu desarrollo web"
date: "2014-12-15T15:30:00.0100"
type: "blog"
description: "Personaliza la barra de navegación de tu aplicación en Android"
featuredImage: "./colorea-la-barra-de-chrome-en-android-1.jpg"
category:
  - Desarrollo
---

**Android Lollipop** trae muchas novedades, una de las últimas es la posibilidad de colorear nuestra barra de navegación cuando entramos a nuestra web con nuestro dispositivo utilizando **Chrome**.

El proceso es bastante sencillo, tal como indican en [Android Police](https://www.androidpolice.com/2014/11/10/chrome-v39-on-lollipop-supports-custom-multitasking-headerstatus-bar-colors-with-a-simple-html-tag/), lo único que deberemos hacer es añadir en la sección **head** de nuestra web una nueva línea con la etiqueta `<meta>` y dos propiedades: `name` y `content`.

```html
<meta name="”theme-color”" content="”#333c3e”" />
```

Con este pequeño cambio personalizaremos aún más nuestra web en dispositivos Android, dándole un aspecto acorde al **Material Design** que tanto está dando que hablar. El resultado en mi caso queda tal que así:

![Imagen de ejemplo](./colorea-la-barra-de-chrome-en-android-2.jpg)
