var array = [];
// Create counter for unique index for each employee arrray
var employeeIndex = 0;
// Create a variable for total monthly salaries
var totalMonthly = 0;

$(document).ready(function(){
  // Employee button submit
  $("#employeeinfo").on('submit',function(event){
    event.preventDefault();

    var values = {};

    $.each($("#employeeinfo").serializeArray(), function(i, field){
      values[field.name] = field.value;
      //Add monthly salary to object
      values['monthly'] = Math.round((parseInt(values.salary)) / 12) ;
      //Add index number to object
      values['indexnumber'] = employeeIndex; 
    })
    
    $("#employeeinfo").find("input[type=text]").val("");
    // Update the total monthly salary calculation
    totalMonthly += values.monthly;
    // Write form data to DOM
    appendDom(values);
    // Update the monthly total on DOM
    updateTotal(totalMonthly);
    // Assign objects to array for storage
    array.push(values);
    // Iterate unique employee counter for each entry
    employeeIndex ++;
    //console.log(array);

  });
  $(document).ready(function(){
    //Remove employee button submit
   $("#removeemployee").on('submit', function(event){
    event.preventDefault();
    var myNum ='';
    var removeNum = $('#removeid').val();

    $("#removeemployee").find("input[type=text]").val("");
      //find the Object of the employee to remove
      for(var i = 0; i < array.length; i++){
      if(array[i]['employeenumber'] == removeNum) {
        myNum = i;
        console.log(myNum);
       //}
       //subtract employee monthly salry from total
       totalMonthly -= (array[myNum]['monthly']);
       updateTotal(totalMonthly);
       //remove employee from DOM
       removeDom(myNum);
     }
      // Alert user of employee number not found - *CODE NOT WORKING*
      //   if (myNum !== ""){
      //   console.log("function will run here");
      //  }
      //   else {
      //   alert("Employee not found");
      // }
    }; 
    })
  });

});

// Write to the DOM
function appendDom(object){
   $("#resultfield").append(
  "<ul class='" + object.indexnumber + "'><li>" + object.firstname + "</li>" +
  "<li>" + object.lastname + "</li>" +
  "<li>" + object.employeenumber + "</li>" +
  "<li>" + object.jobtitle + "</li>" +
  "<li>" + object.salary + "</li></ul>");
}

// Update the total on the DOM
  function updateTotal(monSal){
  $("#totaltracker").empty();  
  $("#totaltracker").append(monSal);

  }
// Remove employee from DOM
  function removeDom(foo){
  $("." + foo).remove();
  }




