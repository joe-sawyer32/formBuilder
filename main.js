var formData = [
  {
    type: "text",
    label: "First Name",
    id: "user-first-name",
    icon: "fa-user",
    options: []
  },
  {
    type: "text",
    label: "Last Name",
    id: "user-last-name",
    icon: "fa-user",
    options: []
  },
  {
    type: "email",
    label: "Email Address",
    id: "user-email",
    icon: "fa-envelope",
    options: []
  },
  {
    type: "text",
    label: "Current website url",
    id: "user-website",
    icon: "fa-globe",
    options: []
  },
  {
    type: "select",
    label: "Select Language",
    id: "user-language",
    icon: "",
    options: [
      {
        label: "English",
        value: "EN"
      },
      {
        label: "French",
        value: "FR"
      },
      {
        label: "Spanish",
        value: "SP"
      },
      {
        label: "Chinese",
        value: "CH"
      },
      {
        label: "Japanese",
        value: "JP"
      }
    ]
  },
  {
    type: "textarea",
    label: "Your Comment",
    id: "user-comment",
    icon: "fa-comments",
    options: []
  },
  {
    type: "tel",
    label: "Mobil Number",
    id: "user-mobile",
    icon: "fa-mobile-phone",
    options: []
  },
  {
    type: "tel",
    label: "Home Number",
    id: "user-phone",
    icon: "fa-phone",
    options: []
  }
];

var form = document.querySelector("#formInput");

function createTextInput(textObject) {
  var newInput = document.createElement("input");
  newInput.type = textObject.type;
  newInput.className = "input";
  newInput.id = textObject.id;
  newInput.placeholder = textObject.label;

  form.appendChild(newInput);
}

function createSelectInput(selectObject) {
  var newInput = document.createElement("select");
  newInput.type = selectObject.type;
  newInput.className = "input";
  newInput.id = selectObject.id;

  var defaultOption = document.createElement("option");
  defaultOption.value = selectObject.label;
  defaultOption.textContent = selectObject.label + "...";
  newInput.appendChild(defaultOption);

  var optionList = selectObject.options;
  for (let i = 0; i < optionList.length; i++) {
    let newOption = document.createElement("option");
    var optionObject = selectObject.options[i];
    newOption.value = optionObject.value;
    newOption.textContent = optionObject.label;
    newInput.appendChild(newOption);
  }

  form.appendChild(newInput);
}

function createTextAreaInput(textAreaObject) {
  var newInput = document.createElement("textarea");
  newInput.type = textAreaObject.type;
  newInput.className = "input";
  newInput.id = textAreaObject.id;
  newInput.placeholder = textAreaObject.label;

  form.appendChild(newInput);
}

for (let i = 0; i < formData.length; i++) {
  var formObject = formData[i];
  var type = formObject.type;
  if (type == "text" || type == "email" || type == "tel") {
    createTextInput(formObject);
  } else if (type == "select") {
    createSelectInput(formObject);
  } else if (type == "textarea") {
    createTextAreaInput(formObject);
  }
}
