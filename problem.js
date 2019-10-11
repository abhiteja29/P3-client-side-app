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


QUnit.module('MAIN MODULE', {}) 

QUnit.test('TEST add', assert => {
  assert.equal(add(1, 1), 2, 'Positive integers')
  assert.equal(add(-1, -1), -2, 'Negative integers')
  assert.equal(add(-10, 10), 0, 'Mixed')
})

QUnit.config.autostart = false 

window.addEventListener('load', () => {
  const appURL = '../index.html'
  const openingTag = '<main class="container mt-5 flex-fill">'
  const closingTag = '</main>'
  fetch(appURL, { method: 'GET' })
    .then(response => {
      return response.text()
    })
    .then(txt => {
      const start = txt.indexOf(openingTag)
      const end = txt.indexOf(closingTag) + closingTag.length
      const html = txt.substring(start, end)
      const qunitFixtureBody = document.getElementById('qunit-fixture')
      qunitFixtureBody.innerHTML = html
      console.info(qunitFixtureBody)
      QUnit.start()
    })
    .catch(error => {
      console.error('error:', error);
      QUnit.start()
    })
})

QUnit.test("TEST first number validation", assert => {
  const input = document.querySelector('#firstNumber')
  const warning = document.querySelector('#firstWarning')
  input.value = -3;
  assert.equal(input.value, -3, "Bad value assigned")
  assert.strictEqual(input.checkValidity(), false, "Correctly fails validation")
  input.focus()
  input.blur()
  assert.strictEqual(warning.innerHTML, 'Invalid input', `Correctly adds warning ${warning}`)
})


function aj() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("aj").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "ajax.txt", true);
  xhttp.send();


