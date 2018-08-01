const db = require("../database/models");
var mongoose = require("mongoose");

var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

module.exports = {
  checkIfProfileExists: function(req, res) {
    db.Profile.findOne({ _id: req.params.id }).then(function(error, response) {
      if (!response) {
        db.Profile.create({
          _id: req.params.id,
          firstName: "no first name saved",
          lastName: "no last name saved",
          email: "no email saved",
          imageLink: "no image link saved",
          location: "no location saved",
          skills: "no skills yet",
          dateJoined: date,
          karmaChips: 0
        })
          .then(function(newprofile) {
            res.send(newprofile);
          })
          .catch(function(err) {
            res.send(err);
          });
      }
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
  getReviewBody: function(req, res) {
    var reviewArray = [];
    console.log(req.params.id + "!!!!!!!!!!!!!!!!+++");
    db.User.find({ _id: req.params.id }).then(function(userProfile) {
        console.log(userProfile)
        // for(var i =0; i < userProfile[0].review; i++) {
        //     console.log(review)
        //     db.Review.findOne({ _id: review})
        //     .then(function(dbReviews) {
        //         console.log(dbReviews)
        //         reviewArray.push(dbReviews);
        //         }
                
        //     }  
        db.Review.find({receiverId : req.params.id}).then(function(dbReviews) {
            res.json(dbReviews)
        })
            })
        
  },
  addReview: function(req, res) {
    console.log("profilecontroller line 51");
    var id = mongoose.Types.ObjectId(req.body.receiverId);
    console.log(id + "nline 49");
    db.Review.create(req.body).then(function(dbReview) {
      console.log(dbReview);
      console.log(dbReview.receiverId + "Line 57");
      var id = dbReview.receiverId;
      // var id = mongoose.Types.ObjectId(dbReview.receiverId)
      db.User.findByIdAndUpdate(
        { _id: id },
        { $push: { review: dbReview._id } },
        { new: true }
      )
      res.send(dbUser)
      })
        
    
    // db.Profile.findOneAndUpdate({_id: id}, //change when we get user in params
    // {$push: {
    //     reviews:
    //     {
    //         reviewer: req.body.reviewer,
    //         rating: req.body.rating,
    //         message: req.body.message
    //     }
    // }})
  },
  updateProfile: function(req, res) {
    console.log("updateProfile function req: " + req);
    console.log(req.body);
    console.log("lastname" + req.body.lastName);
    db.Profile.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
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
    )
      .then(function(userProfile) {
        res.send(userProfile);
      })
      .catch(function(err) {
        res.send(err);
      });
  },

  // Route for grabbing a specific profile by id, populate it with it's listings and reviews
  getUserProfile: function(req, res) {
    // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
    db.Profile.findOne({ _id: req.params.id })
      // ..and populate all of the notes associated with it
      .populate("listings")
      .populate("reviews")
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
    db.Profile.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { karmaChips: req.params.chips } }
    ).then(function(dbProfile) {
      console.log(dbProfile);
      res.send(dbProfile);
    });
  }
};
