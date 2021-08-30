const jwt = require('jsonwebtoken')
const User = require('../models/user.models')

const auth = async (req, res, next) => {
    
    try {
        const token = req.header('Authorization').replace('Bearer ', '') // Check for Authorization header
        const decoded = jwt.verify(token, process.env.JWT_SECRET) // Validate header
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token }) // Find associated user

        if (!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        next()

    } catch (e) {
        res
        .status(401)
        .send({ error: 'Please authenticate.' })
    }
    
}

module.exports = auth