# About the project

Customer Collection

A responsive and user-friendly web application for managing and viewing a collection of beers. This application allows users to browse beers, filter and sort them by various criteria, add new beers to the collection and view detailed information about each beer, also to add personal feedback.

## Tech stack

- Frontend: **React** with **TypeScript**
- State Management: React Context API for managing application state and React Query (@tanstack/react-query) for API data fetching
- Routing: React Router
- Styling: Custom CSS

## Installation

Install dependencies:

```
npm i
```

Now, you can start a local web server by running:

```
npm start
```

## Folder Structure

```js
src/
├── api/
│   └── index.ts                        # API calls (e.g. fetch beers, addNewBeer)
├── assets/                             # Static assets like images and icons
├── components/                         # Reusable UI components
│   ├── Collection/
│   │   ├── Collection.module.css       # Styles for Collection component
│   │   ├── Collection.tsx              # Displays the beer collection
│   │   └── index.ts                    # Barrel file for Collection
│   ├── ControlPanel/
│   │   ├── ControlPanel.module.css     # Styles for ControlPanel component
│   │   ├── ControlPanel.tsx            # Filter, search and sort panel
│   │   └── index.ts                    # Barrel file for ControlPanel
│   ├── ErrorComponents/
│   │   ├── ErrorBoundary.tsx           # Component for boundaring errors
│   │   ├── ErrorMessage.module.css     # Styles for ErrorMessage component
│   │   ├── ErrorMessage.tsx            # Component to display error messages
│   │   └── index.ts                    # Barrel file for ErrorComponents
│   ├── FilterByRating/
│   │   ├── FilterByRating.module.css   # Styles for FilterByRating component
│   │   ├── FilterByRating.tsx          # Component for filtering by rating
│   │   └── index.ts                    # Barrel file for FilterByRating
│   ├── FormInput/
│   │   ├── FormInput.module.css        # Styles for FormInput component
│   │   ├── FormInput.tsx               # Reusable input component for forms
│   │   └── index.ts                    # Barrel file for FormInput
│   ├── Header/
│   │   ├── Header.module.css           # Styles for Header component
│   │   ├── Header.tsx                  # Application header
│   │   └── index.ts                    # Barrel file for Header
│   ├── Loading/
│   │   └── index.ts                    # Barrel file for Header
│   │   ├── Loading.module.css          # Styles for Loading component
│   │   ├── Loading.tsx                 # Component to display a loading spiner
│   ├── RatingInput/
│   │   └── index.ts                    # Barrel file for RatingInput
│   │   ├── RatingInput.module.css      # Styles for RatingInput component
│   │   ├── RatingInput.tsx             # Component to select a rating value
│   ├── SaveButton/
│   │   └── index.ts                    # Barrel file for SaveButton
│   │   ├── SaveButton.module.css       # Styles for SaveButton component
│   │   ├── SaveButton.tsx              # Button to save the beer collection
│   ├── SortBy/
│   │   └── index.ts                    # Barrel file for SortBy
│   │   ├── SortBy.module.css           # Styles for SortBy component
│   │   ├── SortBy.tsx                  # Sorts beer collection by name, rating or price
├── hooks/                              # Custom React hooks
│   └── index.ts                        # Barrel file for exporting hooks
│   ├── useAddBeer.ts                   # Hook for adding a new beer
│   ├── useBeerCollection.ts            # Hook for fetching beer data
│   ├── useFilteredBeers.ts             # Hook for filtering and sorting beers
├── pages/                              # Application pages
│   ├── AddItem/
│   │   ├── AddItem.module.css          # Styles for the AddItem component
│   │   ├── AddItem.tsx                 # Form to add new beers
│   │   └── index.ts                    # Barrel file for AddItem
│   ├── DetailPage/
│   │   ├── DetailPage.module.css       # Styles for DetailPage component
│   │   ├── DetailPage.tsx              # Beer detail page
│   │   └── index.ts                    # Barrel file for DetailPage
│   ├── Notfound.module/
│   │   ├── Notfound.module.css         # Styles for Notfound.module component
│   │   ├── Notfound.tsx                # Not found page
│   │   └── index.ts                    # Barrel file for Notfound
│   ├── Overview/
│   │   └── index.ts                    # Barrel file for Overview
│   │   ├── Overview.module.css         # Styles for Overview page
│   │   ├── Overview.tsx                # Main beer collection overview
├── store/                              # Global state management
│   └── beer-collection-provider.ts     # Context API and reducer for beer collection state
├── utils/                              # Utility functions and constants
│   ├── constants.ts                    # Defines constant values
│   ├── handleManualSave.ts             # Handles manual saving
│   ├── index.ts                        # Barrel file for utils
│   └── validation.ts                   # Validation functions for inputs
├── App.tsx                             # Root component of the app
├── global.css                          # Global styles
├── main.tsx                            # Application entry point
└── router.tsx                          # Defines application routing
└── types.ts                            # Defines types
```

## Usage

### Filtering and Sorting

Use the Search field to find beers by name.
Use the Filter by Rating dropdown to show beers with specific ratings.
Use the Sort by dropdown to arrange beers by name, price or rating.

### Adding a New Beer

Click the "Add New Beer" button in the Control Panel.
Fill out the form with:

- Beer name
- Image URL
- Price
- Rating
  Click "Save" to add the beer to the collection.

### Viewing Details

Click on any beer in the collection to view its details on the Detail Page.

### Add feedback

On the Detail Page, you can add your personal feedback(s) about the beer.

## Development Approach

### TypeScript Integration:

I used TypeScript to improve the quality of my code by adding strict typing, which helps catch bugs early and makes the code more reliable.

### State Management:

I used @tanstack/react-query for handling API calls. It made fetching, caching, and synchronizing data super efficient.
For managing user feedback, I went with React Context API. This lets feedback persist and show up again if you revisit the same beer's detail page. It’s a simple way to give a better user experience.

### Semantic HTML:

I tried to keep my HTML as semantic as possible to make the code more maintainable and accessible. I focused on using the right tags for structure and added meaningful ARIA roles where needed.

### Custom CSS:

I decided to write pure CSS instead of using a library or framework. I wanted to show that I can style components from scratch. Sure, using a library is easier, but this was about showing I can handle the basics and do it cleanly.

### Save Entries Feature:

Since it wasn’t super clear what "save entries to the device" meant, I went literal with it. I added a button that lets users download the beer collection as a JSON file. This might not have been the exact intention, but it’s a simple and flexible solution.

### Comments and Documentation:

I tried to add as many comments and as much documentation as possible. The goal was to make the code easy to read and understand.
