const fs     = require('fs');
const colors = require('colors');
const print = require('./print');


function main(name, conf)
{
    const strMatch      = conf.pathSrc.substring(conf.pathSrc.lastIndexOf('/')) + '/';
    const pathFile      = name.substring((name.lastIndexOf(strMatch) + 5));

    const pathCopyFrom  = name;
    const pathCopyTo    = conf.pathInNodeModules + '/' + pathFile;

    const pathDirCopyTo = pathCopyTo.substring(0, ((pathCopyTo.lastIndexOf('/')) ));

    fs.mkdir(pathDirCopyTo, { recursive: true }, (err) => {
        if (err)
        {
            print('error', 'Error: make dir');
            throw err;
        }

        fs.copyFile(pathCopyFrom, pathCopyTo, 0, (err) => {
            if (err)
            {
                print('error', 'Error: copy file');
                throw err;
            }

            print('info', 'Info: copy file: ' + pathCopyFrom);
        });
    });
}

module.exports = main;