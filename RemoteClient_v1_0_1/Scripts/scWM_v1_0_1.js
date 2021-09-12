windowManager.onWindowCreated = function(ev){
	if(this.firstView == undefined){
		this.firstView = ev.view
		windowManager.moveTo(windowManager.firstView, windowManager.Center)
	}
}