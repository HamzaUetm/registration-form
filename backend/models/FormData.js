const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
    fullName: String, // Changed from `firstName` and `lastName` to `fullName`
    email: String,
    password: String, 
    phone: String,       // Optional: Include phone number
    dob: String,         // Optional: Include date of birth
    address: String      // Optional: Include address
});

const FormDataModel = mongoose.model('log_reg_form', FormDataSchema);

module.exports = FormDataModel;
