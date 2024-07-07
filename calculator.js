

const display =document.getElementById("inputtext")



appendtodisplay = (input) =>{
    display.value += input
}

cleardisplay = () =>{
    display.value = ""
    document.getElementById('result').innerHTML = ""
    
}

calculate = () =>{
    document.getElementById('result').innerHTML = eval(display.value)
    
    
}