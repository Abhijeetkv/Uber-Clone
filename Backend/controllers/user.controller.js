import { validationResult } from 'express-validator';
import userModel from '../models/user.model.js';
import userService from '../services/user.service.js';

const registerUser = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;

    const isUserAlready = await userModel.findOne({ email });

    if (isUserAlready) {
        return res.status(400).json({ message: 'User already exist' });
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });

    // console.log(user);
    

    const token = user.generateAuthToken();

    res.status(201).json({ token, user });


}

export default { registerUser };