import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacterDetails, CharacterDetails } from './character-details.vm';
import { mapCharacterCommentFromVmToApi, mapCharacterDetailsFromApiToVm } from './character-details.mappers';
import { CharacterDetailsComponent } from './character-details.component';
import { CharacterComment } from './api';


export const CharacterDetailsContainer: React.FunctionComponent = (props) => {
  const [characterDetails, setCharacterDetails] = React.useState<CharacterDetails>(createEmptyCharacterDetails());
  const [existComment, setExistComment] = React.useState<Boolean>(false);
  const { id } = useParams();
  const history = useHistory();

  const handleLoadCharacterDetails = async () => {
    //const apiCharacterDetails = await api.getCharacterDetailsMockData(id);
    const apiCharacterDetails = await api.getCharacterDetails(id);
    const apiCharacterComment = await api.getCharacterComment(id);
    setExistComment(apiCharacterComment.id !== undefined)
    setCharacterDetails(mapCharacterDetailsFromApiToVm(apiCharacterDetails, apiCharacterComment.comment));
  };

  const handleSaveComment = async (id: number, comment: string) => {
    const apiCharacterComment = mapCharacterCommentFromVmToApi(id, comment);
    const success = await api.saveCharacterComment(apiCharacterComment, existComment);
    if (success) {
      history.goBack();
    } else {
      alert('Error on save character\'s comment');
    }
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacterDetails();
    }
  }, []);

  return <CharacterDetailsComponent
    characterDetails={characterDetails}
    onSaveComment={handleSaveComment}
    />;
};

