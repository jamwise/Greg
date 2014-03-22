Greg
====

Greg is an extension of Javascript's built in Date function

#Use

After inculding greg, new functions are available to the Date function:

var date = new Date();
console.log( date.format('l D \\t\\h\e jS') ); 

Greg uses most of the characters used in PHP's date class. A list can be found below.

**d**:		Day of the month, 2 digits with leading zeros	
**D**:		A textual representation of a day, three letters	
**j**:		Day of the month without leading zeros	
**l**:		(lowercase 'L')	A full textual representation of the day of the week	
**N**:		ISO-8601 numeric representation of the day of the week
**S**:		English ordinal suffix for the day of the month, 2 characters	
**w**:		Numeric representation of the day of the week	
**z**:		The day of the year (starting from 0)	

**W**:		ISO-8601 week number of year, weeks starting on Monday

**F**:		A full textual representation of a month, such as January or March	
**m**:		Numeric representation of a month, with leading zeros	
**M**:		A short textual representation of a month, three letters	
**n**:		Numeric representation of a month, without leading zeros	
**t**:		Number of days in the given month	

**L**:		Whether it's a leap year	
**Y**:		A full numeric representation of a year, 4 digits	
**y**:		A two digit representation of a year	

**a**:		Lowercase Ante meridiem and Post meridiem (am,pm)
**A**:		Uppercase Ante meridiem and Post meridiem (AM,PM)

**g**:		12-hour format of an hour without leading zeros	
**G**:		24-hour format of an hour without leading zeros	
**h**:		12-hour format of an hour with leading zeros	
**H**:		24-hour format of an hour with leading zeros	
**i**:		Minutes with leading zeros	
**s**:		Seconds, with leading zeros	

**I**: 		(capital i)	Whether or not the date is in daylight saving time	
**O**:		Difference to Greenwich time (GMT) in hours	

**c**:		ISO 8601 date (added in PHP 5)	
**r**:		RFC 2822 formatted date
**U**:		Seconds since the Unix Epoch (January 1 1970 00:00:00 GMT)
