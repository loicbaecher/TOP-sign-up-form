pass=document.querySelector("input#pass");
passconf=document.querySelector("input#confpass");
notmarch=document.querySelector(".samemess");

function checksame (x,y){
    if(x===y && x!=="" && y!==""){
        notmarch.textContent="";
    }
    else{
        notmarch.style="color:red";
        notmarch.textContent="*passwords do not match.";
    }
}

pass.addEventListener('input',(e)=>{
    pass=document.querySelector("input#pass");
    passconf=document.querySelector("input#confpass");
    notmarch=document.querySelector(".samemess");
    left=pass.value;
    right=passconf.value;
    checksame(left,right)
})

passconf.addEventListener('input',(e)=>{
    pass=document.querySelector("input#pass");
    passconf=document.querySelector("input#confpass");
    notmarch=document.querySelector(".samemess");
    left=pass.value;
    right=passconf.value;
    checksame(left,right)
})