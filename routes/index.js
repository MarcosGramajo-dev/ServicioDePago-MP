const express = require('express');
const router = express.Router();

const paymentControllers = require('../Controllers/paymentsControllers');
const servicesPayment = require('../Services/servicesPayment');
const paymentInstance = new paymentControllers(new servicesPayment());

/* GET home page. */

// router.get('/', function(req, res, next) {
//   res.json({
//     "/payment": "generates a payment link"
//   });
// });

router.get('/payment', function(req, res, next) {
  paymentInstance.getPaymentLink(req, res);
});

module.exports = router;
