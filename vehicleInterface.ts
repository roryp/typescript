module Example{
	interface Vehicle{
		numWheels: number,
		numHeadlights: number,
		start: () => void;
		go: (speed: number) => void,
		stop: () => void,
		manufacturer: Manufacturer,
		hasRearCamera?: boolean
	};

	interface Manufacturer{
		name: string,
		make: string,
		year: number
	};

	var myCar: Vehicle = {
		numWheels:4,
		numHeadlights: 2,
		start: function(){
			console.log("Starting Engine...");
		},

		go: function(speed: number){
			console.log('Can go at ', speed, ' mph.');
		},

		stop: function(){
			console.log('Stopping Engine');
		},

		manufacturer: {
			name: 'Toyota',
			make: 'Camry',
			year: 2016
		},

		// hasRearCamera: true

	};

	myCar.start();
	myCar.go(120);
	myCar.stop();
	console.log(myCar.manufacturer.name);
	console.log(myCar.manufacturer.make);
	console.log(myCar.manufacturer.year);
	console.log('Has Rear Camera: ', myCar.hasRearCamera === undefined?false: true);

}