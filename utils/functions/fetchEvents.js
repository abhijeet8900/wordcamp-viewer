import axios from "axios";
import { WORDCAMP_BASE_URI } from "../../src/constants/endpoints";

const fetchEvents = async (page = 1, perPage = 100) => {
  const uri = `${WORDCAMP_BASE_URI}wordcamps?per_page=${perPage}&order=desc&page=${page}`;
  return axios.get(uri)
};

export default fetchEvents