import { greeting } from "./greeting";
import "./styles.css";

import odinImage from "./odin.png";

const image = document.createElement("img");
image.src = odinImage;

document.body.appendChild(image);

console.log(greeting);
