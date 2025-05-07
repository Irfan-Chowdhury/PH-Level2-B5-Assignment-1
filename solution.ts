function formatString(input: string, toUpper?: boolean): string {
    if (toUpper==null ||toUpper) {
        return input.toUpperCase();
    } 
    return input.toLowerCase();
}

// console.log(formatString("Hello"));
// console.log(formatString("Hello", true));
// console.log(formatString("Hello", false));


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}


// const books = [
//     { title: "Book A", rating: 4.5 },
//     { title: "Book B", rating: 3.2 },
//     { title: "Book C", rating: 5.0 }
//   ];
//   console.log(filterByRating(books)); 

