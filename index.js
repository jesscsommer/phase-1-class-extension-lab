class Polygon {
    constructor(intArray){
        this.intArray = intArray;
    }
    get countSides(){
        return this.intArray.length;
    }
    get perimeter(){
        return this.intArray.reduce((acc, current) => acc + current)
    }
}

class Triangle extends Polygon {
    get isValid(){
        const [a, b, c] = this.intArray
        return a + b > c && b + c > a && a + c > b
    }
}

class Square extends Polygon {
    get isValid(){
        const [a, b, c, d] = this.intArray
        return (a === b && b === c && c === d)
    }
    get area(){
       return this.intArray[0] ** 2
    }
}