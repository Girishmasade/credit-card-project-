import React from "react";

const CreditCardInfo = () => {
  return (
    <section>

<div className="border-b-8 border-black">
      
      <div className="grid lg:grid-cols-2 border-t-4 border-black">
        <div className="bg-yellow-500 p-12 lg:p-20 lg:border-r-4 border-black max-lg:border-b-8 ">
          <h3 className="text-3xl font-semibold">What Is A Credit Card?</h3>
        </div>
        <div className="bg-white p-12 lg:p-20 lg:border-l-6 border-black text-justify max-lg:border-t-8">
          <p>
            A credit card is a financial instrument that has a pre-loaded
            balance that the cardholder can use to make transactions and pay for
            them later. The card issuer will let you pay off the balance fully,
            interest-free, for up to 50 days from the date of payment. To avoid
            any fines, the cardholder can pay the minimum amount due (which can
            be anywhere between 5% to 10% on the total amount owed). The
            balance, however, will be carried forward to the next month, and
            interest set by the credit card company will be levied.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 border-y-4 border-black">
            
              <div className="bg-white p-12 lg:p-20 lg:border-r-4 border-black text-justify max-lg:border-t-8">
                <p>Let's start from the beginning: Why should you get your first credit card, let alone a bunch of credit cards? Credit cards sometimes get a bad rap, but they are a tool you can use to build credit, earn cash back, earn travel rewards, or get access to other really cool perks. The key is using credit cards responsibly.</p>
              </div>

              <div className="bg-yellow-500 p-12 lg:p-20 lg:border-l-6 border-black max-lg:border-b-8">
                <h3 className="text-3xl font-semibold">Why Get A Credit Card?</h3>
              </div>

      </div>

        <div className="grid lg:grid-cols-2 border-t-4 border-black">
        <div className="bg-yellow-500 p-12 lg:p-20 lg:border-r-4 border-black max-lg:border-b-8 ">
          <h3 className="text-3xl font-semibold">How does a Credit Card work?</h3>
        </div>
        <div className="bg-white p-12 lg:p-20 lg:border-l-6 border-black text-justify max-lg:border-t-8">
          <p>
          A credit card allows delayed payment for purchases, essentially borrowing from the issuer until the month's end. Know that credit card eligibility depends on a stable income and a good credit score, and it can also be secured against a fixed deposit. Your credit limit, 3 to 5 times your monthly salary, varies by bank. While popular banks provide the card, payment gateways like Visa, MasterCard, and RuPay handle transactions, leaving terms like minimum due, interest, and rewards to the issuer's discretion.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default CreditCardInfo;
