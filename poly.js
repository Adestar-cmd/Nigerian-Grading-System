function checkGrade() {
  let userInput = document.getElementById("user").value;
  let showGrade = document.getElementById("show");
  let showRemark = document.getElementById("remark");

  if (userInput == "") {
    showGrade.innerHTML = `
            <div class="validation-message">
                Please input your Grade Point.
            </div>
        `;

    showRemark.innerHTML = "";
  } else if (userInput > 4.0) {
    showGrade.innerHTML = `
            <div class="validation-message">
                Invalid Grade Point. Please enter a value between 0 and 4.00.
            </div>
        `;

    showRemark.innerHTML = "";
    document.getElementById("user").value = "";
  } else if (userInput < 0) {
    showGrade.innerHTML = `
            <div class="validation-message">
                Invalid Grade Point. Please enter a value between 0 and 4.00.
            </div>
        `;

    showRemark.innerHTML = "";
  } else {
    if (userInput >= 3.5) {
      showGrade.innerHTML = `<h1>Your Grade is: Distinction</h1>`;
      showRemark.innerHTML = `<p>Remark: Excellent</p>`;
      document.getElementById("user").value = "";
    } else if (userInput >= 3.0 && userInput < 3.5) {
      showGrade.innerHTML = `<h1>Your Grade is: Upper Credit</h1>`;
      showRemark.innerHTML = `<p>Remark: Very Good</p>`;
      document.getElementById("user").value = "";
    } else if (userInput >= 2.5 && userInput < 3.0) {
      showGrade.innerHTML = `<h1>Your Grade is: Lower Credit</h1>`;
      showRemark.innerHTML = `<p>Remark: Good</p>`;
      document.getElementById("user").value = "";
    } else if (userInput >= 2.0 && userInput < 2.5) {
      showGrade.innerHTML = `<h1>Your Grade is: Pass</h1>`;
      showRemark.innerHTML = `<p>Remark: Fair</p>`;
      document.getElementById("user").value = "";
    } else {
      showGrade.innerHTML = `<h1>Your Grade is: Fail</h1>`;
      showRemark.innerHTML = `<p>Remark: Fail</p>`;
      document.getElementById("user").value = "";
    }
  }
}
