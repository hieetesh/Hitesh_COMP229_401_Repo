let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Contact List Model
let contactListModel = require('../model/contactListModel');

let contactListController = require('../controllers/contactList');

/* GET Route for the Book List page - READ Operation */
router.get('/', contactListController.displayContactList);

/* GET Route for displaying the Add page - CREATE Operation */
//router.get('/add', contactListController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', contactListController.processAddContact);

// /* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', contactListController.getEditData);

// /* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', contactListController.processEditContact);

// /* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', contactListController.performDelete);

module.exports = router;