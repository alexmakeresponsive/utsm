const print = require('./print');
const iterator = require('./iterator');

function main(conf)
{
    print('entry', 'Info: deploy files started to "' + conf.pathInNodeModules + '" path ..');

        iterator(conf.pathSrc, {
            mode:       'extension',
            extension:  conf.fileExtension[0].value,
        }, conf);

    conf.pathSrcDeploy.forEach((path) => {
        iterator(path, {
            mode:       'all',
        }, conf);
    });
}

module.exports = main;