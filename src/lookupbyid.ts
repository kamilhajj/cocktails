import axios from 'axios';

export async function   Lookupfullcocktaildetailsbyid(id: string) {

    try {
        const response = await axios.get(` https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
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
            console.log(' instructionIT: ', drink.strInstructionsIT, '\n');
            console.log('ingredients : \n');
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

export async function LookupingredientbyID(ID: string) {

    try {
        const response = await axios.get(` https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${ID}`);
        for ( const ingredient of response.data.ingredients) {
            console.log(' ingredientid: ', ingredient.idIngredient);
            console.log(' stringredient: ', ingredient.strIngredient,);
            console.log(' strdescription: ',ingredient.strDescription,)
            console.log(' type: ', ingredient.strType);
            console.log(' stralcohol: ', ingredient.strAlcohol);
            console.log(' atrabv: ', ingredient.strABV);
        }
    
    }

    catch (error:any) {
    console.error('error making api call', error.message);
}
}