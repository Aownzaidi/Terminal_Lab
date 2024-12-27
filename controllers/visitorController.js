const Visitor = require('../models/Visitor');

exports.addVisitor = async (req, res) => {
    try {
        const { name, email } = req.body;
        const visitor = new Visitor({ name, email });
        await visitor.save();
        res.status(201).json(visitor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getVisitors = async (req, res) => {
    try {
        const visitors = await Visitor.find();
        res.status(200).json(visitors);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getVisitorActivity = async (req, res) => {
    try {
        const visitors = await Visitor.aggregate([
            { $unwind: "$visitedAttractions" },
            { $group: { _id: "$_id", name: { $first: "$name" }, count: { $sum: 1 } } }
        ]);
        res.status(200).json(visitors);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}; 