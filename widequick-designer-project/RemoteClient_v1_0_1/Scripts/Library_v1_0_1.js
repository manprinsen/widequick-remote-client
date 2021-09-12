String.prototype.contains = function(searchString)
{
	if(arguments.length < 1)
		throw Error("String.prototype.contains() - one argument required");

	if(this.indexOf(searchString) == -1){
		return false;
	}
	else{
		return true;
	}
}

// ******************************************
// Extend String prototype with split()
// Splits a string into an array accordning to delimiter
// ******************************************
String.prototype.split = function(delimiter)
{
	if(arguments.length < 1)
		throw Error("String.prototype.split() - delimiter argument required");

	var result = new Array();
	var buffer = "";

	for(index = 0; index < this.length; ++index)
	{
		token = this.charAt(index);

		if(token == delimiter)
		{
			result[result.length] = buffer;
			buffer = "";
		}
		else
			buffer += token;
	}

	result[result.length] = buffer;

	return result;
}

//.substringBetween(':', ';') -> StringIWant
String.prototype.substringBetween = function(a, b) {
    var p = this.indexOf(a) + a.length;
    return this.substring(p, this.indexOf(b, p));
}

//get the name of widequick instance, WQRuntime, WQRemote, WQWeb as string
app.GetWQInstance = function(){
var sysinfo = app.System.info();
var instance = sysinfo.nameFromProductId(sysinfo.productId);
	return instance;
}