import { CharacterComment } from './models';

export const createDefaultCharacterComment = (): CharacterComment => ({
  id: '',
  comment: '',
});

export const mockCharacterComment: CharacterComment[] = [
      {
        id: "1",
        comment: "Sin comentarios",
      },
      {
        id: "2",
        comment: "Sin comentarios",
      },
      {
        id: "3",
        comment: "Sin comentarios",
      },
      {
        id: "4",
        comment: "Sin comentarios",
      }
];
