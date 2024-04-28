# Part two

## 1
line 12 will print the value of 3 as i was declared with the var keyword

## 2 
line 13 will print the value of 150, as that was the last value inside the discountedPrice variable, again no error is 
thrown as discountedPrice was declared with the var keyword

## 3
line 14 again will print the same thing as line 13, a value of 150 as the was the last value calculated from the loop.

## 4
The function discountedPrices will return a list with all values discounted by the margin given to the function rounded to the nearest cent, in this case the list/array returned is [ 50, 100, 150 ].

## 5
On line 12 an error will be thrown as no variable i is declared within scope as, the i in the loop was declared with the keyword let

## 6
on line 13 an error will be thrown as no variable discountedPrice is declared within scope, same reasoning as above

## 7
on line 14 the program will still print the value of 150, as final price was declared within the scope and preservers the last value calculated from the loop

## 8
The function still returns the same list from question 4 answer even with the variable declaration changes, as each modification of the discounted list was done legally.

## 9
Line 11 will throw an error as the variable i is not defined within scope

## 10
Line 12 will print the value of 3 as that is the length of the prices array

## 11
The function still returns the same list from before given this input, but a slight change from the code is fact the numbers are now longer rounded to the nearest cent, therefore leading to a slight change if outputs are fractional. No errors are thrown

# Data Types

## 12
 - A `student['name']`
 - B `student['Grad Year']`
 - C `student['greeting']()`
 - D `student['Favorite Teacher]['name']`
 - E `student['courseLoad'][0]`

# Basic Operators & type Conversions
## 13
- A. '3' + 2 = 32, in this case js is concatenating the 2 onto the character 3 creating the string 32
- B. '3' - 2 = 1, js here is casting the 3 from a char into a digit and then doing the subtraction
- C. 3 + null = 3, here js is treating null as an empty zero value thus giving the result of 3
- D. '3' + null = '3null', here js is casting the null into a string and concatenating it to the end of the other string '3'
- E  true + 3 = 4, js here is implicitly casting the true into a 1 value and adding it to 3 giving the result of 4
- F false + null = 0, js here is casting the false to a zero value and also implicitly assigning a zero value to null
- G '3' + undefined = '3undefined', here js cast undefined implicitly to a string and adds it to '3' creating the entire string '3undefined'
- H '3' - undefined = NaN , js here is treating the result as not a number, seemingly because it cant cast undefined into a number.

## 14
- A. '2' > 1 = true, here js is casting '2' into a digit and returning true as 2 is greater than 1
- B. '2' < '12' = false, as the strings are checked lexographcily in js and therefore the string 2 is greater than 12
- C. 2 == '2' = true, as '2' is casted into a number and then is checked for equality against 2, which is true
- D. 2 === '2' = false, as js did a strict equality check and since 2 and '2' are different types it returned false
- E. true == 2 = false, js cast true into value of 1 and checks for equality, and since 1!=2 it returns false
- F. true === Boolean(2) = true, as Boolean of any non-zero number returns true and since true == true it returns true for the equality check

## 15
== checks casted equality where if js can make a conversion to one of the other and get equality it returns true, ie '1' == 1 is true, while === checks for strict type equality, where js strictly checks equality, ie 1 === '1' is false


# Functions
## 17
The result of calling modifyArray is [2, 4, 6]. The process of getting this is through iterating through the initial list of [1,2,3] and for each of those values we call the callback function and take its return which is double the initial value and insert into the end of the newArray inside the modifyArray function. For example for the process of 1, we call callback with 1 and take its return of 2 and insert it into the end of the newArray,[] --> [2], this repeats for all values giving you the new array of [2,4,6]

# Timeout ...
## 19
The output of the above code is ```1 4 3 2```, as 1 and 4 are printed immediately with no overhead, while even though 3 was told to print immediately it must wait an event cycle before being printed which occurs after 4. 2 is printed last after waiting a second for it to print.