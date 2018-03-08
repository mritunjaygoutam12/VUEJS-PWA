
## Use of js-owncloud-client library

<p align="center">
  <img src="https://i.imgur.com/9mKra3O.png" />
</p>

  use of js-owncloud-client library in in this vuejs SSR template step by step.
   
   
   ## 1.  Install

```
$ npm install js-owncloud-client
```

## 2. Usage

```js
//import js-owncloud-client
var owncloud = require('js-owncloud-client');
//owncloud instance url='localhost'
var oc = new owncloud('*owncloud instance URL*');

// Login
oc.login('username', 'password').then(status => {
    // STUFF
}).catch(error => {
    // HANDLE ERROR
});


// List all files
oc.files.list('/path/to/file/folder').then(files => {
    console.log(files);
}).catch(error => {
    console.log(error);
});
```
you can find these and more function of js-owncloud-client which I used in my application under * [serve.js](https://github.com/mritunjaygoutam12/VUEJS-PWA/blob/9ddde57163d6b12bb69388d6e01cfa43fb78f615/server.js#L150)
