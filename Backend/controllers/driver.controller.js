import driverService from "../services/driver.service.js";
import { validationResult } from "express-validator";
import driverModel from "../models/driver.model.js";


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


export default {
     registerDriver 

    
    }