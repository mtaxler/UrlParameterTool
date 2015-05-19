function GetURLParameter(urlParameter){
	var url = window.location.search.substring(1);
	var urlVariables = url.split('&');
	if (urlVariables[0].length > 0){
		var allParameters = {};
		if (!urlParameter){
			for (var i = 0; i < urlVariables.length; i++){
				var parameter = urlVariables[i].split('=');
				allParameters[parameter[0]] = parameter[1];
			}
			return allParameters;
		} else {
			for (var i = 0; i < urlVariables.length; i++){
				var parameter = urlVariables[i].split('=');
				if (parameter[0] == urlParameter){
					return parameter[1];
				}
			}
		} 
	} else {
		return null;
	}    
}