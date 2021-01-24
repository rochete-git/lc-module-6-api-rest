import * as apiModel from './api/character-details.api-model';
import * as viewModel from './character-details.vm';

export const mapCharacterDetailsFromApiToVm = (
  character: apiModel.CharacterDetails
): viewModel.CharacterDetails => ({
  ...character,
  description: character.name + " is " + character.status + " and belongs to "
   + character.species + " specie. " + "Original from ",
});
