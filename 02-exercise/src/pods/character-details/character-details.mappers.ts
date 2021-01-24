import * as apiModel from './api/character-details.api-model';
import * as viewModel from './character-details.vm';

export const mapCharacterDetailsFromApiToVm = (
  character: apiModel.CharacterDetails, comment: string
): viewModel.CharacterDetails => ({
  ...character,
  description: character.name + " is " + character.status + " and belongs to "
   + character.species + " specie. " + "Original from ",
  comment: comment
});


export const mapCharacterCommentFromVmToApi = (id: number, comment: string): apiModel.CharacterComment =>
  (({
    id: id,
    comment: comment
  } as unknown) as apiModel.CharacterComment);
