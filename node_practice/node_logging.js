const winston = require('winston');



//logging to files 

const logger = new (winston.createLogger)(
{
    transports : [
new (winston.transports.Console)({
    level : 'info'
}),
new (winston.transports.File)({
    filename : './log/app.log',
    level : 'debug'
})

    ]
}

)
logger.debug('Hello distrubuted log files');