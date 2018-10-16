 // https://simeydk.github.io/cachedFetch/cachedFetch.js

function fetchWiki(term) {
  var wUrl = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&origin=*&gsrlimit=10&prop=pageimages|extracts&explaintext&exintro&exsentences=2&exlimit=max&gsrsearch=';
  var searchUrl = wUrl + term;
  return cachedFetch(searchUrl) // get response
  .then(function (result) {return result.json();}) // convert to JSON
  .then(function (x) {return x.query.pages;}) // extract pages object
  .then(Object.values) // convert object to array
  .then(function (arr) {return arr.sort(function (a, b) {return a.index > b.index;});}); // sort based on index 
}

function cacheFn(fn) {// caching (aka memoization) via a closure
  var cache = {};
  var cachedFn = function cachedFn(x) {return cache[x] = cache[x] || fn(x);};
  return cachedFn;
}

var wiki = cacheFn(fetchWiki);

var form = document.getElementById('search-form');
var searchBox = document.getElementById('search-box');
var resultsNode = document.getElementById('results');

form.addEventListener('submit', handleChange);
searchBox.addEventListener('input', _.debounce(handleChange, 300));

function handleChange(e) {
  e.preventDefault();
  var term = searchBox.value;
  if (term) {
    wiki(term).then(function (results) {return searchBox.value === term ? renderResults(results) : '';});
  } else {
    resultsNode.innerHTML = '';
  }
}

function renderResults(results) {
  var html = results.map(renderResult).join('');
  resultsNode.innerHTML = html;
}

function renderResult(result) {
  var url = 'https://en.wikipedia.org/?curid=' + result.pageid;
  var img = result.thumbnail ? '<img class="wiki-img" src=' + result.thumbnail.source + ' />' : '';
  var html = '\n  <li class=\'wiki-result\'>\n    <a href=' +

  url + ' target="_blank" className="w-link">\n      ' +
  img + '\n      <h4 class=\'wiki-title\'>' +
  result.title + '</h4>\n      <p class = \'wiki-url\'>' +
  url + '</p>\n    </a>\n    <p class = \'wiki-extract\'>' +

  result.extract + '</p>\n  </li>';

  return html;
}