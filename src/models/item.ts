
let nextId = 1; // start numeric IDs from 1

export type Item = {
  id: number; // change from string to number
  name: string;
  quantity: string;
  purchased: boolean;
  createdAt: string;
  updatedAt?: string;
};

export const items: Item[] = [];

export function createItem(payload: { name: string; quantity?: string }): Item {
  const now = new Date().toISOString();
  const item: Item = {
    id: nextId++, // increment numeric ID
    name: payload.name,
    quantity: payload.quantity ?? '1',
    purchased: false,
    createdAt: now,
    updatedAt: now,
  };
  items.push(item);
  return item;
}

export function findItemById(id: number): Item | undefined {
  return items.find((i) => i.id === id);
}

export function updateItemById(
  id: number,
  patch: Partial<Omit<Item, 'id' | 'createdAt'>>
): Item | undefined {
  const item = findItemById(id);
  if (!item) return undefined;
  if (patch.name !== undefined) item.name = patch.name;
  if (patch.quantity !== undefined) item.quantity = patch.quantity;
  if (patch.purchased !== undefined) item.purchased = patch.purchased;
  item.updatedAt = new Date().toISOString();
  return item;
}

export function deleteItemById(id: number): boolean {
  const idx = items.findIndex((i) => i.id === id);
  if (idx === -1) return false;
  items.splice(idx, 1);
  return true;
}
