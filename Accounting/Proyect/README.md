# Requisitos

-   R version 4.1.2 (2021-11-01)
-   pdftools (poppler version 22.02.0)

    > [!NOTE]  
    > Para instalar la biblioteca use el siguiente comando `sudo apt-get install libpoppler-cpp-dev`

# Instalar proyecto

## Paso 1:

-   Abre una terminal y navega al directorio `/Proyect`. Luego, inicia una sesión de R:

```sh
R
```

## Paso 2:

-   Restaurar el Entorno con renv

```sh
library(renv)
renv::restore()
```

## Paso 3:

```sh
source("R/main.R")
```
