const db = require("../database/models");
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
module.exports = {
    checkIfProfileExists: function(req, res){
        db.Profile.findOne({_id: req.params.id})
        .then(function(error, response){
            if (!response) {
                db.Profile.create({
                    _id: req.params.id,
                    username: req.params.username,
                    firstName: "No first name saved",
                    lastName: "No last name saved",
                    email: "No email saved",
                    imageLink: "https://pbs.twimg.com/profile_images/892784464945926144/E3uvZI7Z_400x400.jpg",
                    location: "No location saved",
                    skills: "No skills listed yet!",
                    dateJoined: date,
                    karmaChips: 0
                }).then(function(newprofile){
                    res.send(newprofile);
                }).catch(function(err) {
                    res.send(err);
                });
            };
            if (response) res.send(response);
            if (error) res.send(error);
        });
    },
    // createProfile: function(req, res) {
    //     db.Profile.create({
    //         userID: req.params.id,
    //         dateJoined: date,
    //         karmaChips: 0
    //     }).then(function(newprofile){
    //         res.json(newprofile);
    //     }).catch(function(err) {
    //         res.json(err);
    //     });
    // },
    updateProfile: function(req, res) {
        console.log("updateProfile function req: " + req);
        console.log(req.body);
        console.log("lastname" + req.body.lastName);
        db.Profile.findOneAndUpdate({_id: req.params.id},
            {$set: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                imageLink: req.body.imageLink,
                birthdate: req.body.birthdate,
                location: req.body.location,
                skills: req.body.skills,
                lastUpdated: date
                }
            }
        ).then(function(userProfile) {
            res.send(userProfile);
        })
        .catch(function(err) {
            res.send(err);
        });
    },

    getAllProfiles: function(req, res) {
        db.Profile.find()
        .then(function(allprofiles){
            console.log("all profiles...");
            console.log(allprofiles);
            res.send(allprofiles);
        })
        .catch(function(err){
            res.json(err);
        });
    },

    // Route for grabbing a specific profile by id, populate it with it's listings and reviews
    getUserProfile: function(req, res) {
        // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
        db.Profile.findOne({ _id: req.params.id })
        // ..and populate all of the notes associated with it
        .populate("listings")
        .then(function(userProfile) {
            console.log("user profile...");
            console.log(userProfile);
            // If we were able to successfully find an Article with the given id, send it back to the client
            res.json(userProfile);
        })
        .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
    },
    getProfilebyUsername: function(req, res) {
        db.Profile.findOne({ username: req.params.username })
        .populate("listings")
        .then(function(userProfile) {
            console.log("user profile...");
            console.log(userProfile);
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
        db.Profile.findOneAndUpdate({_id: req.params.id}, {$set: { karmaChips: req.params.chips }})
        .then(function(dbProfile) {
            console.log(dbProfile);
            res.send(dbProfile);
        });
    }
};