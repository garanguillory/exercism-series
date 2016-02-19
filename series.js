var Series = function(input){

	this.digits = input.split('').
				map(function(element){return Number(element)});

	this.slices = function(number){
		var array = this.digits;
		var numbers = [];
		var length = array.length;
			if(number > length){
					throw 'Slice size is too big.';
			} else {
				for(var i=0; i<length-number+1; i++){
						numbers.push(array.slice(0,number));
						array.shift();
				}
			}
		return numbers;
	};

};


module.exports = Series;