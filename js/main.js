const resultField = document.querySelector(".result");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.onclick = () => {
    if (button.classList.contains("digit")) digitClicked(button.textContent);
    else if (button.classList.contains("operator"))
      operatorClicked(button.textContent);
    else if (button.classList.contains("dot")) dotClicked();
    else if (button.classList.contains("dlt")) dltClicked();
  };
});

const digitClicked = (digit) => {
  resultField.textContent += digit;
};

const operatorClicked = (operator) => {
  if (resultField.textContent.length < 1) {
    console.log("no num");
    return;
  } else {
    if (operator === "=") {
      console.log(eval(resultField.textContent));
      resultField.textContent = eval(resultField.textContent);
    } else if (
      resultField.innerHTML.indexOf("+") != -1 ||
      resultField.innerHTML.indexOf("-") != -1 ||
      resultField.innerHTML.indexOf("*") != -1 ||
      resultField.innerHTML.indexOf("/") != -1
    ) {
      console.log("calc");
      try {
        resultField.textContent = eval(resultField.textContent);
        resultField.textContent += operator;
      } catch (err) {
        console.log(`Error: $err`);
      }
    } else {
      resultField.textContent += operator;
    }
  }
};

const dotClicked = () => {
  if (resultField.innerHTML.indexOf(".") != -1) {
    return;
  } else {
    resultField.textContent += ".";
  }
};

const dltClicked = () => {
  if (resultField.textContent.length < 1) {
    return;
  } else {
    resultField.textContent = resultField.textContent.slice(
      0,
      resultField.textContent.length - 1
    );
  }
};
