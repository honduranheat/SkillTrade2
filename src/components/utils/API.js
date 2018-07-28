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
        return axios.get("/listing/");
      },
	saveListing: function(listingData) {
		console.log('hit listing api', listingData);
		return axios.post('/listing/', listingData);
	}
};