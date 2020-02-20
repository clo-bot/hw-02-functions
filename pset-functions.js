/***********
Problem: Blackjack

Create a function named `blackJack()` that accepts two parameters:
playerCardScore (number)
dealerCardScore (number)

Return whichever value is nearest (or equal) to 21 without going over. Return 0 if both scores go over 21.

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. blackJack(19, 21)

   Result: 21

2. blackJack(22, 22)

   Result: 0

3. blackJack(19, 22)

   Result: 19

3. blackJack(21, 21)

   Result: 21

************/
console.log('Problem 1:')

// Add your code below this line

function scores(playerCardScore, dealerCardScore){
   if (playerCardScore > 21 && dealerCardScore > 21){
    return "0"
  } else if (playerCardScore <= 21 || dealerCardScore > 21){
    return(playerCardScore)
  } else if (playerCardScore >  21 || dealerCardScore <= 21){
    return(dealerCardScore)
  } else if (playerCardScore <= 21 && dealerCardScore <= 21){
    return Math.max(playerCardScore, dealerCardScore)
  } else {
    return(playerCardScore)
  }
}
const gameResult = scores(8, 21)
console.log(gameResult)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Scrabble Scorer

Create a function named `scrabbleScore()` that accepts a parameter called "word". The function should use the following table to calculate the Scrabble score of a provided word:

```
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. scrabbleScore("cabbage")
   Note: c = 3, a = 1 (twice), b = 3 (twice), g = 2, e = 1

   Expected Result: 14

2. scrabbleScore("javascript")

   Expected Result: 24

3. scrabbleScore("function")

   Expected Result: 13

************/
console.log('Problem 2:')

// Add your code below this line
// const score  = {
//     e:1, a:1, i:1, o:1, u:1, l:1, n:1, r:1, s:1, t:1,
//     d:2, g:2,
//     b:3, c:3, m:3, p:3,
//     f:4, h:4, v:4, w:4, y:4,
//     k:5,
//     j:8, x:8,
//     q:10, z:10
// }
//
// function scrabbleScore(word) {
//   let total = 0
//   for (i = 0; i <= word.length; i++) {
//     total = total + score[word[i]].values
//   }
//   return total
// }
//
// console.log(scrabbleScore("cabbage"))

const scrabbleWords  = {
e: 1,
a: 1,
i: 1,
o: 1,
u: 1,
l: 1,
n: 1,
r: 1,
s: 1,
t: 1,
d: 2,
g: 2,
b: 3,
c: 3,
m: 3,
p: 3,
f: 4,
h: 4,
v: 4,
w: 4,
y: 4,
k: 5,
j: 8,
x: 8,
q: 10,
z: 10
}
function scrabbleScore(word) {
let score = 0;
for (let i = 0; i < word.length; i++) {
    score = score + scrabbleWords[word[i]]
  }
return score
}
console.log(scrabbleScore("cabbage"))
console.log(scrabbleScore("javascript"))
console.log(scrabbleScore("function"))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Palindromes

Palindromes are words which read the same forward as backwards. For example, "madam" and "noon" are both palindromes.

Create a function named `isPalindrome()` that accepts a parameter called "word". The function will return true if the word is a palindrome and false if it is not.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. isPalindrome("noon")

   Expected Result: true

2. isPalindrome("racecar")

   Expected Result: true

3. isPalindrome("moon")

   Expected Result: false

4. isPalindrome("run")

   Expected Result: false

************/
console.log('Problem 3:')

// Add your code below this line
function isPalindrome(word){
  return word === word.split("").reverse().join("")
}
console.log(isPalindrome("noon"))
console.log(isPalindrome("racecar"))
console.log(isPalindrome("moon"))
console.log(isPalindrome("run"))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Double Letter Checker

Create a function that takes a "word" as a parameter and returns true if the word has two consecutive identical letters.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. doubleLetters("loop")

   Expected Result: true

2. doubleLetters("rune")

   Expected Result: false

3. doubleLetters("apple")

   Expected Result: true

************/
console.log('Problem 4:')

// Add your code below this line
function doubleLetters(word){
  for(i = 0; i <= word.length; i++) {
        for(var j = i+1; j <= word.length; j++) {
            if(word[j] == word[i]) {
                return true;
            }
        }
    }
    return false;
}
console.log(doubleLetters("loop"))
console.log(doubleLetters("rune"))
console.log(doubleLetters("rune"))
console.log(doubleLetters("apple"))
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Word Counter

Create a function named `wordCount()` that accepts a parameter called "phrase" which counts the number of occurrences of each word in that phrase

For example, the phrase: "olly olly in come free" should result in output that looks similar to the following:

```
olly: 1
in: 1
come: 1
free: 1
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. wordCount("olly olly in come free")

   Result:

   olly: 2
   in: 1
   come: 1
   free: 1

2. wordCount("Baby shark, doo doo doo doo doo doo")

   Result:

   baby: 1
   shark: 1
   doo: 6

3. wordCount("Humpty Dumpty sat on a wall Humpty Dumpty had a great fall")

   Result:

   humpty: 2
   dumpty: 2
   sat: 1
   a: 2
   on: 1
   fall: 1
   great: 1
   had: 1
   wall: 1
************/
console.log('Problem 5 - bonus:')

// Add your code below this line

function wordCount(phrase) {
  const words = phrase.split(' ')
  const wordCount = {}

words.forEach((word) => {
  if (wordCount[word] === undefined) {
      wordCount[word] = 1
    } else {
      wordCount[word] = wordCount[word] + 1
    }
  })

  return wordCount
}

console.log(wordCount("olly olly in come free"))
console.log(wordCount("Baby shark, doo doo doo doo doo doo"))
console.log(wordCount("Humpty Dumpty sat on a wall Humpty Dumpty had a great fall"))


// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')



// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
