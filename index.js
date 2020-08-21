const deploy    = require('./lib/deploy');
const watchd    = require('./lib/watchd');
const print     = require('./lib/print');

function main()
{
    let scope = {};

    scope.actions = {
        'deploy': deploy,
        'watchd': watchd,
    };
    scope.conf = {};

    scope.addConf = (conf) =>
    {
        scope.conf = conf;

        return scope;
    }

    scope.start = (action) =>
    {
        if(!action)
        {
            print('error', 'Error: no action passed');

            return scope;
        }

        scope.actions[action](scope.conf);

        return scope;
    }

    return scope;
}

exports.addConf = (conf) =>
{
    return main().addConf(conf);
}