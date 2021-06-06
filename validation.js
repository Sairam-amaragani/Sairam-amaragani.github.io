function validateForm(){
	var firstName = document.forms["contact-form"]["firstName"].value;
	var lastName = document.forms["contact-form"]["lastName"].value;
	var email = document.forms["contact-form"]["email"].value;
	var message = document.forms["contact-form"]["message"].value;
	var phone = document.forms["contact-form"]["phone"].value;
	var phoneno = /^\d{10}$/;
	if(firstName===""){
		alert("Must enter first name!");
		return false;
		}
	else if(lastName===""){
		alert("Must enter last name!");
		return false;
	}
	else if(email===""){
		alert("Please enter your email address!");
		return false;
	}
	else if(!(phoneno.test(phone))){
		alert("Must enter valid phone number!");
		return false;
	}
	else if(message===""){
		alert("Hey, you forgot to put in some text to send!");
		return false;
	}
	else{
		alert("Form has been submitted");
}
}
