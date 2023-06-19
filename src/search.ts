import axios from 'axios';
import { error } from 'console';

export async function  Lookuparandomcocktail() {

    try {
        const response = await axios.get(` https://www.thecocktaildb.com/api/json/v1/1/random.php`);
        for ( const drink of response.data.drinks) {
            console.log(' drink name : ', drink.strDrink);
            console.log(' drink id: ', drink.idDrink,);
            console.log(' tags: ',drink.strTags,)
            console.log(' video: ', drink.strVideo);
            console.log(' category: ', drink.strCategory);
            console.log(' IBA: ', drink.strIBA);
            console.log(' alcoholic: ', drink.strAlcoholic);
            console.log(' glass: ', drink.strGlass);
            console.log(' instructions: ', drink.strInstructions);
            console.log(' instructionsDE: ', drink.strInstructionsDE);
            console.log(' instructionIT: ', drink.strInstructionsIT, '/n');
            console.log('ingredients : /n ');
            for (let i = 1  ; i <= 15  ; i++) {

                let ingredient = 'strIngredient' + i; 
                let measure = 'strMeasure' + i; 

                if ( drink[ingredient] != null && drink[measure] != null ) { 

                // console.log(drink[ingrediemt])
                // condole.log(drink[measure])
                 console.log(drink[measure]  , 'of' , drink[ingredient])

                }
            }
             console.log(' image source: ', drink.strImageSource);
             console.log(' image attribution: ', drink.strImageAttribution);
             console.log(' creative common confirmed: ',drink.strCreativeCommonsConfirmed)
             console.log(' date modified: ', drink.dateModified);


        }
    }
    

    catch (error:any) {
    console.error('error making api call', error.message);
}
}

export async function  Searchbyingredient(ingredient:string) {

    try {
        const response = await axios.get(` https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        for ( const drink of response.data.drinks) {
            console.log(' drink name: ',drink.strDrink)
            console.log(' link: ',drink.strDrinkThumb)
            console.log(' drink id: ',drink.idDrink)
        }
    }

    catch (error:any) {
    console.error('error making api call', error.message);
}
}

export async function  categories () {

    try {
        const response = await axios.get(` https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`);

        for ( const drink of response.data.drinks) {
            console.log(' category: ',drink.strCategory)
        }
    }

    catch (error:any) {
    console.error('error making api call', error.message);
}
}

export async function  glasses () {

    try {
        const response = await axios.get(` https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list`);
       
        for ( const drink of response.data.drinks) {
            console.log(' glass type: ',drink.strGlass)
        }
    }

    catch (error:any) {
    console.error('error making api call', error.message);
}
}

export async function ingredients() {

    try {
        const response = await axios.get(` https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`);
        
        for ( const drink of response.data.drinks) {
            console.log(' ingredients: ',drink.strIngredient)
        }
    }

    catch (error:any) {
    console.error('error making api call', error.message);
}
}

export async function alcoholicfilters() {

    try {
        const response = await axios.get(` https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list`);
        
        for ( const drink of response.data.drinks) {
            console.log(' alcoholic drink: ',drink.strAlcoholic)
        }
    }

    catch (error:any) {
    console.error('error making api call', error.message);
}
}