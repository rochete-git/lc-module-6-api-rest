import { CharacterEntityApi, GetCharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];
const url = '/api/characters'

export const getCharacterCollectionMockData = async (): Promise<CharacterEntityApi[]> => {
  return characterCollection;
};

//export const getCharacterCollectionJsonServer = async (): Promise<CharacterEntityApi> => {
//
//  /* fetch from json-server*/
//  const response = await fetch(url);
//  if (response.ok) {
//    return await response.json();
//  } else {
//    throw Error(response.statusText);
//  }
//};

export const getCharacterCollection = async (): Promise<GetCharacterEntityApi> => {

  //const url = 'https://rickandmortyapi.com/api/character';
  const url = `${process.env.API_REST_URL}` + '/character/';
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  } else {
    throw Error(response.statusText);
  }
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id.toString() !== id);
  return true;
};
