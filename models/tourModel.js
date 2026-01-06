const mongoose = require('mongoose');
const slugify = require('slugify');
// const Review = require('./reviewModel');

//  const User = require('./../models/userModel');

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A tour must have a name'],
      unique: true,
      trim: 2,
      maxlength: [40, 'A tour name must have less or equal then 40 characters'],
      minlength: [10, 'A tour name must have more or equal then 10 characters'],
      // validate: [validator.isAlpha, 'Tour name must only contain characters'],
    },
    slug: String,
    duration: {
      type: Number,
      required: [true, 'A Tour must have a Duration'],
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'A tour must have a group size'],
    },
    difficulty: {
      type: String,
      required: [true, 'A tour must have a diffiulty'],
      enum: {
        values: ['easy', 'medium', 'difficult'],
        meassage: 'Difficulty is either: easy, medium, difficult',
      },
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'Ratings must be above 1.0 '],
      max: [5, 'Ratings must be below 5.0'],
      set: val => Math.round(val * 10 ) / 10 
    },
    ratingsQuantity: {
      type: Number, 
      required: 0,
    },
    price: {
      type: Number,
      required: [true, 'A tour must have a price'],
    },
    priceDiscount: {
      type: Number,
      validate: {
        validator: function (val) {
          // THIS ONLY POINTS TO CURRENT DOC ON NEW DOCUMENT CREATION
          return val < this.price;
        },
        message: 'Discount price ({VALUE}) should be below regular price',
      },
    },
    summary: {
      type: String,
      trim: 2,
      required: [true, 'A tour must have a summary'],
    },
    description: {
      type: String,
      require: [true, ' A tour must have a description '],
      trim: true,
    },
    imageCover: {
      type: String,
      requried: [true, 'A tour must have a cover image'],
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    startDates: [Date],
    secretTour: {
      type: Boolean,
      default: false,
    },
    startLocation: {
      // GEOJSON 
      type: {
        type: String,
        default: 'Point',
        enum: ['Point'],
      },
      coordinates: [Number],
      address: String,
      description: String,
    },
    locations: [
      {
        type: {
          type: String,
          default: 'Point',
          enum: ['Point'],
        },
        coordinates: [Number],
        address: String,
        description: String,
        day: Number, 
      },
    ],
    // child referening tour guides  by their IDs
    guides: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

tourSchema.index({ price: 1, raatingAverage:  -1})
tourSchema.index({ slug: 1 });
// virtual properties
tourSchema.virtual('durationWeeks').get(function () {
  return this.duration / 7;
});

//  VIRTUAL POPULATE. 
tourSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'tour',
  localField: '_id'
})

// Populating guides with their data 
tourSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'guides',
    select: '-__v -passwordChangedAt',
  });
  next();
});

// DOCUMENT MIDDLEWARE: runs before .save() and  .create()
// pre document middleware
tourSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// create a post middleware
tourSchema.post('save', function (doc, next) {
  console.log(doc);
  next();
});

// QUERY MIDDLEWARE

// tourSchema.pre('find', function (next) {
tourSchema.pre(/^find/, function (next) {
  this.find({ secretTour: { $ne: true } });

  this.start = Date.now();
  next();
});

tourSchema.post(/^find/, function (docs, next) {
  console.log(`Query took ${Date.now() - this.start} milliseconds!`);
  // console.log(docs);
  next();
});
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;

//  EMbedding Users as guides 
// tourSchema.pre('save', async function (next) {
//   const guidesPromises = this.guide.map(async (id) => await User.findById(id));
//   this.guide = await Promise.all(guidesPromises);
// next();
// });

// AGGREGATION MIDDLEWARE
// tourSchema.pre('aggregate', function (next) {
//   this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });
//   next();
// });
