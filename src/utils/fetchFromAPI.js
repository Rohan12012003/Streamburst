import axios from "axios"

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults:50,
    },
    headers: {
      'X-RapidAPI-Key': '224ee90d4dmshef38f07ddaf50f5p12c791jsn58b7f179521a',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    },
  };
  //console.log(process.env.REACT_APP_RAPID_API_KEY);
export const fetchFromAPI = async (url) =>{

    try{
      const {data} = await axios.get(`${BASE_URL}/${url}`,options);
      //console.log(data);
      return data;
    }
    catch(error){
      console.log(error);
    }
}