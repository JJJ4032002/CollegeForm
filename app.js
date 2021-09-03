let form = document.querySelector("#formStudDetails");
console.log(form.children);
let courseForm = document.querySelector(".courseForm");
console.log(courseForm.elements);

let btn = document.body.querySelector("button");
btn.addEventListener("click", ButtonClicked );
let studDetails = document.querySelectorAll(".details");
let GradeInputs = document.querySelectorAll(".dispGrade");
 
 

function ButtonClicked(e){
  e.preventDefault();
  const name  = form.elements[0].value;
  const sem = form.elements[1].value;
  const roll = form.elements[2].value;
  const branch = form.elements[3].value;
  let detailsArr = [];
  detailsArr = [name,sem,roll,branch];
  let course1 = courseForm.elements[0].value;
  let course2 = courseForm.elements[1].value;
  let course3 = courseForm.elements[2].value;
  let course4 = courseForm.elements[3].value;
  let course5 = courseForm.elements[4].value;
   
  let courseArr = [course1,course2,course3,course4,course5];
  let TOCalcCgpa = 0;

  
  if(name === "" || branch === "" || sem === "" || roll === "" || course1 === "" || course2 === ""|| course3 === ""|| course4 === "" || course5 === ""){
      alert("Please enter all the values")
  }
  else{
     studDetails.forEach(function(e,i){
         e.value = detailsArr[i];
     });
      GradeInputs.forEach(function(e,i){
        convt = Number(courseArr[i]);
        if(convt >= 81 && convt <= 100){
           e.value = "A+";
           TOCalcCgpa = TOCalcCgpa + 10;
        }
        else if(convt >= 72 && convt <= 80 ){
          e.value = "A"
          TOCalcCgpa = TOCalcCgpa + 9;
        }
         else if(convt >= 64 && convt <= 71 ){
          e.value = "B+"
          TOCalcCgpa = TOCalcCgpa + 8;
        }
         else if(convt >= 56 && convt <= 63 ){
          e.value = "B"
          TOCalcCgpa = TOCalcCgpa + 7;
        }
         else if(convt >= 48 && convt <= 55 ){
          e.value = "C+"
          TOCalcCgpa = TOCalcCgpa + 6;
        }
         else if(convt >= 42 && convt <= 47 ){
          e.value = "C"
          TOCalcCgpa = TOCalcCgpa + 5;
        }
         else if(convt >= 40 && convt <= 41 ){
          e.value = "D"
          TOCalcCgpa = TOCalcCgpa + 4;
        }
         else if(convt >= 0 && convt <= 39 ){
          e.value = "F"
          TOCalcCgpa = TOCalcCgpa + 0;
        }
      });
      const Cgpa = TOCalcCgpa / 5;
      const cgpaInput = document.body.querySelector("#Cgpa");
      cgpaInput.value = Cgpa;


  }
}
