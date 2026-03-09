N = int(input())
x = N

while x > 1:
    if x % 2 != 0:
        print("NO")
        break
    x = x // 2
else:
    print("YES")