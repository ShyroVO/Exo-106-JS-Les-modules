export {createDiv, createLabel, createInput};

function createDiv (text, parent){
    let createDiv = document.createElement('div');
    parent.append(createDiv);
    createDiv.innerHTML += text + "<br>";
}

function createInput (typeInput, parent){
    let createInput = document.createElement('input');
    createInput.type = typeInput;
    parent.append(createInput);
}

function createLabel (text, parent){
    let createLabel = document.createElement('label');
    createLabel.innerHTML = text;
    parent.append(createLabel);
}

