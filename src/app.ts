
import { Lookuparandomcocktail, Searchbyingredient, categories ,glasses, ingredients, alcoholicfilters} from './search';
import readline from 'readline';
import {Lookupfullcocktaildetailsbyid,LookupingredientbyID } from './lookupbyid';
import {Filterbyalcoholic,FilterbyCategory,FilterbyGlass} from'./filter';
import { searchcocktail ,searchcocktailbyfirstletter,Searchingredientbyname} from './searchcocktails';
const figlet = require("figlet")
console.log(figlet.textSync("Welcome  to  my  bar"))

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

async function getInput(prompt: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(prompt, (input) => {
      resolve(input);
    });
  });
}

async function handleInputs() {
  const userInput1 = await getInput('Enter cocktail name to search: ');
  searchcocktail(userInput1);

  const userInput2 = await getInput('Enter first letter to search for cocktails: ');
  searchcocktailbyfirstletter(userInput2);

  const userInput3 = await getInput('Enter ingredient by name to search for cocktails: ');
  Searchingredientbyname(userInput3);

  const userInput4 = await getInput('Enter id  to search for cocktails: ');
  Lookupfullcocktaildetailsbyid(userInput4);

  const userInput5 = await getInput('look up ingredient by id');
  LookupingredientbyID(userInput5);

  const userInput6= await getInput('lookup random cocktail');
  Lookuparandomcocktail();

  const userInput7 = await getInput('search by ingredient');
  Searchbyingredient(userInput7);

  const userInput8 = await getInput('filter by alcoholic');
  Filterbyalcoholic(userInput8);

  const userInput9 = await getInput('filter by category');
  FilterbyCategory (userInput9);

  const userInput10 = await getInput('filter by class');
  FilterbyGlass(userInput10);

  const userInput11 = await getInput('categories');
  categories();

  const userInput12= await getInput('glasses');
  glasses();

  const userInput13 = await getInput('ingredients');
  ingredients();

  const userInput14 = await getInput('alcoholic filters');
  alcoholicfilters();









  // Add more prompts and corresponding function calls as needed
}

// Call the function to start handling inputs
handleInputs().then(() => {
  console.log('All inputs handled.');
  rl.close();
});

// npm run build
//node dist/app.js