import {Rectangle} from "./Rectangle";

export class Square extends Rectangle{

    constructor(color: string, filled: boolean, side:number) {
        super(color, filled, side , side);
    }
    getSide():number{
        return this.width
    }
    setSide(side:number){
        this.width=side;
        this.length=side
    }
    setWidth(width:number){
        this.setSide(width)
    }
    setLength(length:number){
        this.setSide(length)
    }
    toString(): string {
        return `A Square with ${this.getSide()}, which is a subclass of ${super.toString()}`

    }
}
// let square = new Square('red',false,5)
// console.log(square)
// console.log(square.getPerimeter())