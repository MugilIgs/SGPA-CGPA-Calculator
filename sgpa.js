var sem = 2,sub = 2;
var totalGrade = 0 , totalCredit = 0;
document.querySelector(".small-btn").addEventListener("click",function(grade,credit)
{
     let ok = add();
    if(ok) {
           document.querySelector(".gp").innerHTML = "SUB " + sub + " Grade Point";
           sub++;
     }
}
);

function add()
{
   var grade = parseFloat(document.querySelector(".grade").value);
   var credit = parseFloat(document.querySelector(".marks").value);
     
   if(!isNaN(grade) && !isNaN(credit))
   {
    totalGrade += grade * credit;
    totalCredit+=credit;

    document.querySelector(".grade").value = "";
    document.querySelector(".marks").value = "";
    return true;
   }
   else{
    alert("Your Grade or Credit it Empty");
    return false;
   }

}

document.querySelector(".btn").addEventListener("click",function(grade,credit)
{
  let ok =  add();
 if(ok) {
    var sgpa = totalGrade / totalCredit;
    document.getElementById("sgpa-result").innerHTML = "<h3>Your SGPA is : </h3>"+sgpa.toFixed(2);
    document.getElementById("sgpa-result").style.display = "flex";
  }
});
