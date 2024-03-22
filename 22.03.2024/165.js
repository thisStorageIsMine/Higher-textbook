let promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
		let isError = true;
		
		if (!isError) {
			resolve('success');
		} else {
			reject(new Error('error'));
		}
	}, 3000);
});

promise.catch(
	err => console.log(err.message),
);