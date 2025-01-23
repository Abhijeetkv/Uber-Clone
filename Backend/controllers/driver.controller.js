import driverService from "../services/driver.service.js";
import { validationResult } from "express-validator";
import driverModel from "../models/driver.model.js";
import blacklistTokenModel from "../models/blacklistToken.model.js";


const registerDriver = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    const isDriverAlreadyExist = await driverModel.findOne({ email});

    if (isDriverAlreadyExist) {
        return res.status(400).json({ message: 'Driver already exist' });
    }

    const hashedPassword = await driverModel.hashPassword(password);

    const driver = await driverService.createDriver({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        plate: vehicle.plate,
        color: vehicle.color,
        vehicleType: vehicle.vehicleType,
        capacity: vehicle.capacity,
    });

    const token = driver.generateAuthToken();

    res.status(201).json({ token, driver });
}

const loginDriver = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const driver = await driverModel.findOne({ email }).select('+password');
    

    if (!driver) {
        return res.status(404).json({ message: 'Invalid user and password' });
    }

    const isPasswordMatch = await driver.comparePassword(password);

    if (!isPasswordMatch) {
        return res.status(404).json({ message: 'Invalid user and password' });
    }

    const token = driver.generateAuthToken();

    res.status(200).json({ token, driver });

}


const getDriverProfile = async (req, res, next) => {
    res.status(200).json( { driver: req.driver});
}

const logoutDriver = async (req, res, next) => {
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    await blacklistTokenModel.create(token);

    res.clearCookie('token');

    res.status(200).json({ message: 'Logout successfully' });
}

export default {
     registerDriver,
    loginDriver,
    getDriverProfile,
    logoutDriver

    
    }