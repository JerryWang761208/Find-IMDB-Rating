function walk(currentDirPath, callback) {
    var fs = require('fs'),
        path = require('path');
    fs.readdir(currentDirPath, function (err, files) {
        if (err) {
            throw new Error(err);
        }
        files.forEach(function (name) {
            var filePath = path.join(currentDirPath, name);
            var stat = fs.statSync(filePath);
            if (stat.isFile()) {
                //callback(filePath, stat);
            } else if (stat.isDirectory()) {
                if(name !== ".git"){
                callback(name, callback);
                }
            }
        });

    });
}
 //walk('/Users/Jerry/Documents/web design/experiment/nodejs/filename', function(filePath, stat) {
 walk('path/to/read.js/folder', function(filePath, stat) {
    var http = require('http');
    var url = 'www.omdbapi.com';
    var options = {
      host: url,
      port: 80,
      path: '/?t='+filePath+'&y=&plot=short&r=json',
      method: 'POST'
    };

    http.request(options, function(res) {
      // console.log('STATUS: ' + res.statusCode);
      // console.log('HEADERS: ' + JSON.stringify(res.headers));
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        // console.log('BODY: ' + chunk.imdbRating);
        var json = JSON.parse(chunk);
        console.log(filePath + ' : ' + json.imdbRating.toString());
      });
    }).end();

});
