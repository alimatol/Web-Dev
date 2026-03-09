import math
a = int(input())
b = int(input())

for i in range(a, b+1):
    x = math.sqrt(i)
    if x.is_integer():
        print(i)