const API_URL = "https://api-formula-1.p.rapidapi.com/seasons";
const API_KEY = "c3efd45b3amsh2499fafb11b6900p1cb1c4jsn516d92dac60e";
const API_HOST = "api-formula-1.p.rapidapi.com";

const FETCH_OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": API_HOST,
  },
};

export { API_URL, FETCH_OPTIONS };
