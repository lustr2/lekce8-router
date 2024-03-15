import { Link, Outlet } from 'react-router-dom';
import '../../App.css';

export const HomePage = () => {
    return (
      <div className="container">
        test Homepage
        <h1>Bookkeeper!</h1>
        <nav>
          <Link to="/invoices/:invoiceId">Invoices</Link>
          <span> | </span>
          <Link to="/expenses">Expenses</Link>
        </nav>
      <Outlet /> 
      </div>
    );
  };
  