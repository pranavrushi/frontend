import React from "react";
import Image from "next/image";

const CryptoPred = () => {
  return (
    <div className="container">
      <div className="text-center my-4">
        <h2>Crypto/Stock Prediction Algorithms</h2>
        <Image
          src="/research/21_22/crypto_pred/sanket_1.png"
          height="480px"
          width="1024px"
        />
        <Image
          src="/research/21_22/crypto_pred/sanket_2.png"
          height="480px"
          width="1024px"
        />
      </div>

      <p style={{ fontSize: "18px" }}>
        A project regarding Crypto/Stock prediction algorithms was done by
        Sanket Patel- a junior researcher at SIME. During this study, the
        forecasting of the bitcoin market was analyzed. The spread of machine
        learning methods was utilized, and a comprehensive set of potential
        market-predictive features was considered. Bitcoin market's
        predictability over six years of overtime was also examined, and
        further, the spread of machine learning models was investigated. It was
        found that while all models outperformed a random classifier, recurrent
        neural networks and gradient boosting classifiers were particularly
        well-suited for the prediction tasks.
      </p>
    </div>
  );
};

export default CryptoPred;
