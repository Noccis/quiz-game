const BASE_URL = "https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=boolean&encode=base64";

export const fetchData = async () => {

    try {
      const responce = await fetch(BASE_URL);
      const data = await responce.json();
      return data.results;
    } catch (e) {
      console.log("ERROR:" + e);
      return null;
    }
    
  };