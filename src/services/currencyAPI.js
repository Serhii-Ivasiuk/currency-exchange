import axios from 'axios';

export const getUserCurrentPosition = async ({ latitude, longitude }) => {
  const apiKey = 'd4683b09d0c94ec0aebf0b2e043decbf';

  const urlPosition = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&language=en`;

  const { data } = await axios.get(urlPosition);

  return data.results[0].annotations.currency.iso_code;
};

const myHeaders = new Headers();
myHeaders.append('apikey', 'Bqf0jgud3HsN3E435u3LbG7qgqDyjvOj');

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

export const convertCurrency = ({ amount, from, to }) => {
  return fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions
  ).then(response => response.json());
};
