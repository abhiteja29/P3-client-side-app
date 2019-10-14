const speed = (x, y) => { return x / y }

const validate = async (event) => {
  console.log(`triggered validate on ${event.target.id}`)
  const isValid = event.target.checkValidity();
  if (isValid) {
    event.target.nextElementSibling.innerHTML = ''
  }
  else {
    event.target.nextElementSibling.innerHTML = 'Invalid input'
    event.target.focus()
  }
}

const updateWithAdd = async (event) => {
  document.querySelector('#result').innerHTML = '';
  if (document.querySelector('#firstNumber').checkValidity() && document.querySelector('#secondNumber').checkValidity()) {
    
    const i = parseInt(document.querySelector('#firstNumber').value)
    const j = parseInt(document.querySelector('#secondNumber').value)
    const ans = ` Speed is ${speed(i, j)}.`
    document.querySelector('#result').innerHTML = ans
  }
}

document.addEventListener('focusout', event => {
  if (event.target && event.target.id === 'firstNumber' ||
    event.target && event.target.id === 'secondNumber') {
    validate(event)
  }
});

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'addButton') { updateWithAdd(event) }
});

    console.log('Declare testable functions......................')

    function add(x, y) { return x / y }
    console.log('Defined add=' + add)

    console.log('Declare event listeners .......................')

    window.addEventListener('load', (event) => {
      console.log('  Starting initialization ')
      if (localStorage.getItem('number1')) {
        document.querySelector('#firstNumber').value = parseInt(localStorage.number1)
        console.log(`  Stored num1 = ${localStorage.number1}`)
      }
      if (localStorage.getItem('number2')) {
        document.querySelector('#secondNumber').value = parseInt(localStorage.number2)
        console.log(`  Stored num2 = ${localStorage.number2}`)
      }
      console.log('  Finished initialization')
    })

    document.querySelector('#addButton').addEventListener('click', () => {
      console.log('  Starting clicker click handler')
      const origCount = parseInt(localStorage.getItem('countOfClicks')) || 0
     
      const i = parseInt(document.querySelector('#firstNumber').value)
      console.log('i=' + i)
      const j = parseInt(document.querySelector('#secondNumber').value)
      console.log('j=' + j)
      const ct = origCount + 1
      const ans = `your sum is ${add(i,j)}. This has been run  ${ct}  times.`
      document.querySelector('#result').innerHTML = ans

      localStorage.setItem('countOfClicks', ct)
      localStorage.setItem('number1', i)
      localStorage.setItem('number2', j)
      console.log('  Finished clicker click handler')
    })

document.querySelector('#storage').addEventListener('click', () => {
  console.log('  Starting wiper click handler')
  localStorage.removeItem('countOfClicks')
  localStorage.removeItem('number1')
  localStorage.removeItem('number2')
  console.log('  Finished wiper click handler - localStorage entries removed')
})

const updateWithJoke = async (event) => {
  document.querySelector('#jokeresult').innerHTML = ''
  const url = 'https://api.icndb.com/jokes/random?limitTo=[nerdy]'
  const response = await fetch(url)
  const obj = await response.json()
  const joke = obj.value.joke || 'No joke for you.'
  document.querySelector('#jokeresult').innerHTML = joke
}
document.addEventListener('click', event => {
  if (event.target && event.target.id === 'joke') { updateWithJoke(event) }
})


