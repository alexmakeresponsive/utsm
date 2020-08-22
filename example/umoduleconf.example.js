const pathRoot           = "/usr/src/app";

const pathSrc            = pathRoot + "/common/src";
const pathInNodeModules  = pathRoot + "/node_modules/@common";

const fileExtension      = {".d.ts": {offset: 2}};

const pathSrcDeploy = [
    pathSrc + '/type'
]

module.exports = {
    pathRoot,
    pathSrc,
    pathInNodeModules,
    pathSrcDeploy
}
