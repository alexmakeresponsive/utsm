const fs     = require('fs');
const path   = require('path');

const copy = require('./copy');
const print = require('./print');


function main(pathFile, options, conf)
{
//console.log(conf);

    fs.readdir(pathFile, (err, files) => {

        if (err)
        {
            print('error', 'Error: unable to scan directory' + err);
            throw err;
        }

        files.forEach((fileName) => {
            const pathFileNme = pathFile + '/' + fileName;

            fs.stat(pathFileNme, (err, stats) => {
                if(stats.isFile())
                {
                    const fileExtension = pathFileNme.substring((pathFileNme.lastIndexOf('.') - 2));

                    if (options.mode === 'extension' && options.extension === fileExtension)
                    {
                        copy(pathFileNme, conf);
                    }

                    if (options.mode === 'all')
                    {
                        copy(pathFileNme, conf);
                    }
                }

                if(stats.isDirectory())
                {
                    main(pathFileNme, options, conf);
                }
            });
        });
    });
}

module.exports = main;

