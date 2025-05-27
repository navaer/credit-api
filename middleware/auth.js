// middleware/auth.js
export function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1]; // Expected format: "Bearer <token>"

  if (!token || token !== process.env.API_TOKEN) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  next();
}
