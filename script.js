
let otp;
let res;
function handlegenerate()
{
otp=Math.random()*10000;
res=Math.floor(otp);

document.getElementById('otpnum').innerHTML=res;

}
function submit(){
    let otpinput=document.getElementById('otpinput').value;
    if(parseInt(otpinput)==res){
        alert('otp verified successfully');

    }
    else{
        alert("invalid otp");

    }


}
function refresh(){
    location.reload();

}