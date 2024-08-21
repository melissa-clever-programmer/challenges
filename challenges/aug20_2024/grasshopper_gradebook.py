# https://www.codewars.com/kata/55cbd4ba903825f7970000f5

# Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

# Numerical Score	Letter Grade
# 90 <= score <= 100  'A'
# 80 <= score < 90	  'B'
# 70 <= score < 80	  'C'
# 60 <= score < 70	  'D'
# 0 <= score < 60	  'F'
# Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

scale = {'A': [90,101], 'B': [80,90], 'C': [70, 80], 'D': [60,70], 'F': [0,60]}
def get_grade(s1, s2, s3):
    avg = round((s1+s2+s3)/3)
    # avg = (s1+s2+s3)/3
    for grade, bounds in scale.items():
        print(grade, bounds)
        if avg >= bounds[0] and avg < bounds[1]:
            print(grade)


# def get_grade(s1, s2, s3):
#     print({6:'D', 7:'C', 8:'B', 9:'A', 10:'A'}.get((s1 + s2 + s3) / 30, 'F'))

# def get_grade(*s):
#     print('FFFFFFDCBAA'[sum(s)//30])

get_grade(91,91,91)
get_grade(85,86,87)
get_grade(18,69,92)


# the // means dividing whole integers (or integer division)
# *arg name means any number of parameters collected into a tuple with the name of arg
# using round failed the codewars challenge due to rounding that resulted in an different avg grade
# line 17 is a python version of a for loop of both keys and values