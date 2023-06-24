import { useDispatch } from 'react-redux';
import { fetchExchangeCurrency } from 'redux/operations';

export const ExchageForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = ev => {
    ev.preventDefault();
    const { currency } = ev.target.elements;
    const [amount, from, , to] = currency.value.split(' ');
    dispatch(fetchExchangeCurrency({ amount, from, to }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Currency
        <input type="text" name="currency" placeholder="15 USD in UAH" />
      </label>
      <button type="submit">Convert</button>
    </form>
  );
};
