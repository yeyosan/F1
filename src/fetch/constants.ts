const API_HOST = "api-formula-1.p.rapidapi.com";
const API_KEY = "c3efd45b3amsh2499fafb11b6900p1cb1c4jsn516d92dac60e";
const API_URL_GET = "https://api-formula-1.p.rapidapi.com";

const headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("max-age", "604800");
headers.append(
  "X-RapidAPI-Key",
  "c3efd45b3amsh2499fafb11b6900p1cb1c4jsn516d92dac60e"
);
headers.append("X-RapidAPI-Host", "api-formula-1.p.rapidapi.com");

const FETCH_OPTIONS: RequestInit = {
  method: "GET",
  cache: "force-cache",
  headers,
};

export { API_HOST, API_KEY, API_URL_GET, FETCH_OPTIONS };
