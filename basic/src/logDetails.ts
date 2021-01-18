// type alias
type Uid = number|string|undefined;

// union
function logDetails(uid: number|string, item: string){
	console.log(`A product with ${uid} has a title as ${item}.`);
};

logDetails(123, "tenis");
logDetails("123", "tenis");

function logInfo(uid: Uid, item: string){
	console.log(`A product with ${uid} has a title as ${item}.`);
};

logInfo(123, "tenis");
logInfo("123", "tenis");

// direct info type
type Platform = 'Windows' | 'Linux' | 'Mac Os' | 'ios';
function renderPlatform(platform: Platform){
	return platform;
};
renderPlatform('ios');

