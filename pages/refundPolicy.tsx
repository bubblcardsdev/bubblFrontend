import React from "react";

export default function ReturnsRefunds() {
  return (
    <section
      className="rr-policy"
      aria-labelledby="returns-refunds-title"
      role="region"
    >
      <h1 className="rr-title" id="returns-refunds-title">
        Returns &amp; Refunds Policy
      </h1>

      <p className="rr-intro">
        We aim to deliver quality products every time. If something arrives
        damaged, we’re here to help. This policy explains when and how refunds
        are processed.
      </p>

      <h2 className="rr-heading">Refund Eligibility</h2>
      <ul className="rr-list">
        <li>
          <strong>
            Refunds are available only for physical damage on arrival.
          </strong>
        </li>
        <li>
          You must request a refund{" "}
          <strong>within 7 days of receipt of the product</strong>.
        </li>
        <li>
          The item must be in its original condition (aside from the reported
          damage) and include any packaging, inserts, or accessories provided.
        </li>
      </ul>

      <h2 className="rr-heading">What’s Not Eligible</h2>
      <ul className="rr-list">
        <li>Change of mind or buyer’s remorse</li>
        <li>Incorrect personalization details provided by the customer</li>
        <li>Normal wear and tear or damage occurring after delivery</li>
        <li>Issues caused by improper use, storage, or handling</li>
        <li>
          Performance variations due to third-party devices, cases, or NFC
          reader compatibility
        </li>
      </ul>

      <h2 className="rr-heading">How to Request a Refund</h2>
      <ol className="rr-steps">
        <li>
          <strong>Contact us within 7 days of delivery</strong> via email or
          phone with your order number.
        </li>
        <li>
          Provide <strong>clear photos or a short video</strong> showing the
          physical damage and the packaging condition.
        </li>
        <li>
          Our team will review your request and may ask for additional
          information if needed. We’ll{" "}
          <strong>
            communicate updates by email or phone call on a need basis
          </strong>
          .
        </li>
      </ol>

      <h2 className="rr-heading">Inspection &amp; Approval</h2>
      <p className="rr-paragraph">
        Once your claim is reviewed, we’ll confirm eligibility. If approved,
        we’ll issue a refund to your original payment method. Depending on your
        bank or payment provider, it may take several business days to appear in
        your account.
      </p>

      <h2 className="rr-heading">Replacements (If Applicable)</h2>
      <p className="rr-paragraph">
        If a replacement is preferred and stock allows, we may offer a
        like-for-like replacement instead of a refund for eligible damage
        claims.
      </p>

      <h2 className="rr-heading">Return Shipping (If Requested)</h2>
      <p className="rr-paragraph">
        In some cases, we may request the product be returned for inspection. If
        a return is required for an approved damage claim,{" "}
        <strong>we will provide return instructions</strong>. Please do not
        return items without prior authorization.
      </p>

      <h2 className="rr-heading">Contact</h2>
      <p className="rr-paragraph">
        For refund requests or questions, contact us at{" "}
        <a className="rr-link" href="mailto:support@bubbl.cards">
          support@bubbl.cards
        </a>{" "}
        or{" "}
        <a className="rr-link" href="tel:+10000000000">
          +91 7358108634
        </a>
        .
      </p>
    </section>
  );
}
