# RIVO9 Angular Brand Fetch Tester

A simple and beautiful Angular application to test RIVO9 Brand Fetch API endpoints.

## Features

- ✅ Test `/api/secure/rivofetch` endpoint with API Key authentication
- ✅ Test `/forward` endpoint with JWT authentication
- ✅ Beautiful gradient UI with responsive design
- ✅ Visual display of brand data (logos, colors, fonts)
- ✅ Social media options (LinkedIn, Facebook, YouTube, Instagram, X)
- ✅ Real-time error handling and response display

## Prerequisites

- Node.js (v18 or higher)
- Angular CLI
- RIVO9 Backend running on `http://localhost:8080`

## Installation

```bash
cd D:\RIVO9\rivo9-angular-test
npm install
```

## Configuration

Update the API base URL in `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:8080'  // Change if your backend runs on different port
};
```

## Running the Application

```bash
npm start
```

The application will be available at `http://localhost:4200`

## Usage

### Testing with API Key

1. Select the "🔑 API Key" tab
2. Enter a brand URL (e.g., `https://www.apple.com`)
3. Enter your API Key (format: `sk-...`)
4. Select social media options
5. Click "🚀 Test Endpoint"

### Testing with JWT Token

1. Select the "🎫 JWT Token" tab
2. Enter a brand URL
3. Paste your JWT token
4. Select social media options
5. Click "🚀 Test Endpoint"

## API Endpoints

### 1. `/api/secure/rivofetch` (API Key)
- **Method**: POST
- **Authentication**: API Key via `x-api-key` header
- **Request Body**:
```json
{
  "url": "https://www.apple.com",
  "linkedin": true,
  "facebook": false,
  "youtube": false,
  "instagram": false,
  "x": false
}
```

### 2. `/forward` (JWT)
- **Method**: POST
- **Authentication**: JWT via `Authorization: Bearer <token>` header
- **Request Body**: Same as above

## Response Format

```json
{
  "Logo": {
    "Logo": "https://...",
    "Symbol": "https://...",
    "Icon": "https://..."
  },
  "Colors": [
    { "hex": "#ffffff", "rgb": "rgb(255,255,255)", "name": "..." }
  ],
  "Fonts": [
    { "name": "Arial", "type": "heading", "stack": "..." }
  ],
  "Company": {
    "Name": "Apple",
    "Website": "https://www.apple.com",
    "SocialLinks": { ... }
  },
  "_performance": {
    "extractionTimeSeconds": 5.2,
    "timestamp": "2025-01-15T10:30:00Z"
  }
}
```

## Project Structure

```
rivo9-angular-test/
├── src/
│   ├── app/
│   │   ├── services/
│   │   │   └── brand.service.ts      # API service
│   │   ├── app.ts                     # Main component
│   │   ├── app.html                   # Template
│   │   ├── app.css                    # Component styles
│   │   └── app.config.ts              # App configuration
│   ├── environments/
│   │   └── environment.ts             # Environment config
│   └── styles.css                     # Global styles
└── README.md
```

## Troubleshooting

### CORS Issues
If you encounter CORS errors, ensure your backend allows requests from `http://localhost:4200`:

```java
@CrossOrigin(origins = "http://localhost:4200")
```

### Connection Refused
Make sure your RIVO9 backend is running on `http://localhost:8080`

### Invalid API Key/JWT
Verify your credentials are correct and not expired

## Technologies Used

- Angular 21
- TypeScript
- RxJS
- HttpClient
- Standalone Components
