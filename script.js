var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var result = document.querySelector(".result");

function calculateAge(){
   var dob = document.querySelector(".dateOfBirth");
   let birth = new Date(dob.value);

   var currentdob = document.querySelector(".curDateOfBirth");
  //  console.log(birth);
  
  let cBirth = new Date(currentdob.value);
  // console.log(cBirth);

  let age = cBirth.getFullYear() - birth.getFullYear();
  // let date= birth.getDate();
  // let month =months[birth.getMonth()];
  // let year = birth.getFullYear();
  // console.log(age);
  // console.log(date,month,year);
 if(isNaN(birth)){
  alert('Please select your Date of Birth');
 }else if(isNaN(cBirth)){
  alert('Please select the current date');
 }else{
  result.innerText = "Your Age is :- "+age;
 }
}






// function calculateAge() {
//     var birthdateInput = document.getElementById("birthdate");
//     var birthdate = new Date(birthdateInput.value);
//     var currentDate = new Date();
//     var age = currentDate.getFullYear() - birthdate.getFullYear();
//     var datee= birthdate.getDate(); 
//     var month = birthdate.getMonth();
//     console.log(birthdate,currentDate);
//     console.log(age);
//     console.log(datee, month+1);
    // if (
    //   currentDate.getMonth() < birthdate.getMonth() ||
    //   (currentDate.getMonth() === birthdate.getMonth() &&
    //     currentDate.getDate() < birthdate.getDate())
    // ) {
    //   age--;
    // }
  //   var resultElement = document.getElementById("result");
  //   resultElement.innerHTML = "Your age is: " + age + " years";
  // }