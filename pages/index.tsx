I'm going to set up the Airbnb clone project according to the specifications. Let me walk through each step:

Step 1: Create the Next.js App
npx create-next-app@latest alx-listing-app --typescript --tailwind --eslint --no-app-router --no-src-dir

Step 2: Configure Tailwind CSS
tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

styles/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

Step 3: Create Folder Structure
components/common/Card.tsx
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  image, 
  price, 
  location 
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="font-bold text-lg">${price}</span>
          <span className="text-gray-600 text-sm">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;

components/common/Button.tsx
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  disabled = false,
  type = 'button'
}) => {
  const baseStyles = 'px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors';
  
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white focus:ring-gray-500',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-50 focus:ring-blue-500'
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

interfaces/index.ts
export interface CardProps {
  title: string;
  description: string;
  image: string;
  price: number;
  location: string;
  rating?: number;
  onBookNow?: () => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  images: string[];
  amenities: string[];
  host: {
    name: string;
    avatar: string;
  };
}

constants/index.ts
export const API_URLS = {
  LISTINGS: '/api/listings',
  USERS: '/api/users',
  BOOKINGS: '/api/bookings',
};

export const APP_CONFIG = {
  APP_NAME: 'ALX Listing App',
  VERSION: '1.0.0',
  DEFAULT_CURRENCY: 'USD',
};

export const UI_TEXT = {
  BOOK_NOW: 'Book Now',
  VIEW_DETAILS: 'View Details',
  LOADING: 'Loading...',
  ERROR: 'Something went wrong',
  NO_LISTINGS: 'No listings available',
};

Step 4: Handle Assets
Create the directory structure:
mkdir -p public/assets/images public/assets/icons

You can add placeholder images to:

public/assets/images/ - for property images

public/assets/icons/ - for SVG icons

Step 5: Create README.md
README.md
# ALX Listing App

## Project Overview
ALX Listing App is an Airbnb clone project built with Next.js, TypeScript, and Tailwind CSS. The application features property listing pages with reusable components and a clean, maintainable codebase.

## Project Structure

alx-listing-app/
├── components/
│ └── common/
│ ├── Button.tsx
│ └── Card.tsx
├── interfaces/
│ └── index.ts
├── constants/
│ └── index.ts
├── pages/
│ ├── api/
│ ├── _app.tsx
│ ├── _document.tsx
│ └── index.tsx
├── public/
│ └── assets/
│ ├── images/
│ └── icons/
├── styles/
│ └── globals.css
└── tailwind.config.js


### Directory Purpose

- **components/common**: Reusable UI components (Button, Card)
- **interfaces**: TypeScript type definitions
- **constants**: Application constants and configuration
- **public/assets**: Static assets (images, icons)

## Local Development

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation & Running

1. Install dependencies:
```bash
npm install

Run the development server:
npm run dev

Open http://localhost:3000 in your browser

Available Scripts
npm run dev - Start development server

npm run build - Build for production

npm run start - Start production server

npm run lint - Run ESLint

Technologies Used
Next.js with Pages Router

TypeScript

Tailwind CSS

ESLint


## Step 6: Run and Verify

```bash
cd alx-listing-app
npm run dev

Visit http://localhost:3000 to verify the application is running correctly.

Additional Setup
You might also want to update the main page to test your components:

pages/index.tsx
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
  const sampleListing = {
    title: "Beautiful Apartment",
    description: "A lovely apartment in the city center",
    image: "/assets/images/placeholder.jpg",
    price: 120,
    location: "New York, NY"
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">ALX Listing App</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card {...sampleListing} />
      </div>
      <div className="mt-6 space-x-4">
        <Button variant="primary">Book Now</Button>
        <Button variant="outline">View Details</Button>
      </div>
    </div>
  );
}

This setup provides a solid foundation for your Airbnb clone with proper TypeScript integration, reusable components, and a well-organized project structure.
