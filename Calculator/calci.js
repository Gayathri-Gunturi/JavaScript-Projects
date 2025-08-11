let display=document.getElementById('display');
function append(value)
{
    display.value+=value;
}
function clearDisplay()
{
    display.value='';
}
function deleteLast()
{
    display.value=display.value.slice(0,-1);
}
function calculate()
{
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value='error';
    }
}
document.addEventListener('keydown',function(event){
    const allowKeys="0123456789+-*/.";
    const key = event.key;
    console.log(key);
   if (allowKeys.includes(key)) {
    // Append the pressed key to the display
    display.value += key;
  } else if (key === "Enter") {
    // Calculate on Enter key
    calculate();
    
      
  } else if (key === "Backspace") {
    // Delete last character on Backspace key
    deleteLast();
  } else if (key === "Escape") {
 // Clear display on Escape key
    clearDisplay();
  }

});