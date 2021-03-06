// function to set JWT in request header
import axios from 'axios';

export default {
	userToken: function() {
		return (axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken'));
	},
	userRegister: function(obj) {
		return axios.post('/api/auth/register', obj, function(res) {
			// changed the data being sent in request
			if (res.status === 200) {
				console.log('success');
			}
		});
	},
	userLogin: function(obj) {
		return axios.post('/api/auth/login', obj);
	},
	userLogout: function(obj) {
		localStorage.removeItem('jwtToken');
		localStorage.removeItem('eco-user');
	},
	userUpdate: function(data) {
		let token = this.getLocalStorage('jwtToken');
		return axios.post(`/api/survey/update`, data, {
			headers: { Authorization: token }
		});
	},
	populateLocalStorage: function(userData) {
		localStorage.setItem('jwtToken', userData.token);
		localStorage.setItem('eco-user', JSON.stringify(userData.user));
	},
	getLocalStorage: function(key) {
		return localStorage.getItem(key);
	},
	// submit user daily check answers
	userSubmitDaily: function(id, answers) {
		let token = this.getLocalStorage('jwtToken');

		const reducer = (a, b) => {
			return a + b;
		};
		const score = answers.reduce(reducer);

		const checkInData = {
			user_id: id,
			userAnswers: [ ...answers ],
			totalPoints: score,
			date: Date.now()
		};
		return axios.post('/api/survey', checkInData, {
			headers: { Authorization: token }
		});
	},
	getDailyCheck: function() {
		let token = this.getLocalStorage('jwtToken');
		return axios.get(`/api/survey/dailycheck`, {
			headers: { Authorization: token }
		});
	},
	getUserData: function() {
		let token = localStorage.getItem('jwtToken');
		return axios.get(`/api/survey/results`, {
			headers: { Authorization: token }
		});
	}
};
