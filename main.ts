import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {Square} from "./Square";

let circle = new Circle('red',true,10);
let rectangle = new Rectangle('red',false,10,5);
let square = new Square('red', true,5);
console.table([circle.getPerimeter(),circle.getArea(),circle.toString()])
console.table([rectangle.getPerimeter(),rectangle.getArea(),rectangle.toString()])
console.table([square.getArea(),square.getPerimeter(),square.toString()])