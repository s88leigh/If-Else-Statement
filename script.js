function click() { 
    var text = parseInt(document.getElementById("inp").value);
    var output = document.getElementById("output");
   
    if (text >= 21) {
        output.innerHTML = "You are 21 or older, please drink responsibly";
    } else{
        output.innerHTML = "You are not of legal age";
    }
};