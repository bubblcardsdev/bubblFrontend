import React from "react";

export default function ShippingPolicy() {
  return (
    <section
      className="shipping-policy"
      aria-labelledby="shipping-policy-title"
    >
      <h1 className="sp-title" id="shipping-policy-title">
        Shipping Policy
      </h1>

      <p className="sp-intro">
        Thank you for shopping with us! We value your trust and want to ensure
        full transparency regarding our shipping process.
      </p>

      <h2 className="sp-heading">Processing and Delivery Timeframes</h2>
      <ul className="sp-list">
        <li>
          Our <strong>standard delivery timeframe</strong> for NFC digital
          business cards is <strong>7–14 business days</strong> from the date of
          order confirmation.
        </li>
        <li>
          Delivery times may <strong>vary based on the product type</strong>,
          especially for other NFC products and cards with different{" "}
          <strong>material types</strong> or custom finishes.
        </li>
        <li>
          Once your order is processed and shipped, you’ll receive a
          confirmation email with tracking information where applicable.
        </li>
      </ul>

      <h2 className="sp-heading">Variations Based on Product Type</h2>
      <ul className="sp-list">
        <li>
          <strong>Standard NFC Cards:</strong> Typically delivered within{" "}
          <strong>7–10 business days</strong>.
        </li>
        <li>
          <strong>
            Premium or Custom NFC Cards (Special Material/Finish):
          </strong>{" "}
          May take up to <strong>14 business days or more</strong> depending on
          complexity and material availability.
        </li>
        <li>
          <strong>Other NFC Products:</strong> Delivery timelines vary depending
          on product category, material type, and stock availability.
        </li>
      </ul>

      <h2 className="sp-heading">Shipping Delays</h2>
      <p className="sp-paragraph">
        We strive to deliver your order within the stated timeframes. However,{" "}
        <strong>delays may occur due to unforeseen circumstances</strong>, such
        as logistics disruptions (e.g., strikes, customs delays, or natural
        disasters), supply chain issues, stock shortages, or carrier delays
        outside our control.
      </p>
      <p className="sp-paragraph">
        In such cases, we will{" "}
        <strong>
          communicate updates by email or phone call on a need basis
        </strong>{" "}
        to keep you informed.
      </p>

      <h2 className="sp-heading">Contact Information</h2>
      <p className="sp-paragraph">
        If you have any questions about your shipment or need assistance with
        tracking, please contact our customer support team at{" "}
        <a className="sp-link" href="mailto:support@bubbl.cards">
          support@bubbl.cards
        </a>{" "}
        or{" "}
        <a className="sp-link" href="tel:+917358108634">
          +91 7358108634
        </a>
        .
      </p>
    </section>
  );
}
