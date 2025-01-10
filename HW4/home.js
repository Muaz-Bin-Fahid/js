//Q1
let shape = "";
shape = prompt("Enter the shape (Circle, Rectangle, Triangle):");

if (shape === "circle") {
    //parsefloat for float values
    let r = parseFloat(prompt("Enter the radius:"));
    //is nan for greater than zero and validity
    if (!isNaN(r) && r > 0) {
        const pi = 3.141;
        console.log("The area of the circle is: " + (pi * r * r));
    } else {
        console.log("Invalid radius. Please enter a positive number.");
    }
}
//area rectangle
else if(shape=="rectangle"){
    let l = (prompt("Enter the length:"));
    let w = (prompt("Enter the Width:"));
    console.log("The area of rectangle is:"+(l*w));

}
//Area of triangle 
else if(shape=="triangle")

    {
        let b = (prompt("Enter the Base:"));
        let h = (prompt("Enter the Height:"));
        console.log("The area of triangle is:"+(b*h/2))
    }
    //any other shape enter by user
else {
    console.log("Shape not recognized or not implemented.");
}
