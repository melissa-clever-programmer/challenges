# Oh no!
# Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!
# You need to cast the whole array to the correct type.
# Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
# ie:["1", "2", "3"] to [1, 2, 3]
# Note that you can receive floats as well.

# get string as input return integer
# use built in to change str to int
# see if index is or can be a int

x = '1'
print('x before change', x, type(x))
x = int(x)
print('x after change', x, type(x))
arr = ["1", "2", "3"]
arr01 = ['1.1', '2','4.5']

def change(arr):
    newArr = []
    for i in arr:
        a = float(i)
        newArr.append(a)
        print(a, type(a))
    print(newArr)

change(arr)
change(arr01)