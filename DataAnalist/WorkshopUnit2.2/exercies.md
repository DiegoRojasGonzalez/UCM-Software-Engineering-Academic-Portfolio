# GUA DE EJERCICIÓS

## 1.0 CONCEPTO: Experimento aleatorio

Situación: Un grupo de estudiantes de ingeniería en programación está preparándose para un examen de estructuras de datos y algoritmos. Los estudiantes suelen utilizar tres enfoques diferentes para estudiar: practicar ejercicios de codificación en línea, revisar notas y materiales teóricos, o ver videos tutoriales.

Se les pide a los estudiantes que simulen el comportamiento de 150 compañeros de clase eligiendo al azar uno de los tres enfoques de estudio. Luego, deberán calcular la probabilidad aproximada de que un estudiante seleccione cada uno de los métodos de estudio, basado en los resultados simulados.

Tarea de Programación:
Los estudiantes deben escribir un programa en Python que:

1.Genere 150 elecciones aleatorias entre las opciones de estudio (practicar codificación, revisar notas teóricas, ver videos tutoriales).

2.Cuente cuántas veces se elige cada método de estudio.

3.Calcule la frecuencia relativa de cada enfoque de estudio y muestre los resultados.

### RESPUESTA

Resultados:
Practicar codificación: 52 veces (34.67%)
Revisar notas teóricas: 49 veces (32.67%)
Ver videos tutoriales: 49 veces (32.67%)

En el experimento simulado, la opción más elegida fue "practicar codificación" con un 34.67%, mientras que "revisar notas teóricas" y "ver videos tutoriales" se eligieron con la misma frecuencia (32.67% cada una). Esto sugiere una distribución relativamente equilibrada entre los métodos de estudio.

## 2.0 CONCEPTO: Experimento aleatorio

Situación: Los estudiantes de ingeniería en programación están desarrollando un proyecto en el que deben implementar un sistema que simula el lanzamiento de dos dados de seis caras para generar resultados aleatorios. El objetivo es analizar el comportamiento de este sistema y entender el concepto de espacio muestral en juegos de azar.

Pregunta: ¿Cuál es el espacio muestral de lanzar dos dados, y qué probabilidades tienen los diferentes resultados (suma de los números en los dados)?

Descripción del Experimento:
1.Experimento aleatorio: Se lanzan dos dados de seis caras y se registra la suma de los números obtenidos.

2.Espacio muestral (S): El conjunto de todos los resultados posibles de la suma de dos dados:

S={2,3,4,5,6,7,8,9,10,11,12}
donde 2 es el mínimo (1+1) y 12 es el máximo (6+6).

3.Evento (E): Por ejemplo, el evento A puede ser "La suma es igual a 7".

Tarea de Programación:
Los estudiantes deben escribir un programa en Python que:
1.Simule 1000 lanzamientos de dos dados.
2.Registre cuántas veces ocurre cada posible suma (entre 2 y 12).
3.Calcule la frecuencia relativa de cada suma y la compare con la probabilidad teórica.

### Respuesta

Suma Frecuencia Relativa Probabilidad Teórica
2 0.0230 0.0278
3 0.0550 0.0556
4 0.0750 0.0833
5 0.1060 0.1111
6 0.1380 0.1389
7 0.1730 0.1667
8 0.1390 0.1389
9 0.1160 0.1111
10 0.0860 0.0833
11 0.0600 0.0556
12 0.0290 0.0278

## 3.0 CONCEPTO: Experimento aleatorio

Situación: Un estudiante lanza una moneda y un dado de seis caras de manera simultánea. El objetivo es determinar la probabilidad de que salga cara en la moneda y un número mayor a 4 en el dado (5 o 6). Este problema combina dos eventos sencillos y refuerza el concepto de eventos y probabilidad condicional.

Descripción del Experimento:
1.Experimento aleatorio: Se lanza una moneda y un dado, registrando los resultados.

2.Eventos:
Evento A: El resultado de la moneda es cara.
Evento B: El resultado del dado es un número mayor a 4 (es decir, 5 o 6).

El evento que queremos analizar es que ocurran ambos eventos simultáneamente, es decir, obtener cara y un número mayor a 4 en el mismo lanzamiento.

3.Espacio muestral (S):
Para la moneda: Smoneda={cara,cruz}.
Para el dado: Sdado={1,2,3,4,5,6}.

4.Probabilidad teórica:
oLa probabilidad de que ocurra el evento A (cara en la moneda) es P(A)=1/2​. (50%)

oLa probabilidad de que ocurra el evento B (número mayor a 4 en el dado) es P(B)= 2/6 = 1/3. (33,33%)

oLa probabilidad de que ambos eventos ocurran juntos es el producto de las probabilidades individuales, dado que son independientes:

P(A∩B)= P(A)×P(B)= 1/2×1/3 = 1/6

Tarea de Programación:
Los estudiantes deben escribir un programa en Python que:
1.Simule 1000 lanzamientos simultáneos de una moneda y un dado.
2.Cuente cuántas veces ocurre el evento "cara y número mayor a 4".
3.Calcule la frecuencia relativa del evento.

### Respuesta

Se obtuvo 'cara y número mayor a 4' 159 veces en 1000 tryings.
La frecuencia relativa del evento es: 0.1590

# 4.0 CONCEPTO: Función de probabilidad

En base a los ejercicios realizados utilizo “Función de probabilidad” porque y donde fue utilizada.

### Respuesta

En todos los ejercicios, se usó la función de probabilidad para calcular la frecuencia relativa de los eventos. En el ejercicio 1, se usó para las elecciones de métodos de estudio; en el ejercicio 2, para las sumas posibles al lanzar dos dados; y en el ejercicio 3, para el evento de obtener "cara" y un número mayor a 4.

# 5.0 CONCEPTO: Axiomas y Propiedades

En base a los ejercicios realizados que “Axiomas y Propiedades” fueron utilizados, porque.

### Respuesta

Axioma de no negatividad: Las probabilidades calculadas siempre fueron mayores o iguales a 0.
Axioma de normalización: La suma de todas las probabilidades es igual a 1, ya sea para los métodos de estudio, las sumas de los dados, o las combinaciones de moneda y dado.
Aditividad: En el ejercicio 2, la probabilidad de cada suma se obtiene sumando las probabilidades de sus combinaciones.

# 6.0 CONCEPTO: Probabilidad Condicional

En que ejercicio utilizo la Probabilidad Condicional, explique.

### Respuesta

La probabilidad condicional aparece en el ejercicio 3, donde analizamos la probabilidad de que ocurran simultáneamente dos eventos independientes: que salga "cara" y un número mayor a 4 en el dado.
