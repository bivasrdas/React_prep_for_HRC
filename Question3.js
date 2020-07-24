const disp=function(){
const n=document.getElementById("name");
const emailid=document.getElementById("email");
const message=document.getElementById("msg");
if(n.value.length==0 || emailid.value.length==0 || message.value.length==0)
{
    alert("Enter All Details")
}
if(!emailid.includes("@"))
{
    alert("Enter Valid Email Id");
}
console.log(n);
}