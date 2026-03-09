x = int(input())
arr = list(map(int, input().split()))
count = 0
for i in range(x):
    if arr[i] > 0:
        count+=1

print(count)