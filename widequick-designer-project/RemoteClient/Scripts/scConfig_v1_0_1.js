if(app.GetWQInstance() != "WQRemote"){
	alert("You are not running this project as a WQRemote.\nSome functions will not work.")
}

this.save = function(){
	var json = new JsonData()
	json.readFrom(this.parameters)
	json.writeTo(this.fileName)
}

this.getRemoteSystem = function(){
	for(var tag in DataStore){
		if(tag.contains("_sys_remote_system_")){
			return tag;
		}
	}
}

this.getDefaultConfig = function(){
	this.parameters.tryToConnect = false
	this.parameters.fullScreen = false
	this.parameters.fixedWidth = 1366
	this.parameters.fixedHeight = 768
	this.parameters.startView = "(Automatic)"
	var rs = this.getRemoteSystem()
	this.parameters.remoteSystem = rs
	this.parameters.remoteSystemName = rs.substringBetween('_sys_remote_system_', '_connected')
	this.parameters.empty = false
	//save default config to file
	this.save()
}

this.fileName = "config.json"
this.parameters = {"empty":true}

//load config from file
if(fileExists(this.fileName)){
	var json = new JsonData()
	json.readFrom(this.fileName)
	json.toJS()
	json.writeTo(this.parameters)

	if(this.parameters.empty){
		this.getDefaultConfig()
	}
}
else{ 
	//create initial config
	this.getDefaultConfig()
	var json = new JsonData()
	json.readFrom(this.parameters)
	json.writeTo(this.fileName)
}