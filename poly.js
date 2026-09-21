function checkGrade() {
        let userInput = document.getElementById("user").value;
        let showGrade = document.getElementById("show");
        let showRemark = document.getElementById("remark");

        if (userInput == "") {
          document.getElementById("show").innerHTML = 'Please kindly input a Grade Point' ;
          document.getElementById("remark").innerHTML = 'Please kindly input a Grade Point' ;
        } else if (userInput > 4.00) {
          document.getElementById("show").innerHTML = 'Enter a valid Grade Point' ;
          document.getElementById("remark").innerHTML = 'Enter a valid Grade Point' ;
          document.getElementById("user").value = "";
        } else if (userInput < 0) {
          document.getElementById("show").innerHTML = 'Enter a valid Grade Point' ;
          document.getElementById("remark").innerHTML = 'Enter a valid Grade Point' ;
        } else {
          if (userInput >= 3.50) {
            showGrade.innerHTML = `<h1>${"Your Grade is: Distinction"}</h1>`;
            showRemark.innerHTML = `<p>${"Remark: Excellent "}</p>`;
            document.getElementById("user").value = "";
          } else if (userInput >= 3.00 && userInput < 3.50) {
            showGrade.innerHTML = `<h1>${"Your Grade is: Upper Credit"}</h1>`;
            showRemark.innerHTML = `<p>${"Remark: Very Good "}</p>`;
            document.getElementById("user").value = "";
          } else if (userInput >= 2.50 && userInput < 3.00 ) {
            showGrade.innerHTML = `<h1>${"Your Grade is: Lower Credit"}</h1>`;
            showRemark.innerHTML = `<p>${"Remark: Good "}</p>`;
            document.getElementById("user").value = "";
          } else if (userInput >= 2.00 && userInput < 2.50) {
            showGrade.innerHTML = `<h1>${"Your Grade is: Pass"}</h1>`;
            showRemark.innerHTML = `<p>${"Remark: Fair "}</p>`;
            document.getElementById("user").value = "";
          }  else {
            showGrade.innerHTML = `<h1>${"Your Grade is: Fail"}</h1>`;
            showRemark.innerHTML = `<p>${"Remark: Fail"}</p>`;
            document.getElementById("user").value = "";
          }
        }
      }