// There are three main primitives in JavaScript and TypeScript.

//* boolean - true or false values
//* number - whole numbers and floating point values
//* string - text values like "TypeScript Rocks"
// There are also 2 less common primitives used in later versions of Javascript and TypeScript.
// -----------------------------------------
//* bigint - whole numbers and floating point values, but allows larger negative and positive numbers than the number type.
//* symbol are used to create a globally unique identifier.
// -----------------------------------------
//** Type Assignment
// When creating a variable, there are two main ways TypeScript assigns a type:

// Explicit ---- 
let firstNameExp: string = "Dylan";
// Implicit ---- 
let firstName2Imp = "Dylan";
// -----------------------------------------

//** Type: any
// any is a type that disables type checking and effectively allows all types to be used.

let anyV: any = true;

//** Type: unknown
// unknown is a similar, but safer alternative to any.

let unknownV: unknown = 1;
// -----------------------------------------

//** Type: never
// never effectively throws an error whenever it is defined.

//? let neverV: never = true; // Error: Type 'boolean' is not assignable to type 'never'.

// ** Type: undefined & null
// undefined and null are types that refer to the JavaScript primitives undefined and null respectively.

let y: undefined = undefined;
let z: null = null;

// -----------------------------------------

// ** Arrays

const names1: string[] = [];
const namesExp: readonly string[] = ["Dylan"];
const numbersImp = [1, 2, 3]; // inferred to type number[]

// -----------------------------------------

//** Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.

// Tuples are great because they allow each element in the array to be a known type of value.

// To define a tuple, specify the type of each element in the array:

let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'Coding God was here'];

//** */ Readonly Tuple
// A good practice is to make your tuple readonly.

// Tuples only have strongly defined types for the initial values:

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
//? ourReadonlyTuple.push('Coding God took a day off');

// -----------------------------------------

//** */ Named Tuples
// Named tuples allow us to provide context for our values at each index.

const graph: [x: number, y: number] = [55.2, 41.3];

// -----------------------------------------

//** Destructuring Tuples
// Since tuples are arrays we can also destructure them.

const graph2: [number, number] = [55.2, 41.3];
const [x2, y2] = graph;

// -----------------------------------------

