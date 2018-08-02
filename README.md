# simple-file-server
This is a simple NodeJS file server

## Quick Setup

* Install <a href="https://nodejs.org/en/download/">NodeJS</a>
* Install packages:
```
$ npm install express
$ npm install express-fileupload
```
* Run the app:
```
$ node app.js
```

## Usage

### To upload a file
Make a `POST` request to `/files` using `content-type: multipart/form-data` header and a `file` field containing the path to the file you want to upload.

#### curl example
```
curl -X POST \
  http://localhost:3000/files \
  -H 'content-type: multipart/form-data' \
  -F file=@/Users/fsproviero/Desktop/my-filename
```

### To retrive a file
Make a `GET` request to `/files/my-filename`
