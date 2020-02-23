function renderGPA(){
    var grade1 = document.getElementById("grade1").value;
    var grade2 = document.getElementById("grade2").value;
    var grade3 = document.getElementById("grade3").value;
    
    var credits1 = document.getElementById("credits1").value;
    var credits2 = document.getElementById("credits2").value;
    var credits3 = document.getElementById("credits3").value;
    
    var credits = new Array(credits1, credits1, credits3);
    
    var gpa1 = findGPA(grade1);
    var gpa2 = findGPA(grade2);
    var gpa3 = findGPA(grade3);
    
    var gpa = new Array(gpa1, gpa2, gpa3);
    
    var totalGPA;
    
    totalGPA = calculateGPA(gpa, credits);
    
    var result = document.createElement("P");
    result.innerText = "Your GPA is " + totalGPA;
    document.body.appendChild(result);
  }
  
  function findGPA(grade) {
    if(grade == 'A')
      return 4;
    if(grade == 'B')
      return 3;
    if(grade == 'C')
      return 2;
    if(grade == 'D')
      return 1;
    if(grade == 'F')
      return 0;
  }
  
  function calculateGPA(gpa, credits) {
    var gPoints = 0;
    var totalCredits = 0; 
  
  
    var size = credits.length;
    
    var i;
    
    
    for (i = 0; i<size; i++) {
      gPoints = gPoints + parseInt(gpa[i]) * parseInt(credits[i]);
      totalCredits = totalCredits + parseInt(credits[i]);
    }
    
  var finalGPA;
  finalGPA = (gPoints/totalCredits);
    
  return finalGPA.toFixed(2);
   
  }