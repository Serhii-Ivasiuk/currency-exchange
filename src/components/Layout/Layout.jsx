import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { selectBaseCurrency } from 'redux/selectors';

export const Layout = () => {
  const baseCurrency = useSelector(selectBaseCurrency);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rates">Rates</Link>
            </li>
          </ul>
        </nav>
        <p>Base currency: {baseCurrency}</p>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
