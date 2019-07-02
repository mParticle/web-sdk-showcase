const minimist = require('minimist')

function updateConfiguration(key, development, path) {
    const http = require('https');
    const fs = require('fs');

    var env = development ? 1 : 0;
    var url = `https://jssdkcdns.mparticle.com/JS/v2/${key}/config?env=${env}`;
    const request = http.get(url, function(res) {
        if (res.statusCode != 200) {
            console.error('Error while updating mParticle configuration, status code: ' + res.statusCode);
            console.error('Please ensure that you\'ve provided a valid web platform key.');
            process.exit(1);
            return;
        }

        var body = '';

        res.on('data', function(chunk){
            body += chunk;
        });

        res.on('end', function(){
            console.error('mParticle configuration update.');
            var jsonObject = JSON.parse(body);
            fs.writeFile(path, JSON.stringify(jsonObject, null, 4), function(err, result) {
                if(err) console.log('error', err);
              });
        });
    
    });
}

const args = minimist(process.argv.slice(2))
let cmd = args._[0] || 'help';

if (args.help || args.h) {
    cmd = 'help';
}

switch (cmd) {
    case 'update':
        var key = args.key || args.k;
        var development = args.development || args.d;
        var output = args.output || args.o;
        
        if (!output) {
            output = 'mpconfig.' + (development ? 'dev' : 'prod') + '.json';
        }
        updateConfiguration(key, development, output);
        break

    case 'help':
        console.log('mpconfigure [command] <options>');
        console.log('Commands:');
        console.log('update ................ request the latest Web SDK configuration.');
        console.log('help .................. show this help menu.');
        console.log('Options:');
        console.log('--key, -k ............. the web platform key to use.');
        console.log('--development, -d ..... whether to use development environment.');
        console.log('--output, -o .......... the file to save as output.');
        break

    default:
        console.error(`"${cmd}" is not a valid command!`)
        break
}