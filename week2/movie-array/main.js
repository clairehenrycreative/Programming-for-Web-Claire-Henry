const favmovies = ['Ponyo', 'Jaws', 'Starwars', 'Princess and the Frog' , 'LaLa Land' ];
console.log(favmovies);
const usermovie = window.prompt('Enter Your Favorite Movie');
favmovies.push(usermovie);
console.log('Our list of favorite movies are ' + favmovies.toString(usermovie));