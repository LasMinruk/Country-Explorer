[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/mNaxAqQD)

# Country Explorer

Country Explorer is a modern, responsive React + Vite application that enables users to explore countries around the globe using the [REST Countries API](https://restcountries.com/). The application features interactive charts, country comparison, filtering, search capabilities, and a beautiful UI, all designed to provide a smooth user experience.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Build Process](#build-process)
- [Usage Instructions](#usage-instructions)
- [API Integration Report](#api-integration-report)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- Browse all countries with pagination
- Real-time search by country name with debouncing
- Filter by region (Africa, Asia, Americas, Europe, Oceania)
- Interactive country comparison with charts
- Compare population and area statistics
- Quick selection of popular countries
- Fully responsive layout with mobile-first design
- Country detail page with Google Maps integration
- Automatic scroll to top on navigation
- Loading spinners during data fetch
- Custom 404 Not Found page
- Built with Tailwind CSS & Framer Motion
- Comprehensive test coverage
- **Enhanced accessibility and focus styles for interactive elements**
- **Smoother animations and transitions for a modern feel**

### Recent Improvements
- Added interactive country comparison feature
- Implemented population and area comparison charts
- Enhanced UI with gradient backgrounds and modern design
- Improved search functionality with country codes
- Added quick selection for popular countries
- Optimized chart rendering and data formatting

## Tech Stack

### Frontend
- React 18.2.0
- Vite 5.1.6
- Tailwind CSS 3.4.1
- Framer Motion 12.7.4
- React Router DOM 6.22.1
- Chart.js 4.4.1
- React Chart.js 5.2.0

### Development Tools
- Jest 29.7.0
- ESLint 8.57.0
- PostCSS 8.4.35
- Babel
- Testing Library

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm (v7 or higher)
- Git

## Setup Instructions

### Frontend Setup
1. Open a new terminal and navigate to the project directory:
```bash
# Clone the repository (if not already done)
git clone https://github.com/SE1020-IT2070-OOP-DSA-25/af-2-LasMinruk.git
cd af-2-LasMinruk

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

## Build Process

### Frontend Build
```bash


# Run tests
npm run test

```

The build process utilizes:
- Vite's optimized production build system
- Code splitting
- Tree shaking
- Minification
- Asset optimization
- Source maps for debugging

## Usage Instructions

### Browsing Countries
- Use the search bar to find countries by name or country code
- Filter countries by region using the dropdown
- Click on a country card to view detailed information
- Use pagination controls to navigate through the country list

### Country Comparison
- Select multiple countries to compare their statistics
- View population and area comparisons in interactive charts
- Use the "Compare Popular" button for quick comparison of major countries
- Clear selections using the "Clear All" button
- Search and filter countries while maintaining selections

### Country Details
- View comprehensive information about each country
- Click the map link to open the country's location in Google Maps
- Use the back button to return to the main view
- View detailed country statistics and information

## API Integration Report

### REST Countries API (v3.1)
The application uses the REST Countries API to fetch country data. Here are all the endpoints used:

#### Base Endpoints
- `GET /v3.1/all` - Fetch all countries with complete data
- `GET /v3.1/name/{name}` - Search countries by name (supports partial matches)
- `GET /v3.1/name/${encodeURIComponent(search.trim())}` - Search countries with URL-encoded query
- `GET /v3.1/region/{region}` - Filter countries by region
- `GET /v3.1/currency/{currency}` - Filter countries by currency code (e.g., USD, EUR)
- `GET /v3.1/lang/{language}` - Filter countries by language code (e.g., eng, spa, fra)
- `GET /v3.1/alpha/{code}` - Get detailed information for a specific country using its code
- `GET /v3.1/alpha?codes={code1},{code2}` - Get multiple countries by their codes

#### Response Data Structure
The API returns detailed country information including:
```json
{
  "name": {
    "common": "Country Name",
    "official": "Official Country Name"
  },
  "cca3": "Country Code",
  "population": 123456789,
  "area": 123456,
  "region": "Region Name",
  "subregion": "Subregion Name",
  "capital": ["Capital City"],
  "flags": {
    "svg": "flag-url",
    "alt": "flag description"
  },
  "languages": {
    "eng": "English"
  },
  "currencies": {
    "USD": {
      "name": "US Dollar",
      "symbol": "$"
    }
  },
  "latlng": [latitude, longitude]
}
```

#### Usage Examples

1. **Fetching All Countries**
```javascript
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Process country data
  });
```

2. **Searching Countries by Name with URL Encoding**
```javascript
const searchCountries = (searchTerm) => {
  const encodedSearch = encodeURIComponent(searchTerm.trim());
  fetch(`https://restcountries.com/v3.1/name/${encodedSearch}`)
    .then(response => response.json())
    .then(data => {
      // Process search results
    })
    .catch(error => {
      // Handle errors
      console.error('Error searching countries:', error);
    });
};
```

3. **Filtering by Currency**
```javascript
const filterByCurrency = (currencyCode) => {
  fetch(`https://restcountries.com/v3.1/currency/${currencyCode}`)
    .then(response => response.json())
    .then(data => {
      // Process countries using the specified currency
      // Example: filterByCurrency('EUR') for Euro countries
    })
    .catch(error => {
      console.error('Error filtering by currency:', error);
    });
};
```

4. **Filtering by Language**
```javascript
const filterByLanguage = (languageCode) => {
  fetch(`https://restcountries.com/v3.1/lang/${languageCode}`)
    .then(response => response.json())
    .then(data => {
      // Process countries using the specified language
      // Example: filterByLanguage('eng') for English-speaking countries
    })
    .catch(error => {
      console.error('Error filtering by language:', error);
    });
};
```

5. **Filtering by Region**
```javascript
fetch('https://restcountries.com/v3.1/region/europe')
  .then(response => response.json())
  .then(data => {
    // Process region results
  });
```

4. **Getting Country Details**
```javascript
fetch('https://restcountries.com/v3.1/alpha/USA')
  .then(response => response.json())
  .then(data => {
    // Process country details
  });
```

5. **Getting Multiple Countries**
```javascript
fetch('https://restcountries.com/v3.1/alpha?codes=USA,CAN,MEX')
  .then(response => response.json())
  .then(data => {
    // Process multiple countries
  });
```

### API Integration Challenges & Solutions



1. **Data Consistency**
   - Challenge: Some country data fields were missing or inconsistent
   - Solution: Added fallback values and data validation
   - Implementation: Created data normalization utilities
   ```javascript
   const normalizeCountryData = (country) => ({
     name: country.name?.common || 'Unknown Country',
     population: country.population || 0,
     area: country.area || 0,
     region: country.region || 'Unknown Region',
     capital: country.capital?.[0] || 'Unknown',
     flag: country.flags?.svg || '',
     code: country.cca3 || ''
   });
   ```

2. **Performance Optimization**
   - Challenge: Large dataset could impact initial load time
   - Solution: Implemented pagination and lazy loading
   - Implementation: Used React Window for virtualized list rendering
   ```javascript
   import { FixedSizeList } from 'react-window';
   
   <FixedSizeList
     height={600}
     itemCount={countries.length}
     itemSize={200}
     width="100%"
   >
     {({ index, style }) => (
       <CountryCard country={countries[index]} style={style} />
     )}
   </FixedSizeList>
   ```

3. **Error Handling**
   - Challenge: Network errors and API failures needed graceful handling
   - Solution: Implemented comprehensive error boundaries and fallback UI
   - Implementation: Created custom error components
   ```javascript
   const ErrorFallback = ({ error, resetErrorBoundary }) => (
     <div role="alert" className="error-container">
       <h2>Something went wrong:</h2>
       <pre>{error.message}</pre>
       <button onClick={resetErrorBoundary}>Try again</button>
     </div>
   );
   ```

4. **Chart Data Processing**
   - Challenge: Large numbers needed proper formatting for charts
   - Solution: Implemented number formatting with Intl.NumberFormat
   - Implementation: Added compact notation for better readability
   ```javascript
   const formatNumber = (number) => {
     return new Intl.NumberFormat('en-US', {
       notation: 'compact',
       compactDisplay: 'short'
     }).format(number);
   };
   ```

### API Security Considerations
- Implemented proper error handling for API calls
- Added input validation for search queries
- Used environment variables for configuration
- Implemented proper CORS handling
- Added request timeout handling
- Implemented retry logic for failed requests

### Best Practices Implemented
1. **Error Handling**
   - Proper error boundaries
   - User-friendly error messages
   - Fallback UI components
   - Network error handling

2. **Performance**
   - Client-side caching
   - Debounced search
   - Lazy loading
   - Virtualized lists

3. **Data Management**
   - Data normalization
   - Fallback values
   - Type checking
   - Data validation

4. **User Experience**
   - Loading states
   - Error states
   - Empty states
   - Smooth transitions

## Testing

### Frontend Testing
```bash
# Run frontend tests
npm run test


```

The frontend tests cover:
- Component rendering
- User interactions
- State management
- API integration
- Error handling
- Responsive design
- Chart functionality
- Country comparison features

## Deployment

> ** Live Deployment**
> 
> The application is deployed on Vercel, a free hosting platform. You can access the live version at:
> 
> - **Frontend**: [https://country-explorer-delta-ten.vercel.app/](https://country-explorer-delta-ten.vercel.app/)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with dedication by Lasiru
