# divshot-logger

Logging for all things Divshot

## Install

```
npm install divshot-logger --save
```

## Usage

```js
var logger = require('divshot-logger')('App Name', {
  /* OPTIONS */
  
  console: true,
  remote: true,
  colorize: true
  
});
```

### Options

* `console` - write to the current environment's stdout (i.e. console.log). Good for local dev.
* `remote` - write the the configured remote logging platform. Requires `host` and `port` options to be configured in setup or PAPERTRAIL_HOST and PAPERTRAIL_PORT to be configured in the environment.
* `host` - host of the remote Papertrail account
* `port` - port of the remote Papertrail account
* `colorize` - colored logs
