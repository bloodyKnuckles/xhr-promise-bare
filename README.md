# xhr-promise-bare

Copied (and abbreviated) from here:
http://www.html5rocks.com/en/tutorials/es6/promises/#toc-promisifying-xmlhttprequest

Bare bones Promise-based XHR.

## example

```js
var xhrPromise = require('xhr-promise-bare')

xhrPromise('https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1')
  .then(
    function(result) {
      document.querySelector('#app').innerHTML = JSON.parse(result)[0]
    }, function(err) {
      console.log(err)
    })
```

## install

`npm install --save xhr-promise-bare`

## license

MIT
