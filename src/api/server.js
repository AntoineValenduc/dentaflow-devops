const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const winston = require('winston');
const healthRoutes = require('./routes/health');
// Configuration des logs
const logger = winston.createLogger({
level: 'info',
format: winston.format.json(),
defaultMeta: { service: 'dentaflow-api' },
transports: [
new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
new winston.transports.File({ filename: 'logs/combined.log' })
]
});
if (process.env.NODE_ENV !== 'production') {
logger.add(new winston.transports.Console({
format: winston.format.simple()
 }));
}
// Configuration Swagger
const swaggerDefinition = require('../../docs/swagger-definition');
const swaggerSpec = swaggerJSDoc(swaggerDefinition);
// Application Express
const app = express();
const PORT = process.env.PORT || 3000;
// Middlewares
app.use(express.json());
// Routes
app.use('/api/v1', healthRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Route racine
app.get('/', (req, res) => {
logger.info('Accès à la racine');
 res.redirect('/api-docs');
});
// Démarrage
app.listen(PORT, () => {
 logger.info(`Serveur DentaFlow démarré sur http://localhost:${PORT}`);
 logger.info(`Documentation API : http://localhost:${PORT}/api-docs`);
});
module.exports = app;
