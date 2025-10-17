import express from 'express';
import { items, createItem, findItemById, updateItemById, deleteItemById } from '../models/item';

const router = express.Router();

function resSuccess(res: express.Response, data: unknown, status = 200) {
  return res.status(status).json({ success: true, data });
}

function resError(res: express.Response, message: string, status = 400) {
  return res.status(status).json({ success: false, error: message });
}

// GET /items
router.get('/', (req, res) => resSuccess(res, items));

// POST /items
router.post('/', (req, res) => {
  const { name, quantity } = req.body;
  if (!name || typeof name !== 'string' || name.trim() === '') {
    return resError(res, 'Field "name" is required and must be a non-empty string.', 400);
  }
  const item = createItem({ name: name.trim(), quantity });
  return resSuccess(res, item, 201);
});

// GET /items/:id
router.get('/:id', (req, res) => {
  const id = Number(req.params.id); // convert to number
  if (isNaN(id)) return resError(res, 'Invalid ID', 400);

  const item = findItemById(id);
  if (!item) return resError(res, 'Item not found', 404);
  return resSuccess(res, item);
});

// PUT /items/:id
router.put('/:id', (req, res) => {
  const id = Number(req.params.id); // convert to number
  if (isNaN(id)) return resError(res, 'Invalid ID', 400);

  const { name, quantity, purchased } = req.body;
  const patch: any = {};
  if (name !== undefined) patch.name = name.trim();
  if (quantity !== undefined) patch.quantity = quantity;
  if (purchased !== undefined) patch.purchased = purchased;

  const updated = updateItemById(id, patch);
  if (!updated) return resError(res, 'Item not found', 404);
  return resSuccess(res, updated);
});

// DELETE /items/:id
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id); // convert to number
  if (isNaN(id)) return resError(res, 'Invalid ID', 400);

  const ok = deleteItemById(id);
  if (!ok) return resError(res, 'Item not found', 404);
  return res.status(204).send();
});

export default router;
