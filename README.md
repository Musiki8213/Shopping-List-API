# Shopping List API

A simple RESTful API to manage a shopping list, built with Node.js and TypeScript. Users can add, view, update, and delete items.

---

## Setup

1. Clone the repo:

```bash
git clone <your-repo-url>
cd shopping-list-api
```

2. Install dependencies:

```bash
npm install
```

3. Run the server (development):

```bash
npx ts-node src/server.ts
```

Or after compiling:

```bash
tsc
node dist/server.js
```

Server runs at `http://localhost:3000`.

---

## API Endpoints

### 1. Get All Items
- **GET /items**
- **Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Milk",
      "quantity": "2L",
      "purchased": false,
      "createdAt": "2025-10-17T10:00:00.000Z",
      "updatedAt": "2025-10-17T10:00:00.000Z"
    }
  ]
}
```

### 2. Get Item by ID
- **GET /items/:id**
- **Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Milk",
    "quantity": "2L",
    "purchased": false
  }
}
```

### 3. Add a New Item
- **POST /items**
- **Body:**
```json
{
  "name": "Eggs",
  "quantity": "12"
}
```
- **Response:**
```json
{
  "success": true,
  "data": {
    "id": 2,
    "name": "Eggs",
    "quantity": "12",
    "purchased": false,
    "createdAt": "2025-10-17T10:05:00.000Z",
    "updatedAt": "2025-10-17T10:05:00.000Z"
  }
}
```

### 4. Update an Item
- **PUT /items/:id**
- **Body (partial or full):**
```json
{
  "name": "Eggs",
  "quantity": "18",
  "purchased": true
}
```
- **Response:**
```json
{
  "success": true,
  "data": {
    "id": 2,
    "name": "Eggs",
    "quantity": "18",
    "purchased": true,
    "createdAt": "2025-10-17T10:05:00.000Z",
    "updatedAt": "2025-10-17T10:10:00.000Z"
  }
}
```

### 5. Delete an Item
- **DELETE /items/:id**
- **Response:**  
  - 204 No Content if deleted  
  - 404 Not Found if item does not exist

---

## Error Handling

- **400 Bad Request:** Missing or invalid fields  
- **404 Not Found:** Item not found  

Example:

```json
{
  "success": false,
  "error": "Item not found"
}
```

---

## Testing

- Use **Postman**, **Insomnia**, or **curl**.

