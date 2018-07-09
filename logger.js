var log4js = require('log4js');
log4js.configure({
appenders: [
   { type: 'console' },
   { type: 'file', filename: "c://test.log", category: 'my_project' }
  ]
});
var logger  = log4js.getLogger('my_project');
            logger.setLevel('DEBUG');
            Object.defineProperty(exports, "LOG", {
                        value:logger,
            });