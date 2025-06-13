import { NavBar } from "./nav/NavBar.js";
import { NavLink } from "./nav/NavLink.js";
import { AjustesComponent } from "./nav/AjustesComponent.js";
import { ColorSelector } from "./nav/ColorSelector.js";
import { FontSizeSelector } from "./shared/FontSizeSelector.js";
import { FontTypeSelector } from "../shared/FontTypeSelector.js";

customElements.define('nav-bar', NavBar);
customElements.define('nav-link', NavLink);
customElements.define('ajustes-component', AjustesComponent);
customElements.define('color-selector', ColorSelector);
customElements.define('font-size-selector', FontSizeSelector);
customElements.define('font-type-selector', FontTypeSelector);