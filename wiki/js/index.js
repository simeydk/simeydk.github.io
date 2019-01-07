// https://simeydk.github.io/cachedFetch/cachedFetch.js

const f = cachedFetch || fetch

function fetchWiki(term) {
  const wUrl = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&origin=*&gsrlimit=10&prop=pageimages|extracts&explaintext&exintro&exsentences=2&exlimit=max&gsrsearch='
  const searchUrl = wUrl + term
  return f(searchUrl) // get response
    .then(result => result.json()) // convert to JSON
    .then(x => x.query.pages) // extract pages object
    .then(Object.values) // convert object to array
    .then(arr => arr.sort((a,b) => a.index > b.index)) // sort based on index 
}

function cacheFn(fn) { // caching (aka memoization) via a closure
  const cache = {}
  const cachedFn = (x) => cache[x] = cache[x] || fn(x)
  return cachedFn
}

const wiki = cacheFn(fetchWiki)

const form = document.getElementById('search-form')
const searchBox = document.getElementById('search-box')
const resultsNode = document.getElementById('results')

form.addEventListener('submit',handleChange)
searchBox.addEventListener('input', _.debounce(handleChange,300))

function handleChange(e) {
  e.preventDefault()
  const term = searchBox.value 
  if(term) {
    wiki(term).then((results) => searchBox.value === term ? renderResults(results) : '')
  } else {
    resultsNode.innerHTML = ''
  }
}

function renderResults(results) {
  const html = results.map(renderResult).join('')
  resultsNode.innerHTML = html
}

function renderResult(result) { 
  const url = 'https://en.wikipedia.org/?curid=' + result.pageid 
  const img = result.thumbnail ? `<img class="wiki-img" src=${result.thumbnail.source} />` : ''
  const html = `
  <li class='wiki-result'>
    <a href=${url} target="_blank" className="w-link">
      ${img}
      <h4 class='wiki-title'>${result.title}</h4>
      <p class = 'wiki-url'>${url}</p>
    </a>
    <p class = 'wiki-extract'>${result.extract}</p>
  </li>`
  return html
}