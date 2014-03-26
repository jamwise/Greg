(function(){
	'use strict';

	/*
	 * The code below can be seen in 3 sections. The first contains all the names needed to present the dates,
	 * the second contains all the methods needed to return date-related information
	 * the third is a method which will take a formatting string and return a properly formatted date statement.
	 */


	// Names of Weedays, suffixes and months for use in the methods below

	var weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var suffixes = ["st","nd","rd","th"];
	var months   = ["January","February","March","April","May","June","July","August","September","October","November","December"];

	// Day of the month, 2 digits with leading zeros
    Date.prototype._g_d = function(){    
    	return this._g_pad( this._g_j() );   
    };

    // A textual representation of a day, three letters
	Date.prototype._g_D = function(){    
		return this._g_l().substr( 0,3 );
	};

	// Day of the month without leading zeros, simply redirects to the built in method
    Date.prototype._g_j = Date.prototype.getDate;

    // (lowercase 'L') A full textual representation of the day of the week
	Date.prototype._g_l = function(){    
		return weekDays[ this.getDay() ];  
	};

	// ISO-8601 numeric representation of the day of the week
	Date.prototype._g_N = function(){    
		return ( this.getDay() === 0 ) ? 7 : this.getDay()    
	};

	// S : English ordinal suffix for the day of the month, 2 characters
	Date.prototype._g_S = function(){
		switch( date.getDate() ){
			case 1: case 21: case 31: return suffixes[ 0 ];
     		case 2: case 22: return suffixes[ 1 ];
    		case 3: case 23: return suffixes[ 2 ];
     		default: return suffixes[ 3 ];
		};
	};

	// Numeric representation of the day of the week, simply redirects to the built in method
    Date.prototype._g_w = Date.prototype.getDay;

    // The day of the year (starting from 0)
	Date.prototype._g_z = function(){
		return Math.ceil( ( this - this._g_yearFirst() ) / 86400000 )	   	
	};

	// ISO-8601 week number of year, weeks starting on Monday
	Date.prototype._g_W = function(){    
		return Math.ceil( ( ( (this - this._g_yearFirst() ) / 86400000) + this._g_yearFirst().getDay() + 1) / 7);
	};

	// A full textual representation of a month, such as January or March
	Date.prototype._g_F = function(){   
		return months[ this.getMonth() ];      
	};

	// Numeric representation of a month, with leading zeros
	Date.prototype._g_m = function(){ 	
		return this._g_pad( this._g_n() );
	};

	// A short textual representation of a month, three letters
	Date.prototype._g_M = function(){   
		return this._g_F().substr( 0,3 );			
	};

	// Numeric representation of a month, without leading zeros
	Date.prototype._g_n = function(){ 	
		return this.getMonth() + 1 				
	};

	// Number of days in the given month
	Date.prototype._g_t = function(){ 	
		return this._g_monthLast().getDate();	
	};

	// Whether it's a leap year
	Date.prototype._g_L = function(){ 	
		return new Date( this.getFullYear(), 1, 29).getMonth() === 1; 
	};

	// A full numeric representation of a year, 4 digits, simply redirects to the built in method
    Date.prototype._g_Y = Date.prototype.getFullYear;

    // A two digit representation of a year
	Date.prototype._g_y = function(){ 	
		return parseInt( ( '' + this._g_Y() ).slice(-2) );
	};

	// Lowercase Ante meridiem and Post meridiem (am,pm)
	Date.prototype._g_a = function(){ 	
		return ( this._g_pastTwelve() ) ? 'pm' : 'am'    
	};

	// Uppercase Ante meridiem and Post meridiem (AM,PM)
	Date.prototype._g_A = function(){
	 	return this._g_a().toUpperCase()    
	};

	// 12-hour format of an hour without leading zeros
	Date.prototype._g_g = function(){ 
      var hours = this._g_G();
      return ( hours == 0 || hours == 12 ) ? 12 : 
             ( this._g_pastTwelve() )      ? hours - 12 : hours;
    };

    // 24-hour format of an hour without leading zeros, simply redirects to the built in method
	Date.prototype._g_G = Date.prototype.getHours;

	// 12-hour format of an hour with leading zeros
	Date.prototype._g_h = function(){    
		return this._g_pad( this._g_g() );
	};

	// 24-hour format of an hour with leading zeros
	Date.prototype._g_H = function(){    
		return this._g_pad( this._g_G() ); 
	};

	// Minutes with leading zeros
	Date.prototype._g_i = function(){    
		return this._g_pad( this.getMinutes() );
	};

	// Seconds, with leading zeros
	Date.prototype._g_s = function(){    
		return this._g_pad( this.getSeconds() );
	};

	
	Date.prototype._g_I = function(){    return this.getTimezoneOffset() < this._g_stdTimezoneOffset()    };
	Date.prototype._g_O = function(){    return this.getTimezoneOffset() / 60 * -1   };
	
	Date.prototype._g_c = function(){    return this.toISOString()    };
	Date.prototype._g_r = function(){    return this.toString()    };
	Date.prototype._g_U = function(){    return Math.floor( this.getTime() / 1000 )    };
	Date.prototype._g_pad 	= function(number){
		return ("0" + number).slice (-2);
	};
	Date.prototype._g_yearFirst 	= function(){    return new Date( this.getFullYear(),0,1)    			};
	Date.prototype._g_monthLast 	= function(){    return new Date( this.getFullYear(),this.getMonth()+1,0)	};
	Date.prototype._g_pastTwelve = function(){ 	 return this._g_G() >= 12    };
    Date.prototype._g_stdTimezoneOffset = function() {
        var jul = new Date( this.getFullYear(), 6, 1 );
        return Math.max( this._g_yearFirst, jul.getTimezoneOffset() );
    };
    Date.prototype.format = function( pattern ){
      var that = this;
      return pattern.replace(/(.?)([dDjlNSwzWFmMntLYyaAgGhHisIOcrU])/g,function(){
            if(arguments[1] === "\\") return arguments[2];
    		return arguments[1] + that["_g_"+arguments[2]]();
    	});
    };
})();
