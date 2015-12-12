var array = [];
// Create counter for unique index for each employee arrray
var employeeIndex = 0;
// Create a variable for total monthly salaries
var totalMonthly = 0;

$(document).ready(function(){
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
    array.push(values);
    // Iterate unique employee counter for each entry
    employeeIndex ++;

    console.log(array);
    console.log(totalMonthly);
  });

});

// Write to the DOM
function appendDom(object){
   $("#resultfield").append(
  "<ul><li>" + object.firstname + "</li>" +
  "<li>" + object.lastname + "</li>" +
  "<li>" + object.employeenumber + "</li>" +
  "<li>" + object.jobtitle + "</li>" +
  "<li>" + object.salary + "</li></ul>");
  // $("#resultfield").append("<ul></ul>");
  // var $domField = $("#resultfield").children().last();

  // $domField.append("<li>" + object.firstname + "</li>");
  // $domField.append("<li>" + object.lastname + "</li>");
  // $domField.append("<li>" + object.employeenumber + "</li>");
  // $domField.append("<li>" + object.jobtitle + "</li>");
  // $domField.append("<li>" + object.salary + "</li>");
}

// Update the total on the DOM
  function updateTotal(monSal){
  $("#totaltracker").empty();  
  $("#totaltracker").append("<p>" + monSal + "</p>");

  }