(function(){
	'use strict';

	var weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var suffixes = ["st","nd","rd","th"];
	var months   = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    Date.prototype._g_d = function(){    return this._g_pad( this._g_j() )    };
	Date.prototype._g_D = function(){    return this._g_l().substr( 0,3 )    };
    Date.prototype._g_j = function(){    return this.getDate()    };
	Date.prototype._g_l = function(){    return weekDays[ this.getDay() ]    };
	Date.prototype._g_N = function(){    return ( this.getDay() === 0 ) ? 7 : this.getDay()    };
	Date.prototype._g_S = function(){
		switch( date.getDate() ){
			case 1: case 21: case 31: return 'st';
     		case 2: case 22: return 'nd';
    		case 3: case 23: return 'rd';
     		default: return 'th';
		};
	};
    Date.prototype._g_w = function(){    return this.getDay();    }
	Date.prototype._g_z = function(){    return Math.ceil( ( this - this._g_yearFirst() ) / 86400000 )	   	};
	Date.prototype._g_W = function(){    
		return Math.ceil( ( ( (this - this._g_yearFirst() ) / 86400000) + this._g_yearFirst().getDay() + 1) / 7)  
	};
	Date.prototype._g_F = function(){   return months[ this.getMonth() ]        };
	Date.prototype._g_m = function(){ 	return this._g_pad( this._g_n() )  };
	Date.prototype._g_M = function(){   return this._g_F().substr( 0,3 ) 			};
	Date.prototype._g_n = function(){ 	return this.getMonth() + 1 				};
	Date.prototype._g_t = function(){ 	return this._g_monthLast().getDate()  		};

	Date.prototype._g_L = function(){ 	return new Date( this.getFullYear(), 1, 29).getMonth() === 1    };

    Date.prototype._g_Y = function(){ 	return this.getFullYear();    };
	Date.prototype._g_y = function(){ 	return parseInt(('' + this._g_Y()).slice(-2)) };

	Date.prototype._g_a = function(){ 	return ( this._g_pastTwelve() ) ? 'pm' : 'am'    };
	Date.prototype._g_A = function(){ 	return this._g_a().toUpperCase()    };
	Date.prototype._g_g = function(){ 
      var hours = this._g_G();
      return ( hours == 0 || hours == 12 ) ? 12 : 
             ( this._g_pastTwelve() )               ? hours - 12 : hours;
    };
	Date.prototype._g_G = function(){ 	return this.getHours();    };
	Date.prototype._g_h = function(){    return this._g_pad( this._g_g() )    };
	Date.prototype._g_H = function(){    return this._g_pad( this._g_G() ) };
	Date.prototype._g_i = function(){    return this._g_pad( this.getMinutes() ) };
	Date.prototype._g_s = function(){    return this._g_pad( this.getSeconds() ) };

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