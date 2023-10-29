---
title: "CakePHP + macOS"
date: "2018-03-30T20:00:00.0100"
author: Ardillán
type: "blog"
featuredImage: "./cake-php-mac-high-sierra-featured.jpg"
category:
  - Desarrollo
---

_"Cierro el chiringo"_ Éso fué lo que dije la última vez que intenté instalar [Cake](https://cakephp.org/) en mi equipo. Acabé tirándome de los pelos (mi amigo [Luís](https://twitter.com/luisangelarpe) puede dar fé de ello). Sí, sé que es fácil instalarlo y mucho más si usas [composer](https://getcomposer.org/). El problema que tenía son las dichosas extensiones [intl](https://php.net/manual/es/intro.intl.php) que me resultaban imposibles de instalar/localizar; o bien el link de Stack Overflow estaba desactualizado, o bien mi equipo lanzaba un error que hacía engorroso seguir adelante.

Hoy he vuelto a sentarme y, en cuestion de 10 minutos, lo he solucionado. Sólo hacía
falta calma y templanza.

Es por eso lo que me ha llevado a escribir este _post-rápido_ donde dejo las anotaciones a tener en cuenta para instalar. Quizá alguien lo encuentre útil porque ha tenido el mismo problema
.

En primer lugar me gustaría indicar el contexto en el que se haya esta guía:

1. macOS High Sierra 10.13.2
2. Cake PHP 3.5.1
3. Composer
4. Brew
5. MAMP
6. PHP 7.1.14

# Instalando herramientas

Para comenzar deberemos instalar Composer y Brew. Resumiendo, composer permitirá manejar nuestras librerías de php. Brew, en cambio, permitirá instalar paquetes en nuestro sistema que nos sean de utilidad.

### Instala composer

Para instalar composer puedes seguir su [guía oficial](https://getcomposer.org/). Recuerda instalarlo como variable global, será más cómodo de utilizar.

### Instala brew

De la misma manera, la [guía oficial de brew]() indica perfectamente cómo instalarlo.

Hecho esto, podemos probara instalar CakePHP en nuestro equipo, para ello podemos ejecutar
el siguiente comando

```bash
php composer.phar create-project --prefer-dist cakephp/app nombre_de_mi_proyecto
```

## Si todo ha ido bien, se creará el proyecto en la carpeta donde hayamos indicado. Sólo tendremos que acceder vía navegador

Esta guía ha sido realizada con la siguiente documentación.

- [Hilo de Stack Overflow](https://stackoverflow.com/a/47968488/9425344)
- [Guía oficial de CakePHP](https://book.cakephp.org/3.0/en/installation.html)
- [Guía oficial de composer](https://getcomposer.org/)
- [Guía oficial de brew](https://brew.sh/index_es)
