import axios from "axios";

export const getTodaysWord = async () => {
  const baseUrl = process.env.REACT_APP_SERVER_URL;
  try {
    const res = await axios.get(`${baseUrl}word-of-the-day`);
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};
