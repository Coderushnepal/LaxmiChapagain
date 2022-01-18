# Ability Test

## Question 1

Consider the following problem:

```
Write a short program that prints each number from 1 to 100 on a new line. 

For each multiple of 3, print "Fizz" instead of the number. 

For each multiple of 5, print "Buzz" instead of the number. 

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
```

## Question 2

Find the Smallest and Biggest Numbers
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

```
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]
```


# String Manipulation
## Question 1
### Return Something to Me!
Write a function that returns the string `"something"` joined with a space `" "` and the given argument `a`.
Examples:
```
giveMeSomething("is better than nothing") ➞ "something is better than nothing"

giveMeSomething("Bob Jane") ➞ "something Bob Jane"

giveMeSomething("something") ➞ "something something"
```

## Question 2
### Word without First Character
Create a function that takes a word and returns the new word without including the first character.

Examples
```
newWord("apple") ➞ "pple"

newWord("cherry") ➞ "herry"

newWord("plum") ➞ "lum"
```


# Array
## Question 1
### Return Types
Create a function that takes an array and returns the types of values (data types) in a new array.
```
arrayValuesTypes([1, 2, "null", []])
➞ ["number", "number", "string", "object"]

arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
➞ ["number", "string", "string", "object", "object", "boolean", "number"]
```

## Question 2
### Filter out Strings from an Array
Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

```
filterArray([1, 2, "a", "b"]) ➞ [1, 2]

filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]

filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
```

# Basics of JavaScript

## Question 1

Write a function to render the following pattern in the console:
<br/>
`* * * * *`<br/>
`* * * *`<br/>
`* * *`<br/>
`* *`<br/>
`*`<br/>

The function needs to take a number as a parameter which represents how many asterisks are rendered on the first row.

## Question 2

Censor Words Longer Than Four Characters<br/>
Create a function that takes a string and censors words over four characters with `*`.
<br/>
<br/>
<b>Examples</b>
<br/>
censor("The code is fourty") ➞ "The code is ******"<br/>
censor("Two plus three is five") ➞ "Two plus ***** is five"<br/>
censor("aaaa aaaaa 1234 12345") ➞ "aaaa ***** 1234 *****"<br/>
<br/>
<b>Note</b>
* Don't censor words with exactly four characters.
* If all words have four characters or less, return the original string.
* The amount of `*` is the same as the length of the word.

## Question 3

Converting Objects to Arrays<br/>
Write a function that converts an object into an array, where each element represents a key-value pair.
<br/>
<br/>
<b>Examples</b>
<br/>

toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
<br/>
toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]<br/>
toArray({}) ➞ []<br/>

<br/>
<b>Note</b>
* Return an empty array if the object is empty.

## Question 4

Filter Repeating Character Strings<br/>
Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).
<br/>
<br/>
<b>Examples</b>
<br/>

identicalFilter(["88", "999", "22", "545", "133"]) 
➞ ["88", "999", "22"]<br/>
identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]) 
➞ []<br/>

<br/>
<b>Note</b>
* A string with a single character is trivially counted as a string with repeating identical characters.
* If there are no strings with repeating identical characters, return an empty array (see example #3).

## Question 5

Return the Objects Keys and Values<br/>
Create a function that takes an object and returns the keys and values as separate arrays.
<br/>
<br/>
<b>Examples</b>
<br/>

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
<br/>
keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]<br/>
keysAndValues({ key1: true, key2: false, key3: undefined })
➞ [["key1", "key2", "key3"], [true, false, undefined]]
<br/>

<br/>
<b>Notes</b>
* Remember to sort the keys.
