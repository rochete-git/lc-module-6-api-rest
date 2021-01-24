import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacterDetails, CharacterDetails } from './character-details.vm';
import { mapCharacterDetailsFromApiToVm } from './character-details.mappers';
import { Lookup } from 'common/models';
import { CharacterDetailsComponent } from './character-details.component';


export const CharacterDetailsContainer: React.FunctionComponent = (props) => {
  const [characterDetails, setCharacterDetails] = React.useState<CharacterDetails>(createEmptyCharacterDetails());
  const { id } = useParams();
  const history = useHistory();

  const handleLoadCharacterDetails = async () => {
    //const apiCharacterDetails = await api.getCharacterDetailsMockData(id);
    const apiCharacterDetails = await api.getCharacterDetails(id);
    setCharacterDetails(mapCharacterDetailsFromApiToVm(apiCharacterDetails));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacterDetails();
    }
  }, []);

  return <CharacterDetailsComponent characterDetails={characterDetails} />;
};

