function getIDFA(){
	console.log('enter');
	var ASIdentifierManager = plus.ios.import("ASIdentifierManager");
	var sharedManager = ASIdentifierManager.sharedManager();
	var adver = plus.ios.invoke(sharedManager, "advertisingIdentifier");
	var IDFA = plus.ios.invoke(adver,"UUIDString");
	return IDFA;
}