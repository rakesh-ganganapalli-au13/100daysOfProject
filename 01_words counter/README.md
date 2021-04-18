=> regular expression(regexp) => it is used to search and replace operations (https://regexr.com/)

			=> it start with / and ends with / (//)

			=> in between we are writing the seaching flags 

	/g  => it will find the matched words globally, if g not used then it will find the matched word in first time then it will stops.

	/i =>this flags is for case insensitive so it is not consider case sensitive when it seaching.


			\w => find all words      => \W => find all non Words
			\s => find all whitespace => /S => find all non whitespace

	/\s/g  =>it will checks charecter by charector and do operation
	/\s+/g => it will checks continuous  charector and do operation

		=> var str = '  A B  C   D EF ';
			console.log(str.replace(/\s/g, '#'));  // ##A#B##C###D#EF#
			console.log(str.replace(/\s+/g, '#')); // #A#B#C#D#EF#





arr.match() : it will take regexp and return array of regexp matches, if no match then return NULL