if(scConfig_v1_0_1.parameters.remoteSystemName == undefined){
	alert("Ingen server är angiven i fjärrsystemet.");
	return;
}

this.connection = new Timer();

this.connection.onTimeout = function(){
	if(scConfig_v1_0_1.parameters.tryToConnect){
		scConfig_v1_0_1.parameters.tryToConnect = false;
		windowManager.firstView._ref = windowManager.firstView.linkRemote(scConfig_v1_0_1.parameters.startView, scConfig_v1_0_1.parameters.remoteSystemName, true);

		if(scConfig_v1_0_1.parameters.fullScreen){
			windowManager.moveTo(windowManager.firstView._ref, windowManager.Center);
			windowManager.maximize(windowManager.firstView._ref);
		}

		if(scConfig_v1_0_1.parameters.fixedWidth != undefined && scConfig_v1_0_1.parameters.fixedHeight != undefined && scConfig_v1_0_1.parameters.fullScreen == false){
			windowManager.firstView._ref.width = scConfig_v1_0_1.parameters.fixedWidth;
			windowManager.firstView._ref.height = scConfig_v1_0_1.parameters.fixedHeight;
			windowManager.raise(windowManager.firstView._ref)
			windowManager.moveTo(windowManager.firstView._ref, windowManager.Center);
		}

		this.duration = 0;
	}

	if(windowManager.firstView.childViews[0] == undefined){
		windowManager.moveTo(windowManager.firstView, windowManager.Center);
	}else{
		if(windowManager.firstView.childViews[0].name != "config.kvie"){
			windowManager.moveTo(windowManager.firstView, windowManager.TopRight);
			this.duration += 1000;
		}
	}

}
this.connection.start(1000);