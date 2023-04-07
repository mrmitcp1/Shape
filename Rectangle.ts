import {Shape} from "./shape";

export class Rectangle extends Shape{
    private _width:number;
    private _length:number;

    constructor(color: string, filled: boolean, width: number, length: number) {
        super(color, filled);
        this._width = width;
        this._length = length;
    }

    get width(): number {
        return this._width;
    }

    get length(): number {
        return this._length;
    }

    set width(value: number) {
        this._width = value;
    }

    set length(value: number) {
        this._length = value;
    }
    toString(): string {
        return `A Rectangle with ${this._width} and ${this._length}, which is a subclass of ${super.toString()}`

    }
    getArea():number{
        return this._width*this._length
    }
    getPerimeter():number{
        return (this._width+this._length)*2
    }

}
// let rectangle = new Rectangle('blue',false,10,5)
// console.log(rectangle.toString())
// console.log(rectangle.getPerimeter());
// console.log(rectangle.getArea());