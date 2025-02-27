import styles from "./RefundPolicy.module.css";

const RefundPolicy = () => {
  return (
    <div className={styles.container}>
      <div className={styles.policyBox}>
        <h1> Returns & Refunds Policy</h1>
        <p className={styles.returnInfo}>
          You are entitled to return your order within 3 days only if it is
          delivered damaged.
        </p>
        <p className={styles.returnDeadline}>
          The deadline for returning an order is 3 days from the date you
          received the order.
        </p>
        <p className={styles.returnInstructions}>
          In order to return the order, you must inform us of your decision by
          emailing us at{" "}
          <span className={styles.highlight}>support@bubbl.cards</span>
        </p>
        <p className={styles.reimbursementDetails}>
          We will reimburse you no later than 30 days from the day on which we
          receive the returned goods. We will use the same means of payment as
          you used for the order, and you will not incur any fees for such
          reimbursement.
        </p>
        <h3 className={styles.conditionsHeading}>Conditions for returns:</h3>
        <p className={styles.conditionsInfo}>
          In order for the goods to be eligible for a return, please make sure
          that:
        </p>
        <p className={styles.purchaseCondition}>
          The goods were purchased in the last 3 days
        </p>
        <p className={styles.packagingCondition}>
          The goods are in the original packaging
        </p>
        <h3 className={styles.returningGoodsHeading}>Returning Goods</h3>
        <p className={styles.returnProcess}>
          We will be initiating the return process by sharing the shipment
          instructions with you over your registered email address.
        </p>
        <h3 className={styles.contactHeading}>Contact Us</h3>
        <p className={styles.contactInfo}>
          If you have any questions about our Returns and Refunds Policy, please
          contact us by{" "}
          <span className={styles.highlight}>support@bubbl.cards</span> or call
          <span className={styles.highlight}> +91 7845861552</span>
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
