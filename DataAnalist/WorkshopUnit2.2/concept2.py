import random

# Simular el lanzamiento de dos dados 1000 veces
tryings = 1000
results = [random.randint(1, 6) + random.randint(1, 6) for _ in range(tryings)]

# Contar cuántas veces ocurre cada posible suma (de 2 a 12)
muestral_space = list(range(2, 13))
result_counts = {suma: results.count(suma) for suma in muestral_space}

# Calcular la frecuencia relativa de cada suma
relative_frecuency = {suma: conteo / tryings for suma, conteo in result_counts.items()}

# Probabilidad teórica de cada suma (de acuerdo al número de combinaciones posibles para cada suma)
probabilities_theorics = {
    2: 1/36, 3: 2/36, 4: 3/36, 5: 4/36, 6: 5/36,
    7: 6/36, 8: 5/36, 9: 4/36, 10: 3/36, 11: 2/36, 12: 1/36
}

# Mostrar los results
print("Suma\tFrecuencia Relativa\tProbabilidad Teórica")
for suma in muestral_space:
    print(f"{suma}\t{relative_frecuency[suma]:.4f}\t\t{probabilities_theorics[suma]:.4f}")
