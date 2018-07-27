const express = require('express');
const router = express.Router();
const profileController = require('../../database/controllers/profileController');


// Route for grabbing a specific profile by id, populate it with it's listings and reviews
router.route("/:id")
    .get(profileController.getUserProfile)
    .put(profileController.updateProfile)
    .post(profileController.createProfile);

router.route("/exist/:id")
    .get(profileController.checkIfProfileExists);

// Route for saving/updating an Profiles's number of karmaChips
router.route("/chips/:id/:chips")
    .put(profileController.addChips);


module.exports = router;