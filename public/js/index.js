function init(){
	let url = '/api/inventarios';
	let settings = {
		method: 'GET'
	}



	document.getElementById("post5").addEventListener("click", function(e) {
		var id  = document.getElementById("ID").value;
		var pred = document.getElementById("prediccion").value;

		let url2 = '/api/prediccion'
		let settings2 = {
			method: 'POST',
			body: JSON.stringify({
				ID: id,
				prediccion: pred
			}),
			headers: {
				'Content-Type': 'application/json'
			},
		}

		fetch(url2, settings2)
		.then( response => {
			if ( response.ok ){
				return response.json();
			}

			throw new Error ( response.statusText );
		})
		.then( responseJSON => {

			console.log(responseJSON);
		})
		.catch( err => {
			console.log( err );
		})
		// alert(document.getElementById("tiempoini").value);
	});




	fetch(url, settings)
		.then( response => {
			if ( response.ok ){
				return response.json();
			}

			throw new Error ( response.statusText );
		})
		.then( responseJSON => {

			for ( let i = 0; i < responseJSON.length; i ++ ){
				$('.listOfVPs').append(`<li>
				${responseJSON[i].nombre} - Se le dio como prediccion: ${responseJSON[i].prediccion} </li>`)
			}
		})
		.catch( err => {
			console.log( err );
		})
}

init();
