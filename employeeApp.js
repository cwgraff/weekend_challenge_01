var array = [];
// Create counter for unique index for each employee arrray
var employeeIndex = 0;
// Create a variable for total monthly salaries
var totalMonthly = 0;

$(document).ready(function(){
  //Add employee button submit
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

    //console.log(array);
    //console.log(totalMonthly);
  });
  $(document).ready(function(){
    //Remove employee button submit
   $("#removeemployee").on('submit', function(event){
    event.preventDefault();
    //left off here
    var myNum ='';
    var removeNum = $('#removeid').val();

    //console.log(removeNum);
    //console.log(array[0]['employeenumber']);
  //})

   $("#removeemployee").find("input[type=text]").val("");
      for(var i = 0; i < array.length; i++){
      if(array[i]['employeenumber'] == removeNum) {
        myNum = i;
        console.log(myNum);
        return;
       }
      else{console.log("stuff")};
    };
      //array[]['indexnumber'] = employeeIndex; 
     //)
    })
  });

});

// Write to the DOM
function appendDom(object){
   $("#resultfield").append(
  "<ul class='" + object.employeeIndex + "'><li>" + object.firstname + "</li>" +
  "<li>" + object.lastname + "</li>" +
  "<li>" + object.employeenumber + "</li>" +
  "<li>" + object.jobtitle + "</li>" +
  "<li>" + object.salary + "</li></ul>");
}

// Update the total on the DOM
  function updateTotal(monSal){
  $("#totaltracker").empty();  
  $("#totaltracker").append("<p>" + monSal + "</p>");

  }