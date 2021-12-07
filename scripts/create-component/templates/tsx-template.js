
module.exports = function (className) {

	return `
import React from 'react';
import { CSS } from './resources';
import { ${className}Props, ${className}State } from './interfaces';

export default class ${className} extends React.Component<${className}Props, ${className}State>{

	//-------------------------
	//	LifeCycle
	//-------------------------

	constructor(props: ${className}Props) {
		super(props);
		// Initialize states
		this.state = {

		};

		// Binding functions
		
	}

	//-------------------------
	//	Rendering
	//-------------------------

	render() {
		return (
			<div></div>
		);
	}

	//-------------------------
	//	Event Handlers
	//-------------------------

	//-------------------------
	//	Private Methods
	//-------------------------
	
}
`
};