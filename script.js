
const form =  document.querySelector("form");
let outer = 0;
function validate(){
	let count=3;
	let count1=2; 
	const pass = document.getElementById("pass").value;
	const mail = document.getElementById("text").value;
	const regx = /^([a-zA-Z0-9\._]+)@([a-z0-9])+.([a-z]+)(.[a-z]+)?$/;
	const check = document.querySelector(".check");
	const check1 = document.querySelector(".check1");
	if(regx.test(mail)){
		count=1;
		check.innerText="";
	}
	else{
		check.innerText="make sure email is more than 3 characters and has @ and a."
		check.style.color="red";
	}
	if(pass.length<9){
		check1.innerText="make sure password is more than 8 characters"
		check1.style.color="red";
	}
	else{
		count1=1;
		check1.innerText=""
	}
	if(count===count1){
		outer=1
		check1.innerText="All good to go!"
		check1.style.color="green";
        alert("successful signup!");
	}
}
form.addEventListener("submit",(e)=>{
	e.preventDefault();
	validate();
	if(outer===1){
		form.reset();
	}
})
