 export class Shape {
    private _color :string;
    private _filled : boolean;

    set color(value: string) {
        this._color = value;
    }

    set filled(value: boolean) {
        this._filled = value;
    }

    get color(): string {
        return this._color;
    }

    get filled(): boolean {
        return this._filled;
    }

    constructor(color: string, filled: boolean) {
        this._color = color;
        this._filled = filled;
    }

    public toString() :string{
        return 'A shape with color of '
        + this.color
        + (this.filled? ' filled' : ' not filled')
    }
}
// let shape = new Shape('blue',false)
//  console.log(shape.toString())