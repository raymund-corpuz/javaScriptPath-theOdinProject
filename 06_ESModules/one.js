const myGreeting = (() => {
  const greetingString = "Hello Odinites";
  const farewellString = "Bye bye Odinite";

  return greetingString;
})();

//ES6 Modules =============================>
export const hello = "Hello EveryOne";
export const bye = "Bye Bye na";

export const defaultGreeting = "hello from export default";

//Exprting declarations =========================>

export let name1, name2; // also var
export const name11, name22; // also var

//let
export function functionName() { /*    */ }
export class ClassName{ /*     */ }
export function* generatorFunction() { /*   */ }
export const { name111, name222: bar } = 0;
export const [name10, name20] = Array

//Export List
export { name100, /*   */ nameN }
export { variable1 as name1, varibale2 as name2 }
export { variable as "string name" }
export { name1 as default }


//Default exports
export default expressions;
export default function functionName1() { /*    */ }
export default class ClassName{/*    */ }
export default function* generatorFunctionName(){/*    */}

