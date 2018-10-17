function cachedFetch(url, options, expiryMin = 5) {
  const storage = localStorage;
  const key = "fetch_" + url;
  const expiryMS = expiryMin * 60 * 1000;
  const cacheRaw = storage.getItem(key);
  const cacheObj = cacheRaw ? JSON.parse(cacheRaw) : null;
  const cacheValid = cacheObj ? (Date.now() < cacheObj.createdTime + expiryMS) : false
 
  if (cacheValid) {
       
    const blob = new Blob([cacheObj.content]);
    const response = new Response(blob);
    return Promise.resolve(response);
   
  } else {

    return fetch(url, options).then(response => {
      response
        .clone().text().then(content => {
          const createdTime = Date.now()
          const value = {content, createdTime}
          const serialised = JSON.stringify(value)
          storage.setItem(key,serialised)
      })
      return response;
    });
    
  }
}