let button = document.getElementById("btn");
let msg = document.getElementsByClassName("error");
let t1 = document.getElementById("errormsg1");
let t2 = document.getElementById("errormsg2");
let t3 = document.getElementById("errormsg3");
let t4 = document.getElementById("errormsg4");
let d1 = document.getElementById("idiv1");
let d2 = document.getElementById("idiv2");
let d3 = document.getElementById("idiv3");
let d4 = document.getElementById("idiv4");
let indiv = document.getElementsByClassName("idiv");
let icon = document.getElementsByClassName("errspan");
let iconimg1 = document.getElementById("erspan1");
let iconimg2 = document.getElementById("erspan2");
let iconimg3 = document.getElementById("erspan3");
let iconimg4 = document.getElementById("erspan4");
let firstname = document.getElementById("fname");
let lastname = document.getElementById("lname");
let em = document.getElementById("email");
let pwd = document.getElementById("pass");
let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

for(let i = 0; i < indiv.length; i++) {
	indiv[i].style.border = "1px solid hsl(249, 10%, 26%)";
}

function validateForm() {
	if(firstname.value == "") {
		t1.style.visibility = "visible";
		t1.innerHTML = "First Name can not be empty";
		d1.style.border = "1px solid hsl(0, 100%, 74%)";
		iconimg1.style.visibility = "visible";
	}
	if(firstname.value != "") {
		t1.style.visibility = "hidden";
		d1.style.border = "1px solid hsl(249, 10%, 26%)";
		iconimg1.style.visibility = "hidden";
	}
	if(lastname.value == "") {
		t2.style.visibility = "visible";
		t2.innerHTML = "Last Name can not be empty";
		d2.style.border = "1px solid hsl(0, 100%, 74%)";
		iconimg2.style.visibility = "visible";
	}
	if(lastname.value != "") {
		t2.style.visibility = "hidden";
		d2.style.border = "1px solid hsl(249, 10%, 26%)";
		iconimg2.style.visibility = "hidden";
	}
	if(em.value == "") {
		t3.style.visibility = "visible";
		t3.innerHTML = "Email address can not be empty";
		d3.style.border = "1px solid hsl(0, 100%, 74%)";
		iconimg3.style.visibility = "visible";
	}
	if(em.value != "" && !(em.value.match(regex))) {
		t3.style.visibility = "visible";
		t3.innerHTML = "Looks like this is not an email";
		d3.style.border = "1px solid hsl(0, 100%, 74%)";
		iconimg3.style.visibility = "visible";
	}
	if(em.value != "" && em.value.match(regex)) {
		t3.style.visibility = "hidden";
		d3.style.border = "1px solid hsl(249, 10%, 26%)";
		iconimg3.style.visibility = "hidden";
	}
	if(pwd.value == "") {
		t4.style.visibility = "visible";
		t4.innerHTML = "Password can not be empty";
		d4.style.border = "1px solid hsl(0, 100%, 74%)";
		iconimg4.style.visibility = "visible";
	}
	if(pwd.value != "") {
		t4.style.visibility = "hidden";
		d4.style.border = "1px solid hsl(249, 10%, 26%)";
		iconimg4.style.visibility = "hidden";
	}
	if(pwd.value.length < 8 && pwd.value != "") {
		t4.style.visibility = "visible";
		t4.innerHTML = "Minimum password length 8 characters"
		d4.style.border = "1px solid hsl(0, 100%, 74%)";
		iconimg4.style.visibility = "visible";
	}
	if(pwd.value.length > 8) {
		t4.style.visibility = "hidden";
		d4.style.border = "1px solid hsl(249, 10%, 26%)";
		iconimg4.style.visibility = "hidden";
	}
}

button.addEventListener("click", validateForm);