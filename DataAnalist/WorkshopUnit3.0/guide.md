GUIA DE EJERCICIOS UNIDAD III

1.- Indique el tipo de variable utilizada:

a) Número de usuarios activos en un sistema: La cantidad de usuarios en una plataforma (por ejemplo, un servidor) varía con el tiempo.

# Respuesta : (Variable aleatoria discreta).

b) Intervalo entre solicitudes en un servidor web: En un servidor web, el tiempo entre la llegada de solicitudes de usuarios no es fijo, (Variable continua ) esto ayuda en el análisis de tráfico y gestión de recursos.

# Respuesta : (Variable aleatoria continua )

c) Cantidad de intentos de autenticación fallidos: El número de intentos fallidos de inicio de sesión antes de un intento exitoso puede ser modelado como una variable continua, ayudando en el análisis de seguridad.

# Respuesta : (Variable aleatoria discreta).

d) Porcentaje de uso de la CPU:El uso de la CPU en un sistema varía a lo largo del tiempo y puede modelarse como una variable aleatoria continua Esto es útil en el monitoreo de rendimiento.

# Respuesta : (Variable aleatoria continua )

e) Duración de vida de un componente de hardware: La vida útil de un disco duro o de un procesador sigue una distribución de probabilidad que puede modelarse con una variable aleatoria continua. Es útil en análisis de confiabilidad y predicción de fallas.

# Respuesta : (Variable aleatoria continua )

2.- Resuelve los ejercicios relacionados con Función de distribución acumulada.
a) Tamaño de Archivos Descargados en un Servidor Un servidor almacena archivos con los siguientes tamaños (en MB : 10, 20, 30, 40 y 50, con las frecuencias:
10 MB: 5 veces
20 MB: 10 veces
30 MB: 15 veces
40 MB: 25 veces
50 MB: 20 veces

Calcula la FDA para cada tamaño de archivo.
Calcula la probabilidad de que un archivo sea de 30 MB o menos.
Interpreta los resultados para entender la distribución de tamaño de archivos en el
servidor.

# Respuesta

´´´

var tamaños = 10, 20, 30, 40, 50
var frecuencia = 5, 10, 15, 25, 20
var total_archivos = sum(frecuencias)
FuncionDeDistribucionAcumulada = []
var acumulado = 0

recorrer index desde 0 hasta longitud(tamaños)
acumulado = acumulado + frecuencias[index]
FuncionDeDistribucionAcumulada[index] = acumulado / total_archivos
fin recorrer

escribir "FDA para cada tamaño de archivo:"

recorre index de 0 hasta longitud(tamaños)
escribir "Tamaño:" + tamaños[index], "MB, Fu:", FuncionDeDistribucionAcumulada[index]
fin recorrer

var probabilidad_30mb_o_menos = FuncionDeDistribucionAcumulada[index(2)]

escribir "Probabilidad de que un archivo sea de 30 MB o menos:", probabilidad_30mb_o_menos

escribir "Interpretación: La FDA muestra la distribución acumulada de los tamaños de archivos en el servidor."
escribir "A partir de esta, se observa que un archivo tiene una probabilidad de", probabilidad_30_o_menos, " de que ser de 30 MB o menos."

´´´

3.- Resuelve los ejercicios relacionados con Función de Densidad de Probabilidad

a) Tiempo de Respuesta de un Servidor
Un servidor tiene tiempos de respuesta entre 1 y 3 segundos.  
Si se distribuyen de manera uniforme, la probabilidad de que el tiempo de
respuesta esté entre 1.5 y 2.5 segundos corresponde a ¿. ?

# Respuesta : considerando que el rango de respuesta normal de un servidor es 1 a 3 segundos, si se distribuye de manera uniforme el tiempo de respuesta la probabilidad de que el tiempo de respuesta esté entre 1.5 y 2.5 es de 0.5

b) Red de comunicaciones
El número de paquetes perdidos por segundo sigue una distribución normal con
una media de μ=3 paquetes por segundo y una desviación estándar de σ=1.
Calcula la probabilidad de que el número de paquetes perdidos en un segundo
esté entre 2 y 4.

# Respuesta : la probabilidad de que el número de paquetes perdidos en un segundo esté entre 2 y 4 es de 0.68 debido a que la media es 3 y la desviación estándar es 1 considerando que la probabilidad de que el número de paquetes perdidos en un segundo esté entre 2 y 4 es de 0.68

4.- Resuelve los ejercicios relacionados con Esperanza (valor esperado)

a) Esperanza de un Lanzamiento de un Dado
Supongamos que lanzamos un dado justo de seis caras. Las caras del dado tienen
los valores 1,2,3,4,5,6 respectivamente. Queremos calcular la esperanza o
valor esperado del resultado del lanzamiento del dado. ¿Cuál es el valor esperado
del lanzamiento del dado?

# Respuesta : el valor esperado del lanzamiento del dado es 3.5 debido a que la probabilidad de que salga un 1,2,3,4,5,6 es 1/6 (seria equivalente a la probabilidad de que salga un 1 en 6 que es el maximo), por lo tanto el valor esperado del lanzamiento del dado es 3.5
