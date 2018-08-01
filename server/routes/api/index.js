const router = require("express").Router();

const profileRoutes = require("./profile");
const listingRoutes = require('./listing');
const userRoutes = require('./users');
const messageRoutes = require('./message');

// Book routes
 router.use("/users", userRoutes);
 router.use("/message", messageRoutes);
 router.use('listings', listingRoutes);

router.use("/profiles", profileRoutes);

// return router;

module.exports = router;
