import { API } from "../API";

export const usePost = async (endpoint, object) => {
  // {fullUrl : "fullUrl.com.ar/asdnasuidas/aisnda.php"}
  try {
    const { data } = await API.post(endpoint, object);
    return data;
  } catch (e) {
    console.error(e);
  }
};
