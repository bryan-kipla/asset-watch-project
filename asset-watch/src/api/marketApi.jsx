import axios from "axios";

const API_URL = "https://api.coingecko.com/api/v3";

export const getMarketData = async () => {
  try {
    const response = await axios.get(`${API_URL}/coins/markets`, {
      params: {
        vs_currency: "kes",         
        order: "market_cap_desc",
        per_page: 10,
        page: 1,
        sparkline: true,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching market data:", error);
    return [];
  }
};
