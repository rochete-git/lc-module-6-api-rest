import {
  CharacterDetails,
  CharacterComment,
} from './character-details.api-model';
import { mockCharacterDetails } from './character-details.mock-data';
import Axios from 'axios';

export const getCharacterDetailsMockData = async (
  id: string
): Promise<CharacterDetails> => {
  return mockCharacterDetails.find((h) => h.id.toString() === id);
};

export const getCharacterDetails = async (
  id: string
): Promise<CharacterDetails> => {
  const url = `${process.env.API_REST_URL}` + '/character/' + id;
  // FETCH
  /*const response = await fetch(url);
    if (response.ok) {
    return await response.json();
  } else {
    throw Error(response.statusText);
  }*/

  // AXIOS
  const { data } = await Axios.get<CharacterDetails>(url);
  return data;
};

export const getCharacterComment = async (
  id: string
): Promise<CharacterComment> => {
  const url = `${process.env.API_REST_JSON_SERVER_URL}` + '/characters/' + id;
  // FETCH
  /*const response = await fetch(url);
    if (response.ok) {
    return await response.json();
  } else {
    throw Error(response.statusText);
  }*/

  // AXIOS
  try {
    const { data } = await Axios.get<CharacterComment>(url);
    return data;
  } catch (error) {
    // Error 😨
    if (error.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      /*
       * The request was made but no response was received, `error.request`
       * is an instance of XMLHttpRequest in the browser and an instance
       * of http.ClientRequest in Node.js
       */
      console.log(error.request);
    } else {
      // Something happened in setting up the request and triggered an Error
      console.log('Error', error.message);
    }
    const data={id: undefined, comment: undefined}
    return data;
  }
};

export const saveCharacterComment = async (
  characterComment: CharacterComment,
  exists: Boolean
): Promise<boolean> => {
  if (exists) {
    const url = `${process.env.API_REST_JSON_SERVER_URL}` + '/characters/' + `${characterComment.id}`;
    await Axios.put<CharacterComment>(url, characterComment);
  } else {
    const url = `${process.env.API_REST_JSON_SERVER_URL}` + '/characters/';
    await Axios.post<CharacterComment>(url, characterComment);
  }
  return true;
};
