import mongoose from 'mongoose';

function connectToDb() {
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log('Connected to DB');
        })
        .catch(err => {
            console.error('Error connecting to the database:', err.message);
        });
}

export default connectToDb;
