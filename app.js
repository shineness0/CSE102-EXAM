// SECTION A
// 2,  Explain what arrays are. List and explain 5 array methods

// Arrays are data structures in programming that allow you to store multiple values of the same type in a contiguous block of memory. Each value in an array is called an element, and it can be accessed using an index.

// 1 push(): This method adds one or more elements to the end of an array and returns the new length of the array.

// 2 pop(): This method removes the last element from an array and returns that element. The length of the array is also decreased by one

// 3 concat(): This method is used to merge two or more arrays and return a new array. It does not modify the existing arrays.

// 4 splice(): This method changes the content of an array by adding, removing, or replacing elements. It modifies the original array and returns an array containing the removed elements.

// 5 slice(): This method returns a shallow copy of a portion of an array into a new array, without modifying the original array. The selected portion is specified by the start and end indices

// SECTION B
// 1)

const disPlayNumFromOneToHundred = () => {
  for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log(`${num} PDC NID`)
    } else if (num % 3 === 0) {
      console.log(`${num} PDC`)
    } else if (num % 5 === 0) {
      console.log(`${num} NID`)
    } else if (num % 3 !== 0 && num % 5 !== 0) {
      console.log(`${num} PDC nor NID`)
    } else {
      console.log(num)
    }
  }
}

// disPlayNumFromOneToHundred()

// 6)
const disPlayGrade = (grade) => {
  if (grade <= 59) {
    console.log('F')
  } else if (grade > 59 && grade < 62) {
    console.log('D-')
  } else if (grade > 62 && grade < 67) {
    console.log('D')
  } else if (grade > 66 && grade < 70) {
    console.log('D+')
  } else if (grade > 69 && grade < 73) {
    console.log('C-')
  } else if (grade > 72 && grade < 77) {
    console.log('C')
  } else if (grade > 76 && grade < 80) {
    console.log('C+')
  } else if (grade > 79 && grade < 83) {
    console.log('B-')
  } else if (grade > 82 && grade < 87) {
    console.log('B')
  } else if (grade > 86 && grade < 90) {
    console.log('B+')
  } else if (grade > 89 && grade < 93) {
    console.log('A-')
  } else if (grade > 92 && grade < 97) {
    console.log('A')
  } else if (grade > 96 && grade < 101) {
    console.log('A+')
  } else {
    console.log('Invalid score')
  }
}

// disPlayGrade()

// 7

const findMinMaxSumAverage = (arr) => {
  function detectAlphabet(arr) {
    for (let item of arr) {
      if (typeof item === 'string' && item.match(/^[A-Za-z]+$/)) {
        return true
      }
    }
  }
  if (arr.length === 0) {
    console.log('null')
  } else if (detectAlphabet(arr) === true) {
    console.log('array must not include an alphabet')
  } else {
    let min = arr[0]
    let max = arr[0]
    let sum = arr[0]

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i]
      }

      if (arr[i] > max) {
        max = arr[i]
      }

      sum += arr[i]
    }

    const average = (sum / arr.length).toFixed(3)

    console.log('Minimum number:', min)
    console.log('Maximum number:', max)
    console.log('Sum:', sum)
    console.log('Average:', average)
  }
}

// const result = findMinMaxSumAverage([2, 1, 7, 3, 2, 9, 5])
