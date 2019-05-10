process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function(){
    var input = process.stdin.read();
    var instruction = input.toString().trim();

    switch (instruction) {
        case '/exit':
            process.exit();
            break
        case '/version':
            process.stdout.write("Current verision: " + process.versions.node);
            break
        case '/language':
            process.stdout.write("Language: " + process.env.LANG);
            break
        case '/getOSinfo':
            getOSinfo();
            break
        default:
            process.stderr.write('Wrong instruction!\n');        
    }
});

function getOSinfo() {
    var os = require('os');

    var type = os.type();
    if(type ==='Darwin'){
        type ='OSX';
    } else if(type ==='Windows_NT'){
        type ='Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var secCalc = require('./modules/secCalc.js').secCalc;
    var userInfo = os.userInfo();

    var colors = require('colors');

    console.log('                                                 '.bgWhite);
    console.log('CPU:'.cyan.bold, cpu);
    console.log('System:'.grey.bold, type);
    console.log('Release:'.red.bold, release);
    console.log('Uptime:'.green.bold, secCalc(uptime));
    console.log('User name:'.yellow.bold, userInfo.username);
    console.log('Home dir:'.magenta.bold, userInfo.homedir);
    console.log('                                                 '.bgWhite);

};