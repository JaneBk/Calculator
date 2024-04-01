let input=document.getElementById('inputBox');
let btn=document.querySelectorAll("button");
let string="";
let arr=Array.from(btn);
function calc(key){
    if(key == "=")
        string = eval(string);
    else if(key == "AC")
        string = "";
    else if(key == "Del")
        string = string.substring(0,string.length-1);
    else
        string+= key;        
    input.value = string;
}

arr.forEach(btn=> {
        btn.addEventListener("click", (e) =>{
        let n = e.target.innerHTML;
        calc(n)
    })
})