const displayElement = document.querySelector('.calc__screen span')
const buttonsElement = document.querySelector('.calc__buttons')

const arrCalc = []
let acc = ''
let num = ''
let count = ''
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const calc = ['+', '-', '/', 'x']

function getKey(event) {
  if (numbers.includes(event.target.textContent)) {
    if (acc == '') {
      num += event.target.innerText
      displayElement.innerText = num
      console.log(num)
    }
    if (acc !== '') {
      if (num == acc) {
        num = ''
      }
      num += event.target.innerText
      displayElement.innerText = num
    }
  }
  if (calc.includes(event.target.textContent)) {
    if (acc == '' && num == '') return
    acc = num
    count = event.target.textContent
    console.log(acc)
    console.log(count)
  }
  if (event.target.textContent == '=') {
    if (count == '-') {
      acc -= num
      displayElement.textContent = acc
    }
    if (count == '+') {
      acc = +acc
      num = +num
      acc += num
      displayElement.textContent = acc
    }
    if (count == '/') {
      acc /= num
      displayElement.textContent = acc
    }
    if (count == 'x') {
      acc *= num
      displayElement.textContent = acc
    }
  }
  if (event.target.textContent == 'ac') {
    displayElement.textContent = ''
    num = ''
    acc = ''
    count = ''
  }
  if (event.target.textContent == '+/-' && num !== '') {
    if (displayElement.textContent == num) {
      num = '-' + num
      displayElement.textContent = num
    }
  }
}

buttonsElement.addEventListener('click', getKey)
