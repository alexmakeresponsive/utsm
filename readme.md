# utsm node module

## Overview

Package copy `*.d.ts` and folders with `.ts` to target folder


## Dependency

* colors
* fsmonitor


## Install

    npm install utsm --save-dev


## Flow

Let's imagine: you are Fullstack TypeScript Developer, you want create Microservice App. And also you
want import modules like:
 
    import someModule from @currentService/some/module 

instead that:

    import someModule from ../../some/module
    
You can do this:

* 1
* 2

## Usage

See `example` folder

1. Copy files from `example` to `path`
2. Open **first** terminal in `path` and run command `node ./umodule.example.js` <br> You can see that output:

        Info: deploy files started to "/usr/src/app/node_modules/@common" path ..
        Info: fs watch started for "/usr/src/app/common/src" path ..
        Info: copy file: /usr/src/app/common/src/unit/User.d.ts
        ..
        Info: copy file: /usr/src/app/common/src/type/db/schema.ts
        
    script will watch to `*.d.ts` files change and copy files to `path`

3. Open **second** terminal in `path` and run command `tsc -p tsconfig.common.json -w` <br>
    tsc compiler will watch to file change and copy files to `path`

Excelent! Now you ready for write code! 
