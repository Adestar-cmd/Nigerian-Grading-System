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
  } else if (userInput > 5.0) {
    showGrade.innerHTML = `
            <div class="validation-message">
                Invalid Grade Point. Please enter a value between 0 and 5.00.
            </div>
        `;

    showRemark.innerHTML = "";
    document.getElementById("user").value = "";
  } else if (userInput < 0) {
    showGrade.innerHTML = `
            <div class="validation-message">
                Invalid Grade Point. Please enter a value between 0 and 5.00.
            </div>
        `;
         showRemark.innerHTML = "";
  } else {
    if (userInput >= 4.5) {
      showGrade.innerHTML = `<h1>Classification: First Class</h1>`;
      showRemark.innerHTML = `<p>Remark: Excellent</p>`;
      document.getElementById("user").value = "";
    } else if (userInput >= 3.5 && userInput < 4.5) {
      showGrade.innerHTML = `<h1>Classification: Second Class Upper</h1>`;
      showRemark.innerHTML = `<p>Remark: Very Good</p>`;
      document.getElementById("user").value = "";
    } else if (userInput >= 2.4 && userInput < 3.5) {
      showGrade.innerHTML = `<h1>Classification: Second Class Lower</h1>`;
      showRemark.innerHTML = `<p>Remark: Good</p>`;
      document.getElementById("user").value = "";
    } else if (userInput >= 1.5 && userInput < 2.4) {
      showGrade.innerHTML = `<h1>Classification: Third Class</h1>`;
      showRemark.innerHTML = `<p>Remark: Pass</p>`;
      document.getElementById("user").value = "";
    } else if (userInput >= 1.0 && userInput < 1.5) {
      showGrade.innerHTML = `<h1>Classification: Pass</h1>`;
      showRemark.innerHTML = `<p>Remark: Weak Pass</p>`;
      document.getElementById("user").value = "";
    } else {
      showGrade.innerHTML = `<h1>Classification: Fail</h1>`;
      showRemark.innerHTML = `<p>Remark: Fail</p>`;
      document.getElementById("user").value = "";
    }
  }
}
