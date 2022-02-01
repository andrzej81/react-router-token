import React from "react";
import "./Invoice.css";
import { getInvoices } from "../../data";
import { Link } from "react-router-dom";

/*export default function Invoices() {
  return <h2>Preferences</h2>;
}*/

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <h2>Invoices</h2>
        <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem"
        }}
      >
        {invoices.map(invoice => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
                {invoice.number} {" "}
                {invoice.name} {" "}
                {invoice.amount} {" "}
                {invoice.due}
          </Link>
        ))}
      </nav>
    </div>
  );
}
