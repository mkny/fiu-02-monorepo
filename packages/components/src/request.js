const request = (url) => fetch(url).then(response => response.text())

export { request }