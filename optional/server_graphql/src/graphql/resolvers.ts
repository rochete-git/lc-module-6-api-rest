import {
  CharacterComment,
  getCharacterComment,
  insertCharacterComment,
  updateCharacterComment,
  CharacterCommentEdit,
} from '../db';

interface SaveCharacterCommentArgs {
  characterComment: CharacterCommentEdit;
  exists?: Boolean;
}

export const resolvers = {
  Query: {
    characterComment: async (parent, args): Promise<CharacterComment> => {
      const characterComment = await getCharacterComment(args.id);
      return characterComment;
    },

  },
  Mutation: {
    saveCharacterComment: async (parent, args: SaveCharacterCommentArgs): Promise<boolean> => {
      if (args.exists) {
        await updateCharacterComment(args.characterComment);
      } else {
        await insertCharacterComment(args.characterComment);
      }
      return true;
    },
  },
};
