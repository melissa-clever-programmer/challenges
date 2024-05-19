def month(m):
    if m <= 3:
        return 1
    elif 3 < m <= 6:
        return 2
    elif 6 < m <=9:
        return 3
    else:
        return 4
    

# print(month(4))
# print(month(9))

def getMonth(m):
    return (m + 2) // 3

# print(getMonth(4))
# print(getMonth(9))

# return true until see flick then opposite

# need a loop
# var boolean
# new empty list
# check index value on flick and swap boolean

def swap(arr):
    b = True
    newArr = []
    for x in arr:
        if x == 'flick':
            b = not b
        newArr.append(b)
    return newArr


print(swap(['flick', 'chocolate', 'adventure', 'sunshine']))
print(swap(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']))

