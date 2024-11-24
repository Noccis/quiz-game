export const fetchData = async (category, difficulty) => {
  // Dynamically construct the URL using the category and difficulty parameters
  const BASE_URL = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&encode=base64`;

  try {
    const responce = await fetch(BASE_URL);
    const data = await responce.json();
    return data.results;
  } catch (e) {
    console.log("ERROR:" + e);
    return null;
  }
};
