var Series = function(input){

	var array = input.split('').
				map(function(element){return Number(element)});


	this.digits = array;

// need to push number amount of elements to an array
// within the original array
// result will be an array of arrays with number being 
// the number of elements in each array within the array
	this.slices = function(number){
		var numbers = [];
		var length = array.length;
			for(var i=0; i<length; i++){
					numbers.push(array.slice(0,number));
					array.shift();
			}
		return numbers;
	};

};


module.exports = Series;