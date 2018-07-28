import axios from 'axios';

export default {
	// Gets all books
	getUser: function(username) {
		console.log('here API');
		return axios.get('/user/' + username);
	},
	sendMessage: function(receiverData) {
		console.log('message API');
		return axios.post('/user/send', receiverData);
	},
	getMessageBody: function(id) {
		console.log('here API body' + id);
		return axios.get('/message/' + id);
	},
///////////////////////////////////////////////////////////////////
    // Listing
    getListings: function() {
        console.log('hit browse api')
        return axios.get("/browse/");
    },
	saveListing: function(listingData) {
		console.log('hit listing api', listingData);
		return axios.post('/listing/', listingData);
	},
	getProfile: function(id) {
		axios.get("/api/profiles/exist/" + id).then(function(response){
			if (response === true) {
				return axios.get("/api/profiles/" + id);
			} else {
				return axios.post("/api/profiles/"+ id);
			}
		});
	},	
	saveProfile: function(profileData) {
		return axios.put("/api/profiles/"+ profileData._id, profileData);
	}
};