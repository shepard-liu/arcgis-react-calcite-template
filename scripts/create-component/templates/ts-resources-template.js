module.exports = function (className, cssName, camelName) {
    return `
import './${className}.scss';

export const CSS = {
    ${camelName}: "${cssName}"
}

    `;
}