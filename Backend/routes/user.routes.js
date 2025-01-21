import express from 'express';
import { body } from 'express-validator';
import userController from '../controllers/user.controller.js';

const router = express.Router();

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min : 6}).withMessage('Password must be at least 6 characters long'),
],
 userController.registerUser
);

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min : 6}).withMessage('Password must be at least 6 characters long'),
],
 userController.loginUser
  
)



export default router;
