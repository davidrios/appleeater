let lastId = 0;

export function generateId() {
  lastId++;
  return `image:${lastId.toString()}`;
}
