console.log("Arrow Function")

let que1=(q,y,n)=>{
    if(confirm(q))
    {
       y();
    }
    else{
        n();
    }
}
que1("you agree or disagree"),function(){alert("are you agreed")},
function(){alert("you canceled")}