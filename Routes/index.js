import express from 'express';
import { getUsers, Login, Register } from '../controllers/Users.js';
import { verifyToken } from '../middleware/VerifyToken.js';
import { refreshToken } from '../controllers/RefreshToken.js';

const Router = express.Router();

Router.get('/users', getUsers, verifyToken);
Router.post('/users', Register);
Router.post('/login', Login);
Router.get('/token', refreshToken);

export default Router;