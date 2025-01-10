//q1
function toggleTheme()
{
    const displayRef =document.getElementById("toggle-theme");
    const displayRef1=document.getElementById("theme");
    if(document.body.style.backgroundColor==="black")
    {
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        //to change the text if line
        displayRef.innerText="white";
        displayRef1.innerText="white";
    }
    else{
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        //ref
        displayRef.innerText="black";
        displayRef1.innerText="black";
    }
}
//const intervalid=setInterval(())
setInterval(()=>{
  console.log("Muaz");
  toggleTheme();
},15000)
//setTimeout(()=>{
  //  console.log("timeout");
//},5000);