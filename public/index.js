let temp = "";

// Getting the form element
const Form = document.getElementById("Form");
Form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const inputData = document.getElementById("inputData").value;
  try {
    const parseData = JSON.parse(inputData);
    const res = await fetch("/json-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parseData),
    });
    const response = await res.json();

    temp = response;

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Request Send Successfully",
      showConfirmButton: false,
      timer: 2500,
    });

    // Calling the 'display' function to display the response
    display(temp);
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...   Invalid JSON format",
      text: "Please write correct JSON format.",
    });
  }
});

// displaying the input data in the 'formContainer' div
function display(data) {
  const formContainer = document.getElementById("formContainer");
  formContainer.style.display = "block";
  formContainer.innerHTML = "";
  const cont = document.createElement("div");
  for (let key in data) {
    const div = document.createElement("div");
    div.setAttribute("class", "output-div");
    const label = document.createElement("label");
    label.innerText = key;
    label.setAttribute("class", "output-label");
    const input = document.createElement("input");
    input.type = "text";
    input.name = key;
    input.value = data[key];
    input.setAttribute("class", "output-input");
    const lineBreak = document.createElement("br");
    div.append(label, input, lineBreak);
    cont.append(div);
  }
  formContainer.append(cont);
}
