import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import { mockGender, mockCharacterCollection } from './character.mock-data';

export const getCharacter = async (id: string): Promise<Character> => {
  return mockCharacterCollection.find((h) => h.id.toString() === id);
};

export const getGender = async (): Promise<Lookup[]> => {
  return mockGender;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
