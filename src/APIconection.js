import fetch from "node-fetch";
// Conexion principal a la API
const fetchData = async (API) => {
  try {
    const response = await fetch(API);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching the data", error);
  }
};

export { fetchData };
