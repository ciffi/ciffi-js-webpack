// device
require('@ciffi-js/device');

// config example
import Config from 'Config';

console.log(Config);

// lazy-load module example - open network/hrx in developers tools
setTimeout(function () {
	System.import(
		/* webpackChunkName: 'human' */
		'./modules/example'
	).then(function (module) {
		
		console.log('modulo human loaded');
		
		let Human = module.default;
		
		let Ciffi = new Human({
			name: 'alessio'
		});
		
		Ciffi.sayName();
	});
	
}, 2500);