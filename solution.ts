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


function concatenateArrays<T>(...arrays: T[][]): T[] {
    // return arrays.flat();
    const result: T[] = [];
    for (let i = 0; i < arrays.length; i++) {
        const currentArray = arrays[i];
        for (let j = 0; j < currentArray.length; j++) {
            result.push(currentArray[j]);
        }
    }
    return result;
}

// console.log(concatenateArrays(["a", "b"], ["c"]));
// console.log(concatenateArrays([1, 2], [3, 4], [5]));     // Output: [1, 2, 3, 4, 5]);



class Vehicle{
    private make: string;
    private year: number;

    constructor(make: string, year: number){
        this.make = make;
        this.year = year;
    }

    public getInfo(){
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle{
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    public getModel(){
        return `Model: ${this.model}`;
    }
}

// const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo());
// console.log(myCar.getModel());   