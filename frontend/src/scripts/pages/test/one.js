import Page from '../allpages';
module.exports = (function () {
	
	return class IndexPage extends Page {
		
		onLoad() {
			console.log(this.data.page.route);
		}
	};
	
})();