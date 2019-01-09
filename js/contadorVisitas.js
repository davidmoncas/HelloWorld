


// Get a reference to the database service
var database = firebase.database();


function onInit(){
	writeUserData();
	console.log("genera algo");
}


function writeUserData() {
	var visitorsRef = database.ref('vis/visitors');
	visitorsRef.transaction(function(numeroVisitantes)
	{
		return numeroVisitantes+1;
	})
	console.log("genera una visita");
}

window.onload=onInit()