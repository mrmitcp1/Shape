import {Shape} from "./shape";

export class Circle extends Shape{
    private _radius : number = 1

    constructor(color: string, filled: boolean, radius: number) {
        super(color, filled);
        this._radius = radius;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }
    getArea():number{
        return this._radius * this._radius * Math.PI;
    }
    getPerimeter():number{
        return this._radius*2 *Math.PI
    }
    toString(): string {
        return 'A Circle with radius = '
        + this.radius
        +' , which is a subclass of '
        + super.toString()
    }
}
// let circle = new Circle('blue',false,3)
// console.log(circle.getArea())
// console.log(circle.getPerimeter())
// console.log(circle.toString())