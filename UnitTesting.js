// test 1
function stringLength(string) {
   if(string.length > 0 && string.length < 10 ) {
    return string.length;
 } 
 throw 'condition not meet';
}
function reverseString(string){
 return string.split("").reverse().join("");
}

class Calculator{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    add(){
        return this.a + this.b;
    }
    subtract(){
        return this.a - this.b;
    }
    divide(){
        return this.a / this.b;
    }
    multiply(){
        return this.a * this.b;
    }

}
module.exports = { stringLength, reverseString, Calculator};