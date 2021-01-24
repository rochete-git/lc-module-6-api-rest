import { Router } from 'express';
import {
  getCharacterComment,
  insertCharacterComment,
  updateCharacterComment,
  CharacterCommentEdit,
} from '../db';

export const characterCommentApi = Router();

characterCommentApi
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const characterComment = await getCharacterComment(id);
    res.send(characterComment);
  })
  .post('/', async (req, res) => {
    const characterCommentEdit: CharacterCommentEdit = req.body;
    const id = await insertCharacterComment(characterCommentEdit);
    res.send(id);
  })
  .patch('/:id', async (req, res) => {
    const characterCommentEdit: CharacterCommentEdit = req.body;
    await updateCharacterComment(characterCommentEdit);
    res.sendStatus(200);
  });
