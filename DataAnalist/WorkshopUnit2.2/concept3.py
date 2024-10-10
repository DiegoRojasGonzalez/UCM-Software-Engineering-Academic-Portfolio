import random

# Simular 1000 tryings de una coin y un dado
tryings = 1000
success_results = 0

for _ in range(tryings):
    # Lanzar la coin (1 es cara, 0 es cruz)
    coin = random.choice(['cara', 'cruz'])
    # Lanzar el dado (número del 1 al 6)
    dado = random.randint(1, 6)
    
    # Contar cuántas veces ocurre el evento "cara y número mayor a 4"
    if coin == 'cara' and dado > 4:
        success_results += 1

# Calcular la frecuencia relativa del evento
relative_frecuence = success_results / tryings

# Mostrar los resultados
print(f"Se obtuvo 'cara y número mayor a 4' {success_results} veces en {tryings} tryings.")
print(f"La frecuencia relativa del evento es: {relative_frecuence:.4f}")
