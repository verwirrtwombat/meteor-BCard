Template.newForm.events({
	'submit .f1': function(event, template) {
		
		event.preventDefault();

		let firstName = template.find('#firstName').value;
		let lastName = template.find('#lastName').value;
		let quote = template.find('#quote').value;
		let gender = template.find('#gender').value;
		let githubLink = template.find('#githubLink').value;
		Session.set('firstName',firstName);
		Session.set('quote',quote);
		Session.set('lastname',lastName);
		Session.set('gender',gender);
		Session.set('githubLink',githubLink);
		
		//Router.go(`/${firstName}`);
		Router.go("/new");
		
	},
	'submit .f2': function(event, template) {
		
		event.preventDefault();

		let firstName = template.find('#firstName').value;
		let lastName = template.find('#lastName').value;
		let quote = template.find('#quote').value;
		let gender = template.find('#gender').value;
		let githubLink = template.find('#githubLink').value;
		Session.set('firstName',firstName);
		Session.set('quote',quote);
		Session.set('lastname',lastName);
		Session.set('gender',gender);
		Session.set('githubLink',githubLink);
		
		Router.go(`/${firstName}`);
		//Router.go("/new");
		
	}
});
