 function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
  }
  var submit=document.getElementById("registerButton")
  console.log(submit)
submit.onclick= function(){
    validateform();
}

function validateform() {
    var form=document.getElementById("regform")
    var name = form.name.value;
    var phone = form.phone.value;
    var email = form.email.value;
    var gender = form.gender.value;
    var qualification = form.qualification.value;
    var course = form.course.value;
    var country = form.country.value;
    var conditions = form.condition.value;
    var comments = form.comment.value;

    var nameErr = true;
    var phoneErr = true;
    var emailErr = true;
    var genderErr = true;
    var qualificationErr = true;
    var courseErr = true;
    var conditionErr = true;
    var commentErr = true;

  
    if (name == "") {
      printError("nameErr", "Please enter your name");
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(name) === false) {
        printError("nameErr", "Please enter a valid name");
      } else {
        printError("nameErr", "");
        nameErr = false;
      }
    }
    if (phone == "") {
        printError("phoneErr", "Please enter your mobile number");
      } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(phone) === false) {
          printError("phoneErr", "Please enter a valid 10 digit mobile number");
        } else {
          printError("phoneErr", "");
          phoneErr = false;
        }
      }
    if (email == "") {
      printError("emailErr", "Please enter your email address");
    } else {
      if (!email.includes("@")) {
        printError("emailErr", "Please enter a valid email address");
      } else {
        printError("emailErr", "");
        emailErr = false;
      }
    }
    

    if (gender == "") {
      printError("genderErr", "Please select your gender");
    } else {
      printError("genderErr", "");
      genderErr = false;
    }
    if (qualification == "") {
        printError("qualificationErr", "Please select your qualification");
      } else {
        printError("qualificationErr", "");
        qualificationErr = false;
      }
      if (course == "") {
        printError("courseErr", "Please select your course");
      } else {
        printError("courseErr", "");
        courseErr = false;
      }
      if (conditions == "") {
        printError("conditionErr", "Please accept the conditions");
      } else {
        printError("conditionErr", "");
        conditionErr = false;
      }
      if (comments == "") {
        printError("commentErr", "Please accept the conditions");
      } else {
        printError("commentErr", "");
        commentErr = false;
      }

    if ((nameErr || phoneErr || emailErr || genderErr || qualificationErr || courseErr || conditionErr || commentErr) == true) {
      
      return false;
    } 
    else {
      var dataPreview =
        "You've entered the following details: \n" +
        "Name: " +
        name +
        "\n" +
         "Phone: " +
        phone +
        "\n" +
        "Email: " +
        email +
        "\n" +
        "Gender: " +
        gender +
        "\n" +
        "Qualification:" +
        qualification +
        "\n" +
        "Course: " +
        course +
        "\n" +
        "Country: " +
        country +
        "\n" +
        "Conditions: " +
        conditions +
        "\n" +
        "comments: " +
        comments ;
      

      alert(dataPreview);
    }
}
  