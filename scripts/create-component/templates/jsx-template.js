
module.exports = function (className) {
    return `
const React = require('react');
const { CSS } = require('./resources');

module.exports = class ${className} extends React.Component{
    //-------------------------
    //	LifeCycle
    //-------------------------

    constructor(props) {
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
    `;
}
