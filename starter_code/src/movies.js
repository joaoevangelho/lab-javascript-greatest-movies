/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

const calculateAverageMovieRate = array => {
    const sumMovies = array.reduce((accumulator, value) => {
    return (accumulator + value.rate);
    }, 0);
    return (sumMovies/array.length);
   }
calculateAverageMovieRate();
// Iteration 2: Drama movies - Get the average of Drama Movies

function calculateAverageDramaRate(array) {
    const dramaMovies = array.filter((value) => {
      return value.genre.includes('Drama')
    });
    if (dramaMovies.length === 0) {
      return 0;
    } else {
      return calculateAverageMovieRate(dramaMovies);
    }
   }
   console.log(calculateAverageDramaRate(MOVIES));

   
   
// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByYear (array) {
    array.sort((a, b) => a.year > b.year ? 1 : -1);
    return array;
}
console.log(orderByYear(MOVIES));



// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function countSpielbergDramaMovies(array) {
    return array.filter(movie => {
      return movie.genre.includes('Drama') && movie.director === 'Steven Spielberg';
    }).length;
  }


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    let sorted20s = [...array];
    let finalList = [];
    sorted20s = sorted20s.sort((a,b) => {
    if (a.title > b.title) return 1
    if (a.title < b.title) return -1 });
    sorted20s = sorted20s.slice(0,20)
    for (let key in sorted20s) {
        finalList.push(sorted20s[key].title)
    }
    return finalList.slice(0,20);
   }
   console.log(orderAlphabetically(MOVIES));


   
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

/*
zé solution:

function turnHoursToMinutes (movies) {
    return movies.map(movie => {
        const duration = movie.duration.split(" ");
        let minutes = 0;
        for (let time of duration) {
            if(time.includes("h")) {
                minutes += parseInt(time) * 60;
            } else {
                minutes += parseInt(time) ;
            }
        }
        //console.log(duration)
       
        return movie;
    });
}
*/


// BONUS Iteration: Best yearly rate average - Best yearly rate average


/*
zé solution:

function bestYearAverage (movies) {
    {
        1995: [ 5, 8, 9]
    }
    const movieRatesByYear = movies.reduce((accumulator, movie) => {
        //const year = movie.year;
        //const rate = movie.rate;
        const { year, rate } = movie;
        if (!accumulator[year]) {
            accumulator[year] = [];
        }
        accumulator[year].push(rate);
        return accumulator;
    }, {});
    Object.entries(movieRatesByYear).map(item => {
        const rateArray = item[1];
        const averageRate = rateArray.reduce((sum, value) => sum + value / rateArray.length)
        console.log(item, averageRate);
    });
    console.log(movieRatesByYear)
}
*/