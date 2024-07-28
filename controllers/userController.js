const User = require('../models/userModel');

const registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.create({ email, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user && (await user.matchPassword(password))) {
            res.json(user);
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateUserDetails = async (req, res) => {
    const { email, age, height, weight, gender, bedSchedule, steps, heartPoints } = req.body;

    try {
        const user = await User.findOneAndUpdate(
            { email },
            { age, height, weight, gender, bedSchedule, steps, heartPoints },
            { new: true }
        );
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { registerUser, loginUser, updateUserDetails };
