// Import stylesheets
import { Size } from './Size';
import './style.css';

// Write TypeScript code!
let size: Size = new Size(30);
size = size.add(30);
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = '<h1>TypeScript Starter: ' + size.get() + ' </h1>';
