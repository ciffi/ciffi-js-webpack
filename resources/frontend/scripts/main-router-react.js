// device
require('@ciffi-js/device');

// router
require('@ciffi-js/router').pushState(false);

// config example
import Config from 'Config';

console.log(Config);

// react component
import List from './components/List.jsx';

new List('.js-config-widget', Config);

// lazy-load module example - open network in developers tools
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