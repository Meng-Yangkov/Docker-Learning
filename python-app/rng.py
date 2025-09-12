from random import randint

min_number = int(input('Please enter minimum number: '))
max_number = int(input('Please enter maximum number: '))

if (max_number < min_number):
  print('Invalid input - shutting down')
else:
  randomNumber = randint(min_number, max_number)
  print(randomNumber)
