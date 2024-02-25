const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const leadSchema = new mongoose.Schema({
    lead_id: { type: String, default: uuidv4 },
  
    enquiryDate: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    brandName: {
        type: String,
        required: true
    },
   
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: false
    },
    phone1: {
        type: String,
        required: true,
        validate: {
            validator: function(phone) {
                return /^\+?[1-9]\d{1,14}$/.test(phone);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    phone2: {
        type: String,
        required: false,
        validate: {
            validator: function(phone) {
                return /^\+?[1-9]\d{1,14}$/.test(phone);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    email1: {
        type: String,
        required: false,
        unique: true,
        validate: {
            validator: function(email) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    email2: {
        type: String,
        required: false,
        unique: true,
        validate: {
            validator: function(email) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    website: {
        type: String,
        required: false
    },
    businessAddress: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    pincode: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    requirement: {
        type: String,
        required: false
    },
    additionalInformation: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: true,
        enum: ['Raw', 'In-Progress', 'Converted', 'Lost'],
        default: 'Raw'
    },
}, );

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;
