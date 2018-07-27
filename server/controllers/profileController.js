const db = require("../database/models");

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

module.exports = {

    checkIfProfileExists: function(req, res){
        db.Profile.findOne({userID: req.params.id})
        .then(function(response){
            if (response) return true;
            if (err) return false;
        })

    },
    createProfile: function(req, res) {
        db.Profile.create({
            userID: req.params.id,
            dateJoined: date,
            karmaChips: 0
        }).then(function(newprofile){
            res.json(newprofile);
        }).catch(function(err) {
            res.json(err);
        });
    },

    updateProfile: function(req, res) {
        db.Profile.findOneAndUpdate({userID: req.id},
            {$set: {
                firstName: req.firstName,
                lastName: req.lastName,
                email: req.email,
                imageLink: req.imageLink,
                birthdate: req.birthdate,
                location: req.location,
                skills: req.skills
                }
            }
        ).then(function(userProfile) {
            res.json(userProfile);
        })
        .catch(function(err) {
            res.json(err);
        });
    },

    // Route for grabbing a specific profile by id, populate it with it's listings and reviews
    getUserProfile: function(req, res) {
        // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
        db.Profile.findOne({ userID: req.params.id })
        // ..and populate all of the notes associated with it
        .populate("listings")
        .then(function(userProfile) {
            // If we were able to successfully find an Article with the given id, send it back to the client
            res.json(userProfile);
        })
        .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
    },

    // Route for saving/updating an Profiles's number of karmaChips
    addChips: function(req, res) {
        
        // Create a new note and pass the req.body to the entry
        db.Profile.findOneAndUpdate({userID: req.params.id}, {$set: { karmaChips: req.params.chips }})
        .then(function(dbProfile) {
            console.log(dbProfile);
            res.send(dbProfile);
        });
    }

};
