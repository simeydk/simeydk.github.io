// const dateMath = require ('./dateMath')

const rootNode = document.getElementById('root')
const body = document.body


body.innerHTML = renderHTML() //`<pre>${JSON.stringify({toNow,toEnd},null,'\t')}</pre>`


function renderHTML() {

  const start = new Date(2018,7,6)
  const end = new Date(2019,4,13)
  const now = new Date()
  const today = startOfDay()

  const toNow = dateDiffWeeksAndDays(start,today)
  const toEnd = dateDiffWeeksAndDays(end)

  const toNowMonths = dateDiffMonthsAndDays(start,today)
  const toEndMonths = dateDiffMonthsAndDays(today,end)
  
  document.title = `${toNow.weeks}w${toNow.days}d (${toEnd.diffDays}d left)`

  return `
  <main id="page">
    <p class="days_left">${now.toUTCString().slice(0,16)}</p>
    <div class="weeks_and_days">
      <p class="element">
        <span class="atom num week_num">${toNow.weeks}</span>
        <span class="atom symbol week_symbol">w</span>
      </p>
      <p class="element">
        <span class="atom num day_num">${toNow.days}</span>
        <span class="atom symbol day_symbol">d</span>
      </p>
    </div>
    <p class="days_left">(${toNowMonths.months} months and ${toNowMonths.days} days)</p>
    <img id="dummy" class="dummy" src="pacifier.svg"></img>
    <p class="days_left"> 
      <span class="days">${toEnd.diffDays}</span> days until 13 May 2019 
      <br/>
      (${toEndMonths.months} months and ${toEndMonths.days} days)
    </p>
  </main>`
}

setInterval(() => toggleClassForId('dummy','active'),1000)


function toggleClassForId(id,className) {
  document.getElementById(id).classList.toggle(className)
}

