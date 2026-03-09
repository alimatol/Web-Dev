n = int(input())
students = []

for _ in range(n):
    name = input()
    score = float(input())
    students.append([name, score])

scores = [score for name, score in students]
unique_scores = sorted(set(scores))
second_lowest = unique_scores[1]

names = [name for name, score in students if score == second_lowest]
names.sort()

for name in names:
    print(name)