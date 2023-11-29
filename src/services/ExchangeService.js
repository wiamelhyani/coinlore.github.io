import axios from "axios";

export const getExchanges = async () => {
  return await axios.get("https://api.coinlore.net/api/exchanges/");
};

export const getExchangeById = async (id) => {
  return await axios.get(`https://api.coinlore.net/api/exchange/?id=${id}`);
};
