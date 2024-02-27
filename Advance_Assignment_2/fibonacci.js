function* fibonacci(reset) {
    let i = 0;
    let j = 1;
    while(true){
        yield i;
        [i,j] = [j,j+i]
    }
}

let sequence

function onClickNext(){
    p = document.createElement("p")
    p.innerHTML = `${sequence.next().value} `
    document.body.appendChild(p)

}

document.addEventListener("DOMContentLoaded",()=>{
    sequence = fibonacci()
})
