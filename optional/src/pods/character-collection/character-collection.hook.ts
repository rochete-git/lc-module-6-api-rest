import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
//import { getCharacterCollectionMockData as getCharacterCollection } from './api';
import { getCharacterCollection as getCharacterCollection, getCharacterCollectionGraphQL, getCharacterCollectionMockData } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>(
    []
  );

  const loadCharacterCollection = () => {
    /*getCharacterCollectionMockData().then((result) => {
      setCharacterCollection(mapToCollection(result, mapFromApiToVm))
    }
    );*/

    /*getCharacterCollection().then((result) => {
      setCharacterCollection(mapToCollection(result.results, mapFromApiToVm))
    }
    );*/

    getCharacterCollectionGraphQL().then((result) => {
      console.log(result)
      setCharacterCollection(mapToCollection(result.results, mapFromApiToVm))
    }
    );
  };

  return { characterCollection, loadCharacterCollection };
};
