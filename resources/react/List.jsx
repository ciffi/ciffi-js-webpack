import React from 'react';
import {render} from 'react-dom';

export default (function () {
	
	class ItemList extends React.Component {
		render() {
			return (
				<li>
					<strong>{this.props.name}</strong>: {this.props.value}
				</li>
			);
		}
	}
	
	class List extends React.Component {
		render() {
			
			let _list = [];
			
			Object.entries(this.props).map(item => {
				if (typeof item[0] !== 'object' && typeof item[1] !== 'object') {
					_list.push(<ItemList key={item[0]} name={item[0]} value={item[1]}/>);
				} else {
					Object.entries(item[1]).map(childItem => {
						if (typeof childItem[0] !== 'object' && typeof childItem[1] !== 'object') {
							_list.push(<ItemList key={childItem[0]} name={`${item[0]} - ${childItem[0]}`}
							                     value={childItem[1]}/>);
						}
					});
				}
			});
			
			return (
				<ul>
					{_list}
				</ul>
			);
		}
	}
	
	return class Application {
		
		constructor(mountPoint, props) {
			
			let _mountPoint = document.querySelector(mountPoint);
			
			class Content extends React.Component {
				render() {
					return (
						<div>
							<h1>Config for {this.props.projectName}</h1>
							<hr/>
							<List {...this.props}/>
						</div>
					);
				}
			}
			
			if (_mountPoint) {
				render(<Content {...props} />, _mountPoint);
			} else {
				console.log(`can't find mount point DOM element`);
			}
		}
		
	};
	
})();