import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const driverSchema = mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [ 3, 'First name must be at least 3 characters long' ],
        },
        lastname: {
            type: String,
            minlength: [ 3, 'Last name must be at least 3 characters long' ],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email'],
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'Inactive',
    },

    vehicle: {
        color: {
            type: String,
            required: true,
        },
        plate: {
            type: String,
            required: true,
        },
        capacity: {
            type: Number,
            required: true,
            minH: [1, 'Capacity must be at least 1'],
        },
        vehicleType: {
            type: String,
            enum: ['bike', 'car', 'auto'],
            required: true,
        },
     },

     location: {
            lat: {
                type: Number,
            },
            lng: {
                type: Number,
            },

        }
})

const driverModel = mongoose.model('driverModel', driverSchema);

export default driverModel;
