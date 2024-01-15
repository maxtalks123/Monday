console.log("Hello, world");
const blogPosts = [
  "My first blog post",
  "My second blog post",
  "My Third blog post",
];
console.log(blogPosts);
console.log(blogPosts[0]);
console.log(blogPosts[1]);
console.log(blogPosts[2]); //output My Third blog post
blogPosts[3] = "My Fourth blog post";
console.log(blogPosts[3]);

const favouriteFoods = [
  "Beef wellington",
  "Chippy chips",
  "Cornish pasty",
  " KFC - korean fried chicken",
];
const favouriteColours = ["Red", "yellow", "Blue"];
const favouriteNumbers = [
  9,
  42,
  31,
  "I don't have any more favourite numbers!",
];
console.log(favouriteFoods, favouriteColours, favouriteNumbers);
console.log(favouriteNumbers.length - 1);
let whatIsMyFavouriteNumber = favouriteNumbers[favouriteNumbers.length - 1];
console.log(whatIsMyFavouriteNumber);

function allArrays(index1, index2, index3) {
  let favFood = favouriteFoods[index1],
    favClr = favouriteColours[index2],
    favNmbr = favouriteNumbers[index3];
  return [favFood, favClr, favNmbr];
}

allArrays([0], [1], [0]);
console.log(allArrays([0], [1], [0]));

// let array = [1,2,3,4]
// let x = array[0]
// let array2 = ['string', 'string2', 'string3']
// let array3 = ['boom', 'bop', 'pow']

// function findElement(index1, index2, index3) {
//     let cherryblossom = array[index1] // 1
//     let lillies = array2[index2] // 'string3'
//     let flowerpower = array3[index3] // 'pow'
//     return [cherryblossom, lillies, flowerpower] // [1, 'string3', 'pow']
// }

// findElement(0, 2, 2)
