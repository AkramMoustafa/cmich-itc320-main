"use strict";

$(document).ready( () => {
	$("arrival_date").focus();
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	var flag = 1;
	$("arrival_date").value = "";
	$("name").value = "";
	$("#reservation_form").submit(function(event){
		
		$("#arrival_date").val($.trim($("#arrival_date").val()));
		$("#name").val($.trim($("#name").val()));
		// $("#nights").val($.trim($("#nights").val()));
		$("#email").val($.trim($("#email").val()));
		$("#phone").val($.trim($("#phone").val()));
		
		if ($("#arrival_date").val() == "") {
			
			document.getElementById("arrival_date_span").textContent = "This field is required";
			flag = 0;
		}else{
			document.getElementById("arrival_date_span").textContent = "*";
		}
		if($("#nights").val() == ""){
			
			document.getElementById("nights_span").textContent = "This field is required";
			flag=0;
		}else{
			document.getElementById("nights_span").textContent = "*";
		}
		
		if ($("#name").val() == "") {
			
			document.getElementById("name_span").textContent = "This field is required";
			flag = 0;
		}else{
			document.getElementById("name_span").textContent = "*";
		}

		if($("#email").val() == ""){
			
			document.getElementById("email_span").textContent = "This field is required";
			flag=0;
		}else if(!($("#email").val().match(emailPattern))){
			
			document.getElementById("email_span").textContent = "Must be a valid email address";
			flag=0;
		}else{
			document.getElementById("email_span").textContent = "*";
		}

		if ($("#phone").val() == "") {
			
			document.getElementById("phone_span").textContent = "This field is required";
			flag = 0;
		}else{
			document.getElementById("phone_span").textContent = "*";
		}
		
		if(isNaN($("#nights").val())){
			
			document.getElementById("nights_span").textContent = "Must be numeric";
			flag=0;
		}else{
			document.getElementById("nights_span").textContent = "*";
		}
		
		if(flag==0){
			event.preventDefault();
		}

	});

}); 