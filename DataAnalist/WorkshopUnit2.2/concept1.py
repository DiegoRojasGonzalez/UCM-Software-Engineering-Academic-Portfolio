import random

# Opciones de estudio
opciones_estudio = ["practicar codificación", "revisar notas teóricas", "ver videos tutoriales"]

# Generar 150 eleciones aleatorias
selections = [random.choice(opciones_estudio) for _ in range(150)]

# Contar cuántas veces se elige cada opción
count_coding = selections.count("practicar codificación")
count_notes = selections.count("revisar notas teóricas")
count_videos = selections.count("ver videos tutoriales")

# Calcular la frecuencia relativa de cada enfoque de estudio
frecuency_code = count_coding / 150
frecuency_notes = count_notes / 150
frecuency_videos = count_videos / 150

# Mostrar los resultados
print("Resultados:")
print(f"Practicar codificación: {count_coding} veces ({frecuency_code:.2%})")
print(f"Revisar notas teóricas: {count_notes} veces ({frecuency_notes:.2%})")
print(f"Ver videos tutoriales: {count_videos} veces ({frecuency_videos:.2%})")
