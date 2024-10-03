import random

balls = ['roja'] * 5 + ['azul'] * 3
success = 0
num_experiments = 10000

for _ in range(num_experiments):
    selection = random.sample(balls, 2)
    if selection[0] == 'roja' and selection[1] == 'azul':
        success += 1

probability = success / num_experiments
print(f"Probabilidad de sacar primero una bola roja y luego una azul: {probability:.4f}")
