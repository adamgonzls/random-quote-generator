const dataUrl = './data.json'
const localUrl = 'http://localhost:8080/quotes'
const apiUrl = 'https://random-quote-generator-api.adamgonzls.repl.co/quotes'
const unsplashUrl = 'https://api.unsplash.com/photos/random?client_id=sXfk2WvL_82aABCDBbfFbeXJ44XqAG7tpyZ0FWdNbGY&query=nature'

async function fetchQuotes() {
  const response = await fetch(dataUrl)
  const json = await response.json()
  const quoteArray = json.data.quotes
  const pageContainer = document.getElementById('pageContainer')
  const quoteDisplay = document.getElementById('quote-display')
  const quoteAuthor = document.getElementById('quote-author')
  const newQuoteButton = document.getElementById('newQuoteButton')
  const newImageButton = document.getElementById('newImageButton')
  let countdownSeconds = 20

  showQuote()

  function showQuote() {
    const randomQuoteObject =
      quoteArray[Math.floor(Math.random() * quoteArray.length)]
    quoteDisplay.innerHTML = `<p>${randomQuoteObject.quote}</p>`
    quoteAuthor.innerHTML = `<span>- ${randomQuoteObject.author}</span>`
    resetTimer()
  }

  newQuoteButton.addEventListener('click', showQuote)

  function resetTimer() {
    countdownSeconds = 20
  }

  setInterval(timer, 1000)

  function timer() {
    --countdownSeconds
    if (!countdownSeconds) {
      showQuote()
      resetTimer()
    }
  }

  newImageButton.addEventListener('click', getNewImage)

  async function getNewImage() {
    const response = await fetch(unsplashUrl)
    const json = await response.json()
    const imageJson = json.urls.regular
    pageContainer.style.backgroundImage = `url('${imageJson}')`
  }
  getNewImage()
}

fetchQuotes()
