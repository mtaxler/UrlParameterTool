function GetURLParameter(urlParameter){
    var url = window.location.search.substring(1);
    var urlVariables = url.split('&');
    for (var i = 0; i < urlVariables.length; i++){
        var parameter = urlVariables[i].split('=');
        if (parameter[0] == urlParameter){
            return parameter[1];
        }
    }
}