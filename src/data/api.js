const BASE_URL = "https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&encode=base64";

export const fetchData = async () => {

    try {
      const responce = await fetch(BASE_URL);
      const data = await responce.json();
      const results = data.results;
      // Gör om till atob innan du returnerar
      return results;
    } catch (e) {
      console.log("ERROR:" + e);
      return null;
    }
    
  };