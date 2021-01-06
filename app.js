import {createInput, createLabel, createDiv} from "./HTML";

let result = document.getElementById('result');

createDiv("Text de blabla pas commun!", result);

createLabel('E-Mail', result);

createInput('email', result);

createLabel('Password:', result);

createInput('password', result);