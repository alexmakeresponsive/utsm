const colors = require('colors');

function print(color, text)
{
    const colorMap = {
        info:  'green',
        error: 'red',
        debug: 'yellow',
        entry: 'magenta',
        compile: 'cyan',
    };

    console.log(colors[colorMap[color]]('%s'), text);
}

module.exports = print;