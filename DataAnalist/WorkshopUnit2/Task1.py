import random
import collections

try_drops = [random.randint(1, 6) for _ in range(1000)]
frequency = collections.Counter(try_drops)

#probabilidad que aparezca+ cada numero entre 1 y 6
for num in range(1, 7):
    print(f"Número {num}: {frequency[num]} veces")

print("\nProbabilidad de cada número:")

#Probabilidad empirica
for num in range(1, 7):
    probability_empiric = frequency[num] / 1000
    print(f"Probabilidad del número {num}: {probability_empiric:.3f}")

    # Es decir la suma de estas probabilidades daria la probabilidad complementaria (equivalente entre otras)

    