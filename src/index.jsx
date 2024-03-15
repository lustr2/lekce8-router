import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link , Outlet} from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage';
import { ExpensesPage } from './pages/Expenses';
import { InvoicesPage } from './pages/Invoices';

const App = () => {
  return (
    <>
    <div className="container">
      test Homepage
      <h1>Bookkeeper!</h1>
      <nav>
        <Link to='/'>Domu </Link>
        <span> | </span>
        <Link to="/invoices/:invoiceId">Invoices</Link>
        <span> | </span>
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet /> 
    </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
        {
            path: '/expenses',
            element: <ExpensesPage />,
          },
        {
            path: '/invoices',
            element: <InvoicesPage />,     
        },
        {
          path: '/invoices/:invoceId',
          element: <HomePage />,
        },
      ],
    },
  ]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);
