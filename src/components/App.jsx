import { Navigate, Route, Routes } from 'react-router';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { RatesPage } from 'pages/RatesPage/RatesPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fecthBaseCurrency } from 'redux/operations';
import { setBaseCurrency } from 'redux/slice';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;

      dispatch(fecthBaseCurrency(crd));
    }

    function error(err) {
      dispatch(setBaseCurrency('USD'));
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="rates" element={<RatesPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
};
