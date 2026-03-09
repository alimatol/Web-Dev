x = int(input())
arr = list(map(int, input().split()))

for i in range(x-1):
    if arr[i] < 0 and arr[i+1] <0:
        print("YES")
    elif arr[i] > 0 and arr[i+1] > 0:
        print("YES")
    else:
        print("NO")