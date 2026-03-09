a = int(input())
b = int(input())

count = 0

for i in str(b):
    if a == int(i):
        count += 1

print(count)