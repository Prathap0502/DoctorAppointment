import jwt from 'jsonwebtoken';

// User authentication middleware
const authUser = async (req, res, next) => {
    try {
        // Extract token from headers
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ success: false, message: 'Not Authorized. Please log in again.' });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user ID to the request body
        req.body.userId = decoded.id;

        next();
    } catch (error) {
        console.error('Auth Middleware Error:', error.message);
        res.status(401).json({ success: false, message: 'Invalid or expired token. Please log in again.' });
    }
};

export default authUser;
