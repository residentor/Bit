'use strict';

const loadTransactions = function () {
	const xhr = new XMLHttpRequest;
	xhr.open( 'GET', 'transaction.json' );
	xhr.responseType = 'json';
	xhr.onreadystatechange = function () {
		if ( xhr.readyState !== XMLHttpRequest.DONE ) {
			return;
		}
		const data = xhr.response;

		for (let i = 0; i <= data.length; i++) {
			const item = document.createElement( 'tr' ),
			item1 = document.createElement( 'td' ),
			item2 = document.createElement( 'td' ),
			item3 = document.createElement( 'td' ),
			transactionData = data[ i ];
			transactions.appendChild( item );
			item3.setAttribute('id', 'bankid'+i);
			item1.textContent = transactionData[ 'id' ];
			item2.textContent = transactionData[ 'amount' ];
			item3.textContent = transactionData[ 'bankId' ];
			item.appendChild( item1 );
			item.appendChild( item2 );
			item.appendChild( item3 );
		}
	}
	xhr.send();
}

const getBankName = function () {
	const xhr1 = new XMLHttpRequest;
	xhr1.open( 'GET', 'bank.json' );
	xhr1.responseType = 'json';
	xhr1.onreadystatechange = function () {
		if ( xhr1.readyState !== XMLHttpRequest.DONE ) {
			return;
		}
		const bankList = xhr1.response;
		
		
		for (let i = 0; i <= 6; i++) {
			const bankName = bankList[ i ];
			document.querySelector('#bankid'+ i).innerHTML = bankName['name'];
		}
	}
	xhr1.send();
}

document.addEventListener("DOMContentLoaded", loadTransactions);
document.addEventListener("DOMContentLoaded", getBankName);