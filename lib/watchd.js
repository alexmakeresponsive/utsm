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

        const fileExtension1 = fileNameShort.substring((fileNameShort.lastIndexOf('.') - conf.fileExtension[0].offset));

        if (fileExtension1 === conf.fileExtension[0].value)
        {
            copy(name, conf);

            return;
        }
    });
}

module.exports = main;