export {createDiv, createLabel, createInput};

function createDiv (text){
    let createDiv = document.createElement('div');
    createDiv.innerHTML = text;
}

function createInput (typeInput, value, text){
    let createInput = document.createElement('input');
    createInput.type = typeInput;
    createInput.value = value;
    createInput.innerHTML = text;
}

function createLabel (text){
    let createLabel = document.createElement('label');
    createLabel.innerHTML = text;
}

