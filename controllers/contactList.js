let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let contactListModel = require('../model/contactListModel');

module.exports.displayContactList = (req, res, next) => {
    contactListModel.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            console.log("contactList123: ",contactList);

            res.render('businessContactList/list', {title: 'Contact List', ContactList: contactList});      
        }
    });
}



