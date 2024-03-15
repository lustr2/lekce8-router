import { useParams, Link } from "react-router-dom";
import { invoices } from "../../data/data";

export const InvoicesPage = () => {
   const { invoiceId } = useParams();
    const invoiceData = invoices.find((inv) => inv.id === Number(invoiceId));
    const invoicesLines = invoices.map(o => <li> <Link to={"/invoices/" + o.id}> {o.id} </Link>
    <span>|</span>{o.product} <span>|</span> {o.amount}</li>);
  
  return (
    <main>
      <h3>
          {invoiceData?.product} ({invoiceData?.amount},- Kc)
        </h3>
        <ul>
          {invoicesLines}
        </ul>
    </main>
  );
};

