var sem = 2;
var totalGrade = 0 , totalCredit = 0;
document.querySelector(".small-btn").addEventListener("click",function()
{
    let ok = add();
        if (sem > 8) {
        alert("There are only 8 semesters you STUPIDD");
    } else {
        if(ok)
        {
        document.querySelector(".header").innerHTML = "SEM " + sem;
        sem++;
        }
    }
});

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
    let ok = add();
    if(ok)
    {
    var cgpa = totalGrade / totalCredit;
    document.getElementById("cgpa-result").innerHTML = "<h3>Your CGPA is : </h3>"+cgpa.toFixed(2);
    document.getElementById("cgpa-result").style.display = "flex";
    document.getElementById("show").innerHTML = "";
    }
});
