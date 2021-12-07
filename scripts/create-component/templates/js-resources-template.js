module.exports = function (className, cssName, camelName) {

    return `
import './${className}.css';

exports.CSS = {
    ${camelName}: "${cssName}"
}

    `;
}