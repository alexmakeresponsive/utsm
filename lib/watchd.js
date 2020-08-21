const fs        = require('fs');
const fsmonitor = require('fsmonitor');

const copy      = require('./copy');
const print     = require('./print');

function main(conf)
{
    print('entry', 'Info: fs watch started for "' + conf.pathSrc + '" path ..');

    fsmonitor.watch(conf.pathSrc, null, (change) => {

        const fileNameShort = change.modifiedFiles[0];
        const name          = conf.pathSrc + '/' + fileNameShort;

        const fileExtension1 = fileNameShort.substring((fileNameShort.lastIndexOf('.') - 2));

        if (fileExtension1 === ".d.ts")
        {
            copy(name, conf);

            return;
        }

        const fileExtension2 = fileNameShort.substring((fileNameShort.lastIndexOf('.')));

        if (fileExtension2 === ".ts")
        {
            return;
        }
    });
}

module.exports = main;