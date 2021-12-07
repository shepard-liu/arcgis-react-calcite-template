module.exports = function (className, cssName, camelName) {
    return `
import './${className}.css';

export const CSS = {
    ${camelName}: "${cssName}"
}

    `;
}