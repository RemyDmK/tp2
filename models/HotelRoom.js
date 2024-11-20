const mongoose = require('mongoose');


// Connect to MongoDB
beforeAll(async () => {
    jest.setTimeout(30000);  // 30 seconds for MongoDB to be ready
    
    const dbURI = "mongodb://mongo:27017/test";  // MongoDB service name in the workflow
    await mongoose.connect(dbURI);
    
    // Give MongoDB time to be fully ready
    await new Promise(resolve => setTimeout(resolve, 5000));  // Wait 5 seconds
    
    await HotelRoom.deleteMany();
  });
  
mongoose.connect(dbURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB:', err));

// Define a schema and model for Hotel Room
const hotelRoomSchema = new mongoose.Schema({
    roomNumber: { type: Number, required: true, unique: true },
    roomType: { type: String, required: true },
    pricePerNight: { type: Number, required: true },
    isBooked: { type: Boolean, default: false }
});

const HotelRoom = mongoose.model('HotelRoom', hotelRoomSchema);

module.exports = HotelRoom;