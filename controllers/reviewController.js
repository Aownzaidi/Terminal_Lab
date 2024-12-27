const Review = require('../models/Review');
const Attraction = require('../models/Attraction');
const Visitor = require('../models/Visitor');

exports.addReview = async (req, res) => {
    try {
        const { attractionId, visitorId, score, comment } = req.body;
        const visitor = await Visitor.findById(visitorId);
        if (!visitor.visitedAttractions.includes(attractionId)) {
            return res.status(400).json({ error: 'Visitor has not visited this attraction.' });
        }
        const review = new Review({ attraction: attractionId, visitor: visitorId, score, comment });
        await review.save();

        // Update attraction rating
        const reviews = await Review.find({ attraction: attractionId });
        const averageRating = reviews.reduce((acc, review) => acc + review.score, 0) / reviews.length;
        await Attraction.findByIdAndUpdate(attractionId, { rating: averageRating });

        res.status(201).json(review);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Implement other controller methods if needed 