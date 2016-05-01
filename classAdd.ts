module Example{
	class Add{
		sum: number = 0;
		count: number = 0;
		
		add(arr: number[]):{}{
			this.count = arr.length;
			arr.forEach((value)=>{
				console.log(value);
				this.sum = this.sum + value;
			});
			return {'sum': this.sum, 'count': this.count};
		}
	}
	let x = new Add();
	 console.log(x.add([5, 6, 90, 76, 43, 45, 56]));

}

