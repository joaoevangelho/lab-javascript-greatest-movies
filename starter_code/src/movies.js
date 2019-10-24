/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

const calculateAverageMovieRate = array => {
    const sumMovies = array.reduce((accumulator, value, index, originalArray) => {
    return (accumulator + value.rate);
    }, 0);
    return (sumMovies/array.length);
   }
   console.log(calculateAverageMovieRate(MOVIES));


// Iteration 2: Drama movies - Get the average of Drama Movies

function calculateAverageDramaRate(array) {
    const dramaMovies = array.filter((value) => {
      return value.genre.includes('Drama')
    });
    return calculateAverageMovieRate(dramaMovies);
   }
    
   
   
// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByYear (array) {
    array.sort((a, b) => a.year > b.year ? 1 : -1);
    return array;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct



// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (array) {
    const newArray = [ ...array].sort((a, b) => a.title > b.title ? 1 : -1);
    const list = newArray.map(value)
    //.slice(0, 20);
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
