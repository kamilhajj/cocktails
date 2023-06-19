import axios from 'axios';

export async function  Filterbyalcoholic (filter:string) {

    try {
        const response = await axios.get(` https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${filter}`);
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

export async function   FilterbyCategory (category:string) {

    try {
        const response = await axios.get(` https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
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

export async function    FilterbyGlass (glass:string) {

    try {
        const response = await axios.get(` https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass}`);
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
