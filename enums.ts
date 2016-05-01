// TypeScript enables programmers to summarize a set of numeric constants as an enum type
// When enums are declared with the const modifier, the TypeScript compiler will 
// emit for an enum member a JavaScript constant corresponding to that member's 
// assigned value (annotated with a comment). This improves performance on many JavaScript engines.
const enum color { 'Red', 'Blue', 'Green' };
let myFavoriteColor: color = color.Blue;
switch (myFavoriteColor) {
	case color.Blue:
		console.log('My Favorite Color: ', 'Blue');
		break;
	case color.Red:
		console.log('My Favorite Color: ', 'Red');
		break;
	case color.Green:
		console.log('My Favorite Color: ', 'Green');
		break;
}
