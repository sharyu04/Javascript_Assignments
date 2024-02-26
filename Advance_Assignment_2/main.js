const isValid = (e) => {
    // e.preventDefault()
    const str = e.target.value;
    if(str=="" || str.length<4 || str.length>12){
       document.getElementById("Output").innerHTML = "Invalid String"
    }
    else{
        document.getElementById("Output").innerHTML = "Valid String"
    }
}

document.getElementById("stringInput").addEventListener("change",isValid)
