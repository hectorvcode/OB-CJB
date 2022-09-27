const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

//logger.log("Hola estoy saliendo por pantalla");
logger.info("Mensaje informativo");
logger.debug("Mensaje de debug");
logger.warn("Advertencia");
logger.error("Este es un error");



/* console.log("Hola estoy saliendo por pantalla");
console.info("Mensaje informativo");
console.debug("Mensaje de debug");
console.warn("Advertencia");
console.error("Este es un error"); */