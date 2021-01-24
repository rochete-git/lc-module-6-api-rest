import * as React from 'react';
import { AppLayout } from 'layouts';
import { CharacterCollectionContainer, CharacterCollectionListContainer } from 'pods/character-collection';

export const CharacterCollectionScene = () => (
  <AppLayout>
    {/*<CharacterCollectionContainer />*/}
    <CharacterCollectionListContainer />
  </AppLayout>
);
