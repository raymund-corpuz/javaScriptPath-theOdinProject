import { hello, bye, defaultGreeting } from "./one.js";

console.log(hello);
console.log(defaultGreeting);

import defaultExport from "./one.js";
import * as name from "./one.js";
import { export1 } from "./one.js";
import { export11 as alias1 } from "./one.js";
import { export111, export222 } from "./one.js";
import { export10, export20 as alias20 } from "./one.js";
import { "string name" as alias } from "./one.js";
import defaultExport, { export1 } from "./one.js";
import defaultExport, * as name from "./one.js";
