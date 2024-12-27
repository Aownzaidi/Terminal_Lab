# Tourism Management System

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Ensure MongoDB is running on your local machine.
4. Run `node index.js` to start the server on port 8000.

## API Endpoints

### Attractions
- `POST /attractions`: Add a new attraction.
- `GET /attractions`: Get all attractions.
- `GET /attractions/top-rated`: Get top 5 rated attractions.

### Visitors
- `POST /visitors`: Register a new visitor.
- `GET /visitors`: Get all visitors.
- `GET /visitors/activity`: Get visitor activity.

### Reviews
- `POST /reviews`: Add a new review.

## Validation Rules
- Entry fee cannot be negative.
- Visitor email must be unique and valid.
- No visitor can review the same attraction twice.
