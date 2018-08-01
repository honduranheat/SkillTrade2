const express = require('express');
const router = express.Router();
const profileController = require('../../controllers/profileController');


// Route for grabbing a specific profile by id, populate it with it's listings and reviews
router.route("/:id")
    .get(profileController.getUserProfile)
    .put(profileController.updateProfile);

router.route("/exist/:id")
    .get(profileController.checkIfProfileExists);
router.route("/post")
    .post(profileController.addReview);
// Route for saving/updating an Profiles's number of karmaChips
router.route("/chips/:id/:chips")
    .put(profileController.addChips);
router.route("/reviews/:id")
    .get(profileController.getReviewBody)

module.exports = router;