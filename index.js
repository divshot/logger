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
    var host = process.env.PAPERTRAIL_HOST || options.host;
    var port = process.env.PAPERTRAIL_PORT || options.port;
    
    if (!host) throw new Error('Must provide the HOST for a hosted logger');
    if (!port) throw new Error('Must provide the PORT for a hosted logger');
    
    return new winston.transports.Papertrail({
      host: host,
      port: port,
      logFormat: function(level, message) {
        return prefix + ': [' + level + '] ' + message;
      },
      colorize: options.colorize
    })
  }
};