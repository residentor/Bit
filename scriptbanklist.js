'use strict';

const loadBankName = function () {
	const xhr = new XMLHttpRequest;
	xhr.open( 'GET', 'bank.json' );
	xhr.responseType = 'json';
	xhr.onreadystatechange = function () {
		if ( xhr.readyState !== XMLHttpRequest.DONE ) {
			return;
		}
		const data =  xhr.response;
		console.log( xhr );
		console.log( data.length );

		for ( let i = 0, len = data.length; i < len; i++ ) {
			const bankNameList = data[ i ],
				item = document.createElement( 'option' );
			item.textContent = bankNameList[ 'name' ];
			bankList.appendChild( item );
		}
	}
	xhr.send();

}

document.addEventListener("DOMContentLoaded", loadBankName);