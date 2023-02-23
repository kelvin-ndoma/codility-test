

  function compareNumbers(a, b) {
    return [`${a} is smaller than ${b}`, 
    `${a} is equal to ${b}`, 
    `${a} is bigger than ${b}`]
    [(a - b) % 3 + 1];
  }
  
  console.log(compareNumbers(5,4))
  console.log(compareNumbers(2,2))
  console.log(compareNumbers(2,3))

  