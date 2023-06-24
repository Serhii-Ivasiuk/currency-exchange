import { ExchageForm } from 'components/ExchangeForm/ExchangeForm';
import { useSelector } from 'react-redux';
import { selectExchanged } from 'redux/selectors';

export const HomePage = () => {
  const result = useSelector(selectExchanged);
  return (
    <>
      <ExchageForm />
      {result && <p>Result: {result} </p>}
    </>
  );
};
