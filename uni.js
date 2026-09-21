function checkGrade() {
        let userInput = document.getElementById("user").value;
        let showGrade = document.getElementById("show");
        let showRemark = document.getElementById("remark");

        if (userInput == "") {
          alert("Please kindly input a score");
        } else if (userInput > 5.00) {
          alert("Please enter a valid score");
        } else if (userInput < 0) {
          alert("Please enter a valid score");
        } else {
          if (userInput >= 4.50) {
            showGrade.innerHTML = `<h1>${"Your Grade is: First Class"}</h1>`;
            showRemark.innerHTML = `<p>${"Remark: Excellent "}</p>`;
            document.getElementById("user").value = "";
          } else if (userInput >= 3.50 && userInput < 4.50) {
            showGrade.innerHTML = `<h1>${"Your Grade is: Second Class Upper"}</h1>`;
            showRemark.innerHTML = `<p>${"Remark: Very Good "}</p>`;
            document.getElementById("user").value = "";
          } else if (userInput >= 2.40 && userInput < 3.50) {
            showGrade.innerHTML = `<h1>${"Your Grade is: Second Class Lower"}</h1>`;
            showRemark.innerHTML = `<p>${"Remark: Good "}</p>`;
            document.getElementById("user").value = "";
          } else if (userInput >= 1.50 && userInput < 2.40) {
            showGrade.innerHTML = `<h1>${"Your Grade is: Third Class"}</h1>`;
            showRemark.innerHTML = `<p>${"Remark: Pass "}</p>`;
            document.getElementById("user").value = "";
          } else if (userInput >= 1.00 && userInput < 1.50) {
            showGrade.innerHTML = `<h1>${"Your Grade is: Pass"}</h1>`;
            showRemark.innerHTML = `<p>${"Remark: Weak Pass "}</p>`;
            document.getElementById("user").value = "";
          } else {
            showGrade.innerHTML = `<h1>${"Your Grade is: Fail"}</h1>`;
            showRemark.innerHTML = `<p>${"Remark: Fail"}</p>`;
            document.getElementById("user").value = "";
          }
        }
      }