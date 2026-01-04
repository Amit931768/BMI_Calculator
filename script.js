function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  let heightInput = parseFloat(document.getElementById("height").value);
  const result = document.getElementById("result");

  
  if (isNaN(weight) || isNaN(heightInput) || weight <= 0 || heightInput <= 0) {
    result.innerHTML = "Please enter valid weight and height";
    return;
  }

  let heightInch;


  if (heightInput <= 10) {
    heightInch = heightInput * 12;
  } else {
    heightInch = heightInput;
  }


  const heightMeter = (heightInch * 2.54) / 100;

  const bmi = (weight / (heightMeter * heightMeter)).toFixed(1);

  let status = "";
  if (bmi < 18.5) {
    status = "Underweight";
  } else if (bmi < 25) {
    status = "Normal weight";
  } else if (bmi < 30) {
    status = "Overweight";
  } else {
    status = "Obese";
  }

  result.innerHTML = `
    <p><b>BMI:</b> ${bmi}</p>
    <p><b>Status:</b> ${status}</p>
  `;
}
