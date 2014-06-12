var winston = require('winston');
require('winston-papertrail').Papertrail;

module.exports = function (prefix, options) {
  var transports = [];
  
  if (options.console) transports.push(consoleTransport());
  if (options.hosted) transports.push(papertrailTransport());
  
  return new winston.Logger({ transports: transports });
  
  function consoleTransport () {
    return new (winston.transports.Console)();
  }
  
  function papertrailTransport () {
    return new winston.transports.Papertrail({
      host: process.env.PAPERTRAIL_HOST || options.host || 'logs.papertrailapp.com',
      port: process.env.PAPERTRAIL_PORT || options.port ||  77777,
      logFormat: function(level, message) {
        return prefix + ': [' + level + '] ' + message;
      },
      colorize: options.colorize
    })
  }
};