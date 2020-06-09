
function init(){
	let url = '/api/RegistrosE';
	let settings = {
		method: 'GET'
	}

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
				${responseJSON[i].nombre} - Periodo JD19: ${responseJSON[i].actividad} unidades
										</li>`)
			}
		})
		.catch( err => {
			console.log( err );
		})
}

init();
