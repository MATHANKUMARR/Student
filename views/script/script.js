$(document).ready(function () {
    // First Name
    $("#firstname").hide();
    let firstnameError = true;
    $("#fname").keyup(function () {
      validateFirstname();
    });

    function validateFirstname() {
        let firstnameValue = $("#fname").val();
        if (firstnameValue.length == "") {
          $("#firstname").show();
          firstnameError = false;
          return false;
        }  else {
          $("#firstname").hide();
          firstnameError = true;
        }
      }

    //Last Name
    $("#lastname").hide();
    let lastnameError = true;
    $("#lname").keyup(function () {
      validateLastname();
    });

    function validateLastname() {
        let lastnameValue = $("#lname").val();
        if (lastnameValue.length == "") {
          $("#lastname").show();
          lastnameError = false;
          return false;
        }  else {
          $("#lastname").hide();
          lastnameError = true;
        }
      }

    //Address
    $("#addresscheck").hide();
    let addressError = true;
    $("#address").keyup(function () {
      validateAddress();
    });

    function validateAddress() {
        let address = $("#address").val();
        if (address.length == "") {
          $("#addresscheck").show();
          addressError = false;
          return false;
        }  else {
          $("#addresscheck").hide();
          addressError = true;
        }
      }

    // Email
    $("#emailcheck").hide();
    $("#invalidemailcheck").hide()
    $("#alreadyemailcheck").hide();
    let emailError = true;
    $("#email").keyup(function () {
        validateEmail1();
    });

    function validateEmail1() {
        let emailValue = $("#email").val();
        if (emailValue.length == "") {
          $("#emailcheck").show();
          $("#invalidemailcheck").hide();
          $("#alreadyemailcheck").hide();
          emailError = false;
          return false;
        } else {
          $("#emailcheck").hide();
          emailError = true;
        }
      }

      function validateEmail2() {
        let emailValue2 = $("#email").val();
        const re =/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        if (!emailValue2.match(re)) {
            $("#invalidemailcheck").show()
            $("#emailcheck").hide();
            $("#alreadyemailcheck").hide();
            emailError = false;
            return false;
        } else {
          $("#invalidemailcheck").hide();
          emailError = true;
        }
      }

    // Phone
    $("#phonecheck").hide();
    $("#invalidphonecheck").hide()
    $("#alreadyphonecheck").hide()
    let phoneError = true;
    $("#phone").keyup(function () {
        validatePhone1();
    });

    function validatePhone1() {
        let phoneValue = $("#phone").val();
        if (phoneValue.length == "") {
          $("#phonecheck").show();
          $("#invalidphonecheck").hide();
          $("#alreadyphonecheck").hide()
          phoneError = false;
          return false;
        } else {
          $("#phonecheck").hide();
          phoneError = true;
        }
      }

      function validatePhone2() {
        let phoneValue2 = $("#phone").val();
        const re1 = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        if (!phoneValue2.match(re1)) {
            $("#invalidphonecheck").show()
            $("#phonecheck").hide();
            $("#alreadyphonecheck").hide()
            phoneError = false;
            return false;
        } else {
          $("#invalidphonecheck").hide();
          phoneError = true;
        }
      }

    // Gender
    $("#gendercheck").hide();
    let genderError = true;

    function validateGender() {
        if(!$('#male').is(':checked') && !$('#female').is(':checked') && !$('#others').is(':checked')){
            $("#gendercheck").show();
            genderError = false;
            return false;
        }else{
            $("#gendercheck").hide();
            genderError = true;
        }
      }

    // Email alreday exsist
    async function UserAction() {
        const response = await fetch('http://localhost:4000/getAll');
        const myJson = await response.json();
        const email = myJson.map(function(data) {  
          return data.email;  
        })
        const phone = myJson.map(function(data) {  
          return data.phone;  
        })
       if(email.includes($("#email").val())){
            $("#invalidemailcheck").hide()
            $("#emailcheck").hide();
            $("#alreadyemailcheck").show();
            emailError = false;
       }else{
        $("#alreadyemailcheck").hide();
            emailError = true;
       }
       if(phone.includes($("#phone").val())){
        $("#invalidphonecheck").hide()
            $("#phonecheck").hide();
            $("#alreadyphonecheck").show()
            phoneError = false;
       }else{
        $("#alreadyphonecheck").hide()
        phoneError = true;
       }
      }

    $("#submitbtn").click(function () {
        validateFirstname();
        validateLastname();
        validateAddress();
        validateEmail1(); 
        validateEmail2();
        validatePhone1();
        validatePhone2();
        validateGender();
        UserAction()
        if (firstnameError == true 
            && lastnameError == true 
            && addressError == true 
            && emailError == true 
            && phoneError == true 
            && genderError) {
          return true;
        } else {
          return false;
        }
      });
  });