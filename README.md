# Page Pulse

Page Pulse is a simple full-stack web application that audits a webpage and returns a summary of useful information about it. The user enters a website URL, and the application fetches the page, analyzes its HTML, and displays key details such as the page title, meta description, H1 count, images missing alt text, response time, and approximate word count.

This project was built as part of the Digital Heroes Software Development Internship Task.

---

## Features

- Audit any valid website URL
- Display HTTP status code
- Measure page response time
- Extract the page title
- Extract the meta description
- Count H1 tags
- Count images without alt text
- Calculate approximate word count
- Handle invalid URLs, HTTP errors, timeouts, and non-HTML pages gracefully
- Responsive and simple React interface

---

## Tech Stack

### Frontend
- React
- Axios
- CSS

### Backend
- Node.js
- Express.js
- Axios
- Cheerio

### Testing
- Jest

---

## Project Structure

```
PagePulse
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── services
│   ├── tests
│   ├── utils
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── public
│   ├── src
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone <repository-url>
cd PagePulse
```

---

### Backend

```bash
cd backend
npm install
npm start
```

The backend runs on:

```
http://localhost:5000
```

---

### Frontend

Open another terminal.

```bash
cd frontend
npm install
npm start
```

The frontend runs on:

```
http://localhost:3000
```

---

## API

### POST `/api/audit`

Request

```json
{
  "url": "https://example.com"
}
```

Successful Response

```json
{
  "success": true,
  "data": {
    "status": 200,
    "responseTime": 245,
    "title": "Example Domain",
    "metaDescription": "Not Found",
    "h1Count": 1,
    "imagesMissingAlt": 0,
    "wordCount": 17
  }
}
```

Example Error Response

```json
{
  "success": false,
  "message": "Invalid URL"
}
```

---

## Running Tests

From the backend folder:

```bash
npm test
```

Current test coverage includes:

- Parsing valid HTML
- Missing meta description
- Counting images without alt attributes

---

## Design Decisions

### 1. Layered Backend Structure

The backend is separated into routes, controllers, services, and utilities. This keeps each file focused on a single responsibility and makes the project easier to maintain.

### 2. Separate HTML Parsing Logic

The HTML parsing logic was moved into a dedicated utility (`parseHtml.js`). This made it easier to test independently without making network requests.

### 3. Graceful Error Handling

The application validates URLs and handles invalid input, HTTP errors, timeouts, network failures, and non-HTML responses with meaningful error messages instead of crashing.

---

## Future Improvements

Given more time, I would like to:

- Export reports as PDF
- Support auditing multiple URLs at once
- Display SEO suggestions based on the audit
- Add caching to improve performance
- Improve the UI with charts and visual indicators

---

## AI Usage

AI tools were used during development to clarify concepts, review code, improve error handling, and refine documentation. All implementation decisions, debugging, testing, and the final project structure were reviewed, understood, and integrated by me.

---

