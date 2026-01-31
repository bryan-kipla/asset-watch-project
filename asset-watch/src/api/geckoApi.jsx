import axios from 'axios';

const API_BASE_URL = '/api/gecko'; 
const HEADERS = {
  'Accept': 'application/json;version=20230203',
};

export const fetchOHLCVData = async (networkId, poolAddress, timeframe, aggregate) => {
  // 2. Add the correct API v2 path segment
  const endpoint = `${API_BASE_URL}/api/v2/networks/${networkId}/pools/${poolAddress}/ohlcv/${timeframe}`;
  
  try {
    const response = await axios.get(endpoint, {
      headers: HEADERS,
      params: { aggregate },
    });

    return response.data.data.attributes.ohlcv_list; 
  } catch (error) {
    console.error("OHLCV Fetch Error:", error);
    throw error;
  }
};

export const fetchTopPools = async (networkId, page = 1) => {
  // 3. Add the correct API v2 path segment
  const endpoint = `${API_BASE_URL}/api/v2/networks/${networkId}/pools`;

   console.log("Fetching from:", endpoint);

  try {
    const response = await axios.get(endpoint, {
      headers: HEADERS,
      params: { page },
    });
    return response.data.data;
  } catch (error) {
    console.error("Top Pools Fetch Error:", error);
    throw error;
  }
};
