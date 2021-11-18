import { App } from './app.js';
import { Menu } from './menu.js';

const header = document.querySelector('[data-header]');
const burgerButton = document.querySelector('[data-dropdown-button]');
const navigationMenu = document.querySelector('[data-dropdown-menu]');

const menu = new Menu(header, burgerButton, navigationMenu);
const app = new App(menu);
app.initMenu();
