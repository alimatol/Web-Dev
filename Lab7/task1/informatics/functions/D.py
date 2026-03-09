x = bool(int(input()))
y = bool(int(input()))
z = bool(int(input()))

def election(x, y, z):
    return x and y and z

print(election(x, y, z))