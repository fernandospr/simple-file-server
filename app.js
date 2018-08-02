var express = require('express');
var fileupload = require('express-fileupload');
var app = express();

var SERVER_PORT = process.env.PORT || 3000;

app.use(fileupload());

app.use('/files', express.static(__dirname + '/files'));

app.post('/files', function(req, res) {
  res.setHeader('Content-Type', 'application/json');

  if (!req.files)
    return res.status(400).send({ message: "multipart/form-data with 'file' field required to upload." });

  let sampleFile = req.files.file;
  console.log('Received file ' + sampleFile.name);

  let targetPath = __dirname + '/files/' + sampleFile.name;
 
  sampleFile.mv(targetPath, function(err) {
    if (err)
      return res.status(500).send({ message: err });

    console.log('File ' + sampleFile.name + ' copied to ' + targetPath);
    res.status(200).send({ url: "/files/" + sampleFile.name });
  });
});

app.listen(SERVER_PORT, function () {
  console.log('Server listening on port %s', SERVER_PORT);
});