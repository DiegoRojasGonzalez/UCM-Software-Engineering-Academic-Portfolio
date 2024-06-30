# Proyecto contabilidad

### Profesor

-   Luis Laurens

### Integrantes

-   Diego Rojas González (21.255.337-9)
-   Juan Pablo Mella (20.533.183-2)

### Curso

-   Contabilidad y costos

### Fecha

-   19-06-2024

## Introducción

La consultora "Data Group", especializada en data analytics, ha sido contratada por la empresa " Research BIM" para llevar a cabo un análisis detallado de sus ventas minoristas y mayoristas con el objetivo de proyectar sus ganancias futuras. En este informe, se presentará el proceso utilizado para calcular estas proyecciones, detallando cómo se ha interpretado la información proporcionada por la empresa en un documento PDF. A través de este análisis, se mostrará cómo se ha llegado a las conclusiones y recomendaciones finales para el cliente.

## Desarrollo del Código en R

El objetivo de este proyecto es desarrollar un proceso en R para proyectar los ingresos por ventas
(mayoristas y/o minoristas) de la empresa ficticia "nombre inventado por ti". El procedimiento se
realizará paso a paso utilizando la base de datos original en Excel proporcionada por la empresa,
aplicando técnicas de análisis y modelado de datos para obtener una proyección precisa y detallada
de los ingresos por ventas futuros.

-   Instalación de R en el sistema

-   Instalación de lenguaje R en mi sistema operativo

-   Creación de entorno virtual para R
    Accedemos a la terminal de R ingresando en nuestra terminal ‘R’ y luego instalamos ‘renv‘ para
    utilizar un entorno virtual, de esta forma las dependencias que instalaremos posteriormente
    quedaran a nivel virtual y no a nivel de sistema operativo, esto es una buena practica para evitar
    conflictos de dependencias a futuro.

-   Preparación de arquitectura del proyecto

    Integrar una arquitectura básica para poder trabajar en un entorno mas rápido y
    ordenado
    Data -> Guardamos diferente tipo de fuente de información ya sean procesadas
    ( Procesadas por un Script en R o Python ) o crudas (Aquí guardamos el input base
    que nos entrego el cliente)

-   Preparación de datos
-   Recuperar datos de base de datos (PDF)
    En un comienzo leemos los datos del PDF usando la librería ‘pdftools’
-   Limpiar los datos para procesarlos
-   Limpiamos los datos para que tengan una estructura correcta agregando caracteres para
-   distinguir filas de columnas
-   Guardar datos en archivo JSON

-   Aplicar formula de regresión lineal con los datos
-   Leemos el JSON y usamos la formula de la regresion lineal para obtener una proyección de ganancias
    a los años 2024 a 2028, luego agregamos al JSON los datos antiguos obteniendo en df_resultado
    todos los años en una variable para luego gratificarlos
-   Creación de Gráficos mostrando los resultados
    Hacemos 2 gráficos para poder visualizar de mejor forma las métricas ( Realizamos 5 sin embargo el
    código correcto y útil solo aplica a 2 gráficos )

## Proyección de Ingresos por Ventas

-   Considerando los valores que nos entrego la formula de proyección en el Script realizado.

## Conclusiones

En conclusión, el análisis contable realizado proporciona una visión clara y detallada de la situación
financiera de la empresa ficticia "nombre inventado por ti". A través de la revisión de los estados
financieros, se pudo identificar y evaluar la situación de los activos, pasivos y el patrimonio neto de la
empresa.

En cuanto a la proyección de ventas, se desarrolló un proceso en R para proyectar los ingresos por
ventas de la empresa, utilizando técnicas de análisis de datos y modelado para obtener una
proyección precisa y detallada. Este proceso involucró la preparación de los datos, el análisis de
tendencias históricas, la selección y entrenamiento de un modelo de proyección, y la proyección de
los ingresos por ventas futuros.
En resumen, este trabajo de contabilidad genérica proporcionó una visión integral de la situación
financiera de la empresa "Research BIM" y sentó las bases para la toma de decisiones informadas y
estratégicas en el futuro. La combinación de análisis contable y proyección de ventas brinda una
perspectiva completa que puede ser de gran utilidad para la dirección y gestión de la empresa.
