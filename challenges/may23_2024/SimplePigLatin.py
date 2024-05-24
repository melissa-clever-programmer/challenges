# https://www.codewars.com/kata/520b9d2ad5c005041100000f

# Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

# Examples
# pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
# pigIt('Hello world !');     // elloHay orldway !

# Separate punctuation from the rest of the string but preserver their relative location
# regex re.compile(r'^[a-zA-Z]+$')
# Way to break up the over all string into single words
# concat ay to end of word

import re
def splitWords(string):
    # arr = []
    i = string.split(' ') # split already puts it into a list no need to append to one
    # arr.append(i)
    print(i)
    return i

# splitWords('Hello Big World!')

# words = splitWords('Hello Big World!')

CHECK = re.compile(r'^[!@#$$%^&*().]+$')

# for loop to go through each word to check for punctuation at end
# for i in words:
#     if i.endswith('!'):
#         i = False
#     else:
#         temp = i[0]
#         i = i.replace(i[0], "", 1)
#         # print('i after replace', i)
#         i = i+temp
#         i = i+'ay'
#     print(i)

import string

def find_punctuation_index(text):
    punctuation_indices = []
    for i, char in enumerate(text):
        if char in string.punctuation:
            punctuation_indices.append(i)
    return punctuation_indices

# Example usage
sentence = "Hello, world!"
indices = find_punctuation_index(sentence)
print("Punctuation indices:", indices)