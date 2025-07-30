let x= document.querySelectorAll(".image");
let r= document.querySelector(".rrr");
let uu= document.querySelector("#users");
let ccc = document.querySelector("#coms");
var arr=["rock","paper","seaser"];

let u=0,c=0,u1=false,c1=false;
x.forEach((v)=>{
v.addEventListener("click",()=>{
    const userc= v.getAttribute('id');
    console.log("user clicked: ",userc);
    const cc = arr[Math.floor(Math.random()*3)];
    console.log("computer choice: ",cc);
    checkr(userc,cc);
})});
 updater=()=>{
      if(u1){
        uu.innerText= u;
        u1=false;
      }
      else{
        ccc.innerText=c;
        c1=false;
      }
    }

checkr=(userc,cc)=>{
    if(userc===cc){
        console.log("its a draw!!!!");
        r.innerHTML="<b>Its a Draw!!!...</b>"
    }
    else if(userc==="rock"){
        if(cc==="paper"){
            console.log("Computer Won!!!...");
            r.innerHTML="<b>Computer Won!!!...</b>";
            c++;
            c1=true;
            updater();
        }
        else{
            console.log("User Won!!!...");
             r.innerHTML="<b>User Won!!!...</b>";
            u++;
            u1=true;
            updater();
        }
    }
     else if(userc==="paper"){
        if(cc==="seaser"){
            console.log("Computer Won!!!...");
             r.innerHTML="<b>Computer Won!!!...</b>";
            c++;
             c1=true;
            updater();
        }
        else{
            console.log("User Won!!!...");
             r.innerHTML="<b>User Won!!!...</b>";
            u++;
             u1=true;
            updater();
        }
    }
      else if(userc==="seaser"){
        if(cc==="rock"){
            console.log("Computer Won!!!...");
             r.innerHTML="<b>Computer Won!!!...</b>";
            c++;
             c1=true;
            updater();
        }
        else{
            console.log("User Won!!!...");
             r.innerHTML="<b>User Won!!!...</b>";
            u++;
             u1=true;
            updater();
        }
    }
   
    

}
