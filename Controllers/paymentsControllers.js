class PaymentController {
    constructor(subscriptionService) {
      this.subscriptionService = subscriptionService;
    }
  
    async getPaymentLink(req, res) {
      try {
        const payment = await this.subscriptionService.createPayment();
        const linkPay = payment.init_point;
        return res.json(linkPay);

      } catch (error) {
        console.log(error);
  
        return res
          .status(500)
          .json({ error: true, msg: "Failed to create payment" });
      }
    }
  }
  
  module.exports = PaymentController;