function checkGrade() {
        let userInput = document.getElementById("user").value;
        let showGrade = document.getElementById("show");
        let showRemark = document.getElementById("remark");

        if (userInput == "") {
          showGrade.innerHTML = `
            <div class="validation-message">
              Please kindly input a Score.
            </div>
          `;
          showRemark.innerHTML = "";

        } else if (userInput > 100) {
          showGrade.innerHTML = `
            <div class="validation-message">
              Enter a valid Score between 0 and 100.
            </div>
          `;
          showRemark.innerHTML = "";
          document.getElementById("user").value = "";

        } else if (userInput < 0) {
          showGrade.innerHTML = `
            <div class="validation-message">
              Enter a valid Score between 0 and 100.
            </div>
          `;
          showRemark.innerHTML = "";

        } else {
          if (userInput >= 70) {
            showGrade.innerHTML = `<h1>${"Your Grade is: A"}</h1>`;
            showRemark.innerHTML = `<p>${"Remark: Excellent "}</p>`;
            document.getElementById("user").value = "";
          } else if (userInput >= 60) {
            showGrade.innerHTML = `<h1>${"Your Grade is: B"}</h1>`;
            showRemark.innerHTML = `<p>${"Remark: Very Good "}</p>`;
            document.getElementById("user").value = "";
          } else if (userInput >= 50) {
            showGrade.innerHTML = `<h1>${"Your Grade is: C"}</h1>`;
            showRemark.innerHTML = `<p>${"Remark: Good "}</p>`;
            document.getElementById("user").value = "";
          } else if (userInput >= 45) {
            showGrade.innerHTML = `<h1>${"Your Grade is: D"}</h1>`;
            showRemark.innerHTML = `<p>${"Remark: Fair "}</p>`;
            document.getElementById("user").value = "";
          } else if (userInput >= 40) {
            showGrade.innerHTML = `<h1>${"Your Grade is: E"}</h1>`;
            showRemark.innerHTML = `<p>${"Remark: Pass "}</p>`;
            document.getElementById("user").value = "";
          } else {
            showGrade.innerHTML = `<h1>${"Your Grade is: F"}</h1>`;
            showRemark.innerHTML = `<p>${"Remark: Fail"}</p>`;
            document.getElementById("user").value = "";
          }
        }
      }