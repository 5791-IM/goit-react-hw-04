import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const API_KEY = "VwcNAHNQRqm-b8x6d_oRPvtXImyTiMSm5qrOWEHDSIs";

const getImages = async (query, page = 1) => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: API_KEY,
      query: query,
      page: page,
      per_page: 12,
      orientation: "landscape",
    },
  });

  return response.data.results;
};

export default getImages;
