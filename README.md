# Question No 01 - Circle Radius Calculator

A full-stack web application that calculates the radius of a circle using the equation:

**x² + y² + 2gx + 2fy + c = 0** → **Radius = √(g² + f² - c)**

---

## Tech Stack

| Layer    | Technology                        |
|----------|-----------------------------------|
| Frontend | React 18 + TypeScript + Vite      |
| Backend  | Spring Boot 4.1.0 (Java 17)       |
| Styling  | Inline CSS (React CSSProperties)  |

---

## Project Structure

```
q1/
├── backend/
│   └── demo/
│       ├── src/main/java/com/it_company/demo/
│       │   ├── controller/    # CircleController.java
│       │   ├── service/       # CircleService + CircleServiceImpl
│       │   ├── dto/           # CircleRequestDTO, CircleResponseDTO
│       │   └── DemoApplication.java
│       ├── src/main/resources/
│       │   └── application.properties
│       └── pom.xml
│
└── frontend/
    └── frontend/
        ├── src/
        │   ├── components/    # CircleCalculator.tsx
        │   ├── services/      # api.ts
        │   └── App.tsx
        └── package.json
```

---

## How to Run

### Backend (Spring Boot)

```bash
cd backend/demo
./mvnw clean spring-boot:run
```

Backend runs on: `http://localhost:8080`

### Frontend (React + Vite)

```bash
cd frontend/frontend
npm install
npm run dev
```

Frontend runs on: `http://localhost:5173`

---

## API Endpoint

**POST** `/api/circle/calculate`

Request Body:
```json
{
  "g": 3.0,
  "f": 4.0,
  "c": 2.0
}
```

Response:
```json
{
  "radius": 4.7958,
  "error": null
}
```

---

## How It Works

1. User enters values for **g**, **f**, and **c** in the React frontend
2. Frontend sends a **POST request** to the Spring Boot backend
3. Backend calculates **√(g² + f² - c)** and returns the radius
4. Frontend displays the result

---

## Author

Eshara Ranaveera
