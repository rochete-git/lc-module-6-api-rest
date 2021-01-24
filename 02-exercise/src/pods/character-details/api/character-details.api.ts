import { CharacterDetails } from './character-details.api-model';
import { mockCharacterDetails } from './character-details.mock-data';
import Axios from 'axios';

export const getCharacterDetailsMockData = async (id: string): Promise<CharacterDetails> => {
  return mockCharacterDetails.find((h) => h.id.toString() === id);
};

export const getCharacterDetails = async (id: string): Promise<CharacterDetails> => {
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
  console.log(data)
  return data;
};

