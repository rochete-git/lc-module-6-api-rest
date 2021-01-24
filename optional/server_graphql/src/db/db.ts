import crypto from 'crypto';
import {
  createDefaultCharacterComment,
  mockCharacterComment,
} from './mock-data';
import { CharacterComment, CharacterCommentEdit } from './models';

let characterComment = [...mockCharacterComment];

export const getCharacterComment = async (
  id: string
): Promise<CharacterComment> => {
  const result = characterComment.find((h) => h.id === id);
  if (result == undefined) {
    const noData = { id: "0", comment: "" };
    return noData;
  } else {
    return result;
  };
};

export const insertCharacterComment = async (
  characterCommentEdit: CharacterCommentEdit
) => {
  const newId = crypto.randomBytes(16).toString('hex');
  characterComment = [
    ...characterComment,
    {
      ...createDefaultCharacterComment(),
      ...characterCommentEdit,
      //id: newId,
    },
  ];
  return newId;
};

export const updateCharacterComment = async (
  characterCommentEdit: CharacterCommentEdit
): Promise<boolean> => {
  characterComment = characterComment.map((h) =>
    h.id === characterCommentEdit.id
      ? {
          ...h,
          ...characterCommentEdit,
        }
      : h
  );
  return true;
};
