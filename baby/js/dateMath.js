const oneDay = 1000 * 60 * 60 * 24

function startOfDay(...args) {
    const d = new Date(...args)
    return new Date(
      d.getFullYear(), 
      d.getMonth(),
      d.getDate(),
    )
  }
  
  function dateDiffWeeksAndDays(a,b = new Date()) {
    const diffMs = Math.abs(startOfDay(a)-startOfDay(b))
    const diffDays = Math.floor(diffMs/oneDay)
    const weeks = Math.floor(diffDays/7)
    const days = diffDays - weeks * 7
    return {weeks,days,diffDays}
  }


function monthsSince2010(date) {
    return  (date.getFullYear() - 2010) * 12 + date.getMonth()
}

function dateDiffFullMonths(start,end) {
    if (start > end) {return dateDiffFullMonths(end,start)}

    const mStart = monthsSince2010(start)
    const mEnd = monthsSince2010(end)
    const mDiff = mEnd - mStart
    
    const dStart = start.getDate()
    const dEnd = end.getDate()

    mDiffFinal = mDiff - ((dEnd - dStart < 0) ? 1 : 0)
    
    return mDiffFinal

}

function dateDiffMonthsAndDays(start,end) {
    
    if (start > end) {return dateDiffMonthsAndDays(end,start)}

    const months = dateDiffFullMonths(start,end)
    const startPlusMonths = startOfDay(addMonths(start,months))
    const days = Math.floor((end - startPlusMonths) / oneDay)

    return {months,days, startPlusMonths}

}

function addMonths(date,m) {
    return new Date(
        date.getFullYear(), 
        date.getMonth() + m,
        date.getDate()
        )
}

function dateAdd(date,years=0,months=0,days=0,hours=0,minutes=0,seconds=0,milliseconds=0) {
    
    return new Date(
        date.getFullYear() + years, 
        date.getMonth() + months,
        date.getDate() + days,
        d.getHours() + hours,
        d.getMinutes() + minutes,
        d.getSeconds() + seconds,
        d.getMilliseconds() + milliseconds
    )

}
