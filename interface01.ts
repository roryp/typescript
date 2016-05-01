module Example{
	var area = (l: number, b: number) => (l * b);
	
	interface Circle{
		r: number;
		area:()=>number;		
	}
	
	var c: Circle = {
		r: 5,
		area:function(){
				return Math.PI * this.r * this.r; 
		}
};
	
	var rectArea = area(4, 3);
	var circArea = c.area();
	
	console.log("rectArea: ", rectArea);
	console.log("circArea: ", circArea);
		
	
	
}