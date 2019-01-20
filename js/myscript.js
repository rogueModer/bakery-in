// Assign values to the variables
		
		fname = document.getElementById('firstname');
		lname = document.getElementById('lastname');
		uname = document.getElementById('username');
		pass = document.getElementById('password');
		cpass = document.getElementById('cpassword');
		

		document.getElementById('submit').onclick = startvalidation;

		function validation(word, pattern){

			if (pattern.test(word)) {
				return 'valid';
			}
			else{
				return 'invalid';
			}
		}

		uname.onblur = checkexistance;


		function checkexistance(){
			
			// Check Username Validation

			if (validation(uname.value, /^[^ _.$A-Z][a-z _.0-9]+[@][gmailyahoohotmail]+(.com|.in)$/) !== 'valid') {
				uname.className = '';
			}
			else {
				uname.className = 'valid';
				if (uname.value !== "") {
					xhttp = new XMLHttpRequest();
					url = 'checkemail.php?emailId=' + escape(uname.value);
					xhttp.open('GET', url, true)
					xhttp.send();
					xhttp.onreadystatechange = resultexistance;
				}
			}
		}

		function resultexistance(){

			if (this.readyState == 4 && this.status == 200) {
					
				if (xhttp.responseText == 'exist') {
					document.getElementById('exist').innerHTML = 'Email Id is already exist.';
				}							
				else {
					if (xhttp.responseText == 'unexist') {
						document.getElementById('exist').innerHTML = 'Email Id is available.';
					
					}
				}		
			}
		}

		function startvalidation(e){

			// First & Last Name Validtion
			
			if (validation(fname.value, /^[^0-9_ .a-z][a-z]+$/) !== 'valid') {
				e.preventDefault();
				fname.className = 'invalid';
			}
			else{
				fname.className = 'valid';
			}

			if (validation(lname.value, /^[^0-9_ .a-z][a-z]+$/) !== 'valid') {
				e.preventDefault();
				lname.className = 'invalid';
			}
			else {
				lname.className = 'valid';
			}

			// Username Check

			if (uname.value == "") {
				uname.className = 'invalid';
				document.getElementById('exist').innerHTML = '';
			}
			else{
				uname.className = 'valid';
				if (xhttp.responseText == 'exist') {
					uname.className = 'exist';
					e.preventDefault();
				}

			}
		
			// Password Validtion Section

			if ( pass.value == '' || cpass.value == '') {
				e.preventDefault();
				if (pass.value == '') {
					pass.className = 'invalid';
				}
				else{
					pass.className = 'valid';	
				}		
				
				if (cpass.value == '') {
					cpass.className = 'invalid';
				}
				else {
					cpass.className = 'valid';	
					if (pass.value == '') {
						pass.className = 'invalid';
						cpass.className = 'invalid';
					}
					else {
						pass.className = 'valid';
					}
				}
			}
			else{
				pass.className = 'valid';
				cpass.className = 'valid';
			}
		}