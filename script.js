let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})
// Event listener for keyboard input
document.addEventListener('keydown', (e) => {
    const key = e.key;

    e.preventDefault();
    
    // Handle number keys, operators, and other valid characters
    if (/[0-9+\-*/.]/.test(key)) {
        string += key;
        input.value = string;
    }
      
    // Handle the 'Enter' key (equals sign)
    if (key === 'Enter') {
        try {
            string = eval(string);
            input.value = string;
        } catch (error) {
            input.value = "Error";
            string = "";
        }
    }

    // Handle the 'Backspace' key (delete last character)
    if (key === 'Backspace') {
        string = string.slice(0, -1);
        input.value = string;
    }

    // Handle the 'Escape' key (clear the input)
    if (key === 'Escape') {
        string = "";
        input.value = string;
    }
});