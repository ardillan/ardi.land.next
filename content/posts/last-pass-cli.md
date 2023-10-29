---
title: "LastPass CLI"
subtitle: "La interfaz de comandos contrataca"
date: "2021-10-04T20:40:00.0100"
type: "blog"
description: "Cómo utilizar LastPass desde la línea de comandos y sin interfaz web"
featuredImage: "./last-pass-cli-featured.png"
category:
  - Desarrollo
---

No siento demasiado apego a utilizar gestores de contraseñas que no sean nativos, como es el caso de **_iCloud_**. No por nada, simplemente funciono bastante bien con el que viene por defecto con iOS/macOS.

No obstante, sí que necesito hacerlo por cuestiones de trabajo; hace unos meses utilizaba [pass](https://github.com/peff/pass), una solución genial para el control de contraseñas que funcionaba mediante el uso de la terminal. Era (y es) súper rápido y permite gestionar todo de una manera muy cómoda. Hoy en día, utilizo LastPass, otra solución muy extendida pero que no me acaba de convencer del todo por su interfaz web, a mi juicio tosca, pesada y poco amigable. Es por eso que descubrí: **LastPass Cli**

### Control desde la terminal

Si eres alguien que utiliza LastPass pero echa en falta la rapidez de la terminal, te alegrará saber que gracias a esta utilidad podrás controlar todas tus contraseñas almacenadas en LastPass con el potencial que agrega una consola de comandos. Y es que tanto el manejo como la facilidad de instalarlo harán que te olvides de la tediosa tarea de utilizar la interfaz web de LastPass.

### Instalación

Para empezar puedes decargar _lastpass-cli_ desde su [repositorio oficial](https://github.com/lastpass/lastpass-cli). Está disponible para multitud de plataformas, en mi caso lo he instalado desde macOS (con Brew previamente configurado). Sólamente tendrás que ejecutar:

```bash
brew install lastpass-cli
```

Una vez instalado, podremos iniciar nuestra sesión mediante el comando

```bash
lpass login ardi@me.com
```

Nos pedirá que introduzcamos la contraseña (obviamente). Una vez hayamos iniciado la sesión, seremos capaces de consultar nuestras contraseñas almacenadas de forma segura dentro de LastPass. Si queremos verlas todas podemos ejecutar el comando `lpass ls` y nos aparecerá un listado de este tipo:

```bash
Nombre del grupo de contraseñas
- slack
- icloud
- figma
- gog
- japanesecomposers
- ...
```

Por último, si lo que queremos es ver la contraseña con toda su información no tendremos más que ejecutar: `lpass show japanesecomposers`.

```bash
[japanesecomposers]
Username: hirokazu@tanaka.com
Password: TanakaHip1234
Website: www.japanesecomposers.chiptune
```

Y si además hacerlo de una manera más segura y elegante, podremos incluso copiar la contraseña a nuestro portapapeles sin mostrarla en la terminal. Para ello utilizaremos el comando:

```bash
lpass show -c --password japanesecomposers
```

Con ello podremos copiarla y pegarla en nuestro formularios de manera segura.

Si quieres aprender más sobre esta utilidad, puedes [echar un vistazo a su manual](https://lastpass.github.io/lastpass-cli/lpass.1.html) con todas las _flags_ disponibles así como todo su potencial como añadir contraseñas, editarlas y borrarlas.
