/// <reference path="typings/jquery/jquery.d.ts" />
$(document).ready(function () {
    var calc = new Calculator('X', 'Y', 'output');
    // calc.wireEvents();
});

class Calculator{
    private x: JQuery;
    private y: JQuery;
    private output: JQuery;
    
    constructor(x: string, y: string, output: string){
        this.x = $('#'+x);
        console.log(this.x);
        this.y = $('#'+y);
        this.output = $('output'+output);
        this.wireEvents();
    }
    
     private wireEvents(){
        $('#Add').click(function () {
            console.log(this.x);
            this.output.html = this.add(parseInt(this.x.val()), parseInt(this.y.val())) ;
        });
        
        $('#Subtract').click(function () {
            this.output.html = this.subtract(parseInt(this.x.val()), parseInt(this.y.val())) ;
        })

    }
    
    add(a: number, b: number){
        return a + b;
    }
    substract(a: number, b: number){
        return a - b;
    }
    
}