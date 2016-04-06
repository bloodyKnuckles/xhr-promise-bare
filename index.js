module.exports = function (url) {
  return new Promise(function (resolve, reject) {
    var req = new XMLHttpRequest()
    req.open('GET', url)

    req.onload = function () {
      if ( 200 === req.status ) { resolve(req.response) }
      else { reject(Error(req.statusText)) }
    }

    req.onerror = function () {
      reject(Error('network error'))
    }
    req.send()
  })
}

