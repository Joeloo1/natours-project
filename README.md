<div align="center">
  <img src="./public/img/logo-green.png" alt="Natours Logo" width="200" height="auto" />
</div>

# 🏔️ Natours

A comprehensive tour booking application built with Node.js, Express, MongoDB, and Stripe. This project demonstrates modern full-stack web development practices with a RESTful API backend, real-time Stripe payment integration, and a responsive frontend with Pug templating.

## 📋 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [API Documentation](#api-documentation)
- [Database Models](#database-models)
- [Security Features](#security-features)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### User Management

- **Authentication & Authorization**: JWT-based authentication with secure cookie storage
- **User Registration**: Email verification with welcome emails
- **Password Management**: Secure password reset functionality with email confirmation
- **User Profiles**: Update user information and profile photos
- **Role-Based Access**: Admin, lead guide, guide, and user roles

### Tour Management

- **Browse Tours**: View all available tours with detailed information
- **Tour Details**: Explore tour itineraries, maps, reviews, and ratings
- **Search & Filter**: Filter tours by difficulty, price, rating, and duration
- **Image Gallery**: Professional tour images and covers

### Reviews & Ratings

- **User Reviews**: Leave detailed reviews and ratings for completed tours
- **Average Ratings**: Automatic calculation of tour ratings
- **Review Management**: Edit and delete your own reviews

### Booking System

- **Stripe Integration**: Secure payment processing with Stripe
- **Checkout Sessions**: Seamless booking experience
- **Booking History**: Track all your bookings and tour reservations
- **Automatic Booking Creation**: Creates bookings upon successful payment

### Email Services

- **Welcome Emails**: Sent upon user registration
- **Password Reset Emails**: Secure password recovery links
- **Mailtrap (Dev)**: Testing email functionality in development
- **SendGrid (Production)**: Reliable email delivery in production

### Security & Performance

- **Rate Limiting**: Prevent API abuse with request throttling
- **Data Sanitization**: Protection against NoSQL injection and XSS attacks
- **Helmet Security**: HTTP header security with CSP and XSS protection
- **HPP Protection**: Parameter pollution prevention
- **CORS & CSP**: Content Security Policy for Stripe and external resources

## 🛠 Technology Stack

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Frontend

- **Pug** - Template engine
- **HTML/CSS/JavaScript** - Frontend markup and styling
- **Mapbox** - Interactive maps for tour locations
- **Axios** - HTTP client for API calls

### Authentication & Security

- **JWT (JsonWebToken)** - Authentication tokens
- **bcryptjs** - Password hashing
- **express-rate-limit** - Rate limiting
- **helmet** - Security headers
- **express-mongo-sanitize** - NoSQL injection prevention
- **xss-clean** - XSS prevention
- **hpp** - Parameter pollution prevention

### Payment & Email

- **Stripe** - Payment processing
- **Nodemailer** - Email sending
- **SendGrid** - Production email service
- **Mailtrap** - Development email testing

### Image Processing

- **Sharp** - Image resizing and optimization
- **Multer** - File upload handling

### Development Tools

- **Nodemon** - Auto-reload during development
- **Parcel** - JavaScript bundler for frontend
- **ESLint** - Code quality
- **Prettier** - Code formatting

## 📁 Project Structure

```
natours-project/
├── controllers/
│   ├── authController.js       # Authentication logic
│   ├── tourController.js       # Tour management
│   ├── userController.js       # User management
│   ├── reviewController.js     # Review operations
│   ├── bookingController.js    # Booking & Stripe integration
│   ├── errorController.js      # Global error handling
│   ├── viewsController.js      # View rendering
│   └── handlerFactory.js       # Reusable CRUD operations
├── models/
│   ├── tourModel.js            # Tour schema
│   ├── userModel.js            # User schema
│   ├── reviewModel.js          # Review schema
│   └── bookingModel.js         # Booking schema
├── routes/
│   ├── tourRoutes.js           # Tour endpoints
│   ├── userRoutes.js           # User endpoints
│   ├── reviewRoutes.js         # Review endpoints
│   ├── bookingRoutes.js        # Booking endpoints
│   └── viewRoutes.js           # Frontend routes
├── views/
│   ├── base.pug                # Base template
│   ├── login.pug               # Login page
│   ├── account.pug             # User account page
│   ├── overview.pug            # Tours listing page
│   ├── tour.pug                # Tour details page
│   ├── error.pug               # Error page
│   ├── _header.pug             # Header component
│   ├── _footer.pug             # Footer component
│   ├── _reviewCard.pug         # Review card component
│   └── email/                  # Email templates
├── public/
│   ├── js/
│   │   ├── index.js            # Main bundled file
│   │   ├── login.js            # Login functionality
│   │   ├── updateSettings.js   # Profile update
│   │   ├── mapbox.js           # Map integration
│   │   ├── stripe.js           # Stripe payment
│   │   ├── axios.js            # Axios setup
│   │   └── alerts.js           # Alert notifications
│   ├── css/
│   │   └── style.css           # Styling
│   └── img/                    # Images
├── utils/
│   ├── apiFeatures.js          # Query filtering, sorting, pagination
│   ├── appError.js             # Custom error class
│   ├── catchAsync.js           # Async error wrapper
│   └── email.js                # Email sending utility
├── dev-data/
│   └── data/
│       ├── import-dev-data.js  # Data import script
│       ├── tours.json          # Sample tours data
│       ├── users.json          # Sample users data
│       └── reviews.json        # Sample reviews data
├── app.js                      # Express app setup
├── server.js                   # Server entry point
├── package.json                # Dependencies
├── .env                        # Environment variables
├── .gitignore                  # Git ignore rules
└── README.md                   # This file
```

## 🚀 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account
- Stripe account
- Mailtrap account (development)

### Setup Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd natours-project
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create `.env` file**

   ```bash
   cp .env.example .env
   ```

4. **Configure environment variables** (see [Environment Variables](#environment-variables) section)

5. **Import sample data (optional)**

   ```bash
   node dev-data/data/import-dev-data.js
   ```

6. **Start the development server**

   ```bash
   npm start
   ```

7. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🔐 Environment Variables

1. **Copy the example file**

   ```bash
   cp .env.example .env
   ```

2. **Update the `.env` file** with your actual credentials:
   - MongoDB Atlas connection string
   - Stripe API keys (test and production)
   - Mailtrap credentials (development) or SendGrid (production)
   - JWT secret key
   - Email sender address

See `.env.example` for all required variables.

### Getting API Keys

- **MongoDB Atlas**: https://www.mongodb.com/cloud/atlas
- **Stripe**: https://dashboard.stripe.com
- **Mailtrap**: https://mailtrap.io
- **SendGrid**: https://sendgrid.com

## 📜 Available Scripts

```bash
# Start development server with auto-reload
npm start

# Start production server
npm run start:prod

# Debug with Node debugger
npm run debug

# Watch and bundle frontend JavaScript with Parcel
npm run watch:js

# Build frontend bundle
npm run build:js
```

## 🔌 API Documentation

### Authentication Endpoints

- `POST /api/v1/users/signup` - Register new user
- `POST /api/v1/users/login` - Login user
- `GET /api/v1/users/logout` - Logout user
- `POST /api/v1/users/forgotPassword` - Request password reset
- `PATCH /api/v1/users/resetPassword/:token` - Reset password with token

### Tour Endpoints

- `GET /api/v1/tours` - Get all tours (with filtering, sorting, pagination)
- `GET /api/v1/tours/:id` - Get tour details
- `POST /api/v1/tours` - Create tour (admin only)
- `PATCH /api/v1/tours/:id` - Update tour (admin only)
- `DELETE /api/v1/tours/:id` - Delete tour (admin only)
- `GET /api/v1/tours/monthly-plan/:year` - Get tour statistics (admin only)

### Review Endpoints

- `GET /api/v1/reviews` - Get all reviews
- `GET /api/v1/tours/:tourId/reviews` - Get reviews for a tour
- `POST /api/v1/reviews` - Create review (authenticated users)
- `PATCH /api/v1/reviews/:id` - Update review
- `DELETE /api/v1/reviews/:id` - Delete review

### Booking Endpoints

- `GET /api/v1/bookings/checkout-session/:tourId` - Create Stripe checkout session
- `GET /api/v1/bookings` - Get user bookings (authenticated)
- `POST /api/v1/bookings` - Create booking (admin only)
- `GET /api/v1/bookings/:id` - Get booking details (admin only)

### User Endpoints

- `GET /api/v1/users/me` - Get current user profile
- `PATCH /api/v1/users/updateMe` - Update profile
- `DELETE /api/v1/users/deleteMe` - Delete account
- `PATCH /api/v1/users/updateMyPassword` - Change password
- `GET /api/v1/users` - Get all users (admin only)
- `PATCH /api/v1/users/:id` - Update user (admin only)
- `DELETE /api/v1/users/:id` - Delete user (admin only)

## 📊 Database Models

### User Model

```javascript
{
  name: String,
  email: String (unique),
  photo: String,
  password: String (hashed),
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: Boolean,
  role: String (user, guide, lead-guide, admin)
}
```

### Tour Model

```javascript
{
  name: String,
  slug: String,
  duration: Number,
  maxGroupSize: Number,
  difficulty: String (easy, medium, difficult),
  ratingsAverage: Number,
  ratingsQuantity: Number,
  price: Number,
  priceDiscount: Number,
  summary: String,
  description: String,
  imageCover: String,
  images: [String],
  createdAt: Date,
  startDates: [Date],
  startLocation: {
    type: Point,
    coordinates: [Number]
  },
  locations: [{
    type: Point,
    coordinates: [Number]
  }],
  guides: [ObjectId]
}
```

### Review Model

```javascript
{
  review: String,
  rating: Number (1-5),
  createdAt: Date,
  tour: ObjectId,
  user: ObjectId
}
```

### Booking Model

```javascript
{
  tour: ObjectId,
  user: ObjectId,
  price: Number,
  createdAt: Date,
  paid: Boolean
}
```

## 🔒 Security Features

1. **Authentication**
   - JWT-based authentication with secure tokens
   - Password hashing with bcryptjs
   - Session management with secure cookies

2. **Authorization**
   - Role-based access control (user, guide, lead-guide, admin)
   - Resource ownership verification
   - Protected routes and endpoints

3. **Data Protection**
   - NoSQL injection prevention with express-mongo-sanitize
   - XSS attack prevention with xss-clean
   - Parameter pollution prevention with hpp
   - Helmet security headers

4. **Rate Limiting**
   - API rate limiting to prevent abuse
   - 100 requests per hour per IP by default

5. **HTTPS & Cookies**
   - Secure cookies in production
   - HttpOnly flag to prevent XSS token theft
   - CORS configuration for Stripe and external services

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the package.json file for details.

## 🎓 Learning Resources

This project is from the **Complete Node.js Bootcamp by Jonas Schmedtmann** on Udemy. It demonstrates:

- RESTful API design
- Database modeling with MongoDB & Mongoose
- Authentication and authorization
- Email services integration
- Payment processing with Stripe
- Frontend rendering with Pug templates
- Modern JavaScript (ES6+)
- Error handling and validation
- Security best practices

## 📞 Support

For issues, questions, or suggestions, please open an issue on the repository or contact the project maintainer.

---

**Happy Coding! 🚀**
