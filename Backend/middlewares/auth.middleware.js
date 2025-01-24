import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import blacklistTokenModel from "../models/blacklistToken.model.js";
import driverModel from "../models/driver.model.js";


const authUser = async (req, res, next) => {
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[ 1 ];
        
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }


    const isBlacklisted = await blacklistTokenModel.findOne({ token: token });

    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id)

        req.user = user;

        return next();

    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    
}

const authDriver = async (req, res, next) => {
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[ 1 ];
    
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
        
    const isBlacklisted = await blacklistTokenModel.findOne({ token });

    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Decoded token:', decoded); // Add this line to log the decoded token
        const driver = await driverModel.findById(decoded._id);
        console.log('Driver:', driver); // Add this line to log the driver

        if (!driver) {
            return res.status(401).json({ message: 'Unauthorized: Driver not found' });
        }

        req.driver = driver;

        return next();
        
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}

export default {
    authUser,
    authDriver
}