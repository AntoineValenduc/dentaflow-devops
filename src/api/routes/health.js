/**
* @swagger
* /health:
* get:
* summary: Vérifie l'état de l'API
* description: Retourne le statut de santé de l'application
* tags: [Santé]
* responses:
* 200:
* description: API opérationnelle
* content:
* application/json:
* schema:
* type: object
* properties:
* status:
* type: string
* example: "healthy"
* timestamp:
* type: string
* format: date-time
*/
const express = require('express');
const router = express.Router();
router.get('/health', (req, res) => {
 res.json({
 status: 'healthy',
 timestamp: new Date().toISOString(),
 service: 'DentaFlow API'
 });
});
module.exports = router;
