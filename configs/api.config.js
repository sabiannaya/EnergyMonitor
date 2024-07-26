require("dotenv").config();

const BASE_URL = process.env.API_BASE_URL;

module.exports = {
  API_STORE_ELECTRICITY_DATA: `${BASE_URL}/api/electricity/add`,
  API_STORE_ANOMALY_DATA: `${BASE_URL}/api/electricity/anomaly/add`,

};
