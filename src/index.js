import "./styles.css";
import { greeting } from "./template.js";

 if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
 }

const button = document.querySelector('.butt');
button.addEventListener('click', () => {
    const para = document.createElement('p');
    para.textContent = "Index.js is working fine";
    document.body.appendChild(para)
}) 

console.log(greeting);