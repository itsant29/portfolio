function appendMailTo(){
    let message = document.getElementById("mailMessage").value;
    let subject = document.getElementById("mailSubject").value;
    console.log(subject);
    console.log(message);
    
    let mailToAttr = document.getElementById("sendMail");
    mailToAttr.setAttribute("href", "mailto:antoinettehall29@gmail.com?subject="+subject+"&body="+message);
}

let date = new Date();
let yearPos = document.getElementById("getYear");
let currYear = date.getFullYear();
yearPos.innerHTML = currYear;

//function getAge(dateString) 
//{
  //  var today = new Date();
    //var birthDate = new Date(dateString);
//    var age = today.getFullYear() - birthDate.getFullYear();
//    var m = today.getMonth() - birthDate.getMonth();
  //  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    //{
   //     age--;
    //}
   // return age;
//}

