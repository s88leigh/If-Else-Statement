function submit() { 
    var text = parseInt(document.getElementById("inp").value);
    var output = document.getElementById("output");
   
    if (text > 21) {
        output.innerHTML = "You are over 21. Please drink responsibly!";
    } else if (text == 21) {
        output.innerHTML = "You are 21. knock yourself out!"
    }
    else{
        output.innerHTML = "Sorry, You are NOT of legal drinking age";
    }
}
