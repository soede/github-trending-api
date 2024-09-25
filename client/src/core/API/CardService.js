import axios from "axios";

const getAllPosts = async () => {
  const response = await axios.get("/api/repos");
  return response;
};

export default getAllPosts;
