function validAnagram(a, b){
  // add whatever parameters you deem necessary - good luck!
  const chars = Object.fromEntries('abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => [letter, 0]))
  for (const c of a) {
    chars[c] = chars[c] + 1
  }

  for (const c of b) {
      chars[c] = chars[c] - 1
  }

  return Object.values(chars).every((count) => count === 0)
}

console.log(validAnagram('awesome', 'awesome'))


function sumZero(arr) {
  if (arr.length <= 1) return false

  let smallest = 0, largest = arr.length - 1
  while (smallest < largest) {
    const [a, b] = [arr[smallest], arr[largest]]
    if (a + b < 0) smallest++
    else if (a + b > 0) largest--
    else return true
  }

  return false
}

console.log(sumZero([-4, -3, -2 , -1, 5]))

function countUniqueValues(arr) {
  if (arr.length <= 1) return arr.length

  let count = 1
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != arr[i + 1]) count++
  }
  return count
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))
console.log(countUniqueValues([-2, -1, -1, 0, 1]))

function power(base, exponent) {
  if (exponent === 1) return base
  return base * power(base, exponent - 1)
}

console.log(power(1, 2))
console.log(power(2, 3))
console.log(power(3, 4))

function productOfArray(array) {
  if (array.length) return array.at(0) * productOfArray(array.slice(1, array.length))
  return 1
}

console.log(productOfArray([1, 2, 3]))
console.log(productOfArray([2, 3, 4, 5]))

function reverse(string) {
  if (string.length === 1) return string[0]
  return string[string.length - 1] + reverse(string.substring(0, string.length - 1))
}

console.log(reverse('bailey'))

function isPalindrome(string) {
  if (string.length <= 1) return true
  return string[0] === string[string.length - 1] && isPalindrome(string.slice(1, string.length - 1))
}

console.log(isPalindrome('bailey'))
console.log(isPalindrome('tacocat'))

function flatten(array) {
  // For each item in the array,
  // if the item is not an array keep the item in its place
  // if the item is an array, spread the items into the original array, and repeate on its sub elements

  let result = []
  for (const element of array) {
    if (Array.isArray(element)) {
      result = [...result, ...flatten(element)]
    } else {
      result.push(element)
    }
  }

  return result
}

console.log(flatten([1, 2, 3]))
console.log(flatten([]))
console.log(flatten([1, 2, [1, 2, 3], 4, [5, 6, 7]]))
console.log(flatten([1, 2, [3, [4, 5, [6, 7], 8], 9], 10, 11, [12, [13, 14]]]))