const form = document.querySelector('#quiz-form')
const answers = document.querySelectorAll('.answer')

document.addEventListener('submit', e => {
  e.preventDefault()

  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      const parent = answers[i].closest('.question-item')
      if (answers[i].value == 'true') {
        parent.classList.add('correct')
        parent.classList.remove('incorrect')
      } else {
        parent.classList.add('incorrect')
        parent.classList.remove('correct')
      }
    }
  }
})
