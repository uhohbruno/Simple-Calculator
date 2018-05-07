$(document).ready(function() {
  let display = "";
  let currentDisplay = "";
  let operatorClick = false;
  $(".buttons").click(function() {
    console.log($(this).html(), operatorClick, display, currentDisplay);

    if (subDisplay.length == 9 || display.length == 7) {
      currentDisplay = '';
      display = '';
      $("#display").html("Limit Reached");
      $("#subDisplay").html(display);
      console.log(display, subDisplay);

    } 
    else if ($(this).html() == "=" && display != ''){
      let expression = display.replace(/[÷]/g, "/").replace(/[×]/g, "*");
      currentDisplay = Math.round(eval(expression) * 100) / 100;
      currentDisplay = currentDisplay.toString();
      display = currentDisplay;
      
      $("#display").html(currentDisplay);
      $("#subDisplay").html(display);
      operatorClick = true;
      console.log(typeof currentDisplay, typeof display);
    }
    else if ($(this).hasClass("operators") && operatorClick == true) {
      display += $(this).html();
      $("#subDisplay").html(display);
      $("#display").html($(this).html());
      currentDisplay = "";
      operatorClick = false;
      console.log("operator")

    } else if ($(this).html() == "AC") {
      currentDisplay = '';
      display = '';
      $("#display").html(currentDisplay);
      $("#subDisplay").html(display);
    } else if ($(this).html() == "CE") {

      if (operatorClick == false ) {

        display = display.substring(0, display.length - 1);
        let tempCurrentDisplay = display.replace(/\d*[×+\-÷]/g, '');
        tempLength = tempCurrentDisplay.length;
        console.log(tempCurrentDisplay, "tempCurrentDisplay");
        $("#display").html(tempCurrentDisplay);
        $("#subDisplay").html(display);
        
        currentDisplay = tempCurrentDisplay;
        operatorClick = true;
        console.log(tempCurrentDisplay, currentDisplay, display);
      } else {
        
        let tempLength = currentDisplay.length;
        currentDisplay = '';
        display = display.substring(0, display.length- tempLength)
        $("#subDisplay").html(display);

        $("#display").html(currentDisplay);
        console.log(currentDisplay, display);
        operatorClick = false;
      }
    } else if ($(this).hasClass("number")) {
      console.log(display, currentDisplay, $)
      if (operatorClick == false) {
        currentDisplay == "";
      }
      if($(this).html() == "." ) {
        
        if (currentDisplay == '' && currentDisplay.indexOf(".") == -1){
        currentDisplay += '0.';
        display += '0.';
      } else {
        if (currentDisplay.indexOf(".") == -1) {
          currentDisplay += $(this).html();
          display += $(this).html();
        }
      }
        
      } 
      
      else{
      currentDisplay += $(this).html();
      display += $(this).html();
      

      operatorClick = true;}
      $("#display").html(currentDisplay);
    }
  })









});