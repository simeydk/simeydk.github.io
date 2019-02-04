const qURL = 'https://manyquotes.now.sh/random'

var rootNode

window.onload = () => {
    rootNode = document.getElementById('rootNode')
    getLocalQuote() // get a first quote
}

async function getQuote() {
    quoteObj = await(fetch(qURL).then(r => r.json())) // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    const html = quoteObjToHtmlString(quoteObj)
    rootNode.innerHTML = html
}

function getLocalQuote() {
    quoteObj = localQuote()
    const html = quoteObjToHtmlString(quoteObj)
    rootNode.innerHTML = html
}

function quoteObjToHtmlString({author, quote}) {
    const twUrl = quoteObjToTweetUrl({author, quote})
    return (`
        <div class='quote-box'>
            <p class='quote-text'>${quote}</p>
            <p class='quote-author'> - ${author}</p>
            <button class="quote-button" id="button-new" onclick="getQuote()">new quote</button>
            <a href='${twUrl}' target="_blank"><button class="quote-button" id="button-tweet">tweet</button></a>
        </div>
        `)
}

function quoteObjToTweetUrl({author, quote}) {
    const txt = (`${quote} - ${author}`)
    const url = encodeURI('//twitter.com/home?status=' + txt)
    return url
}