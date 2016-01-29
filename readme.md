# grunt-hash-file-contents

Takes a list of files and converts them into a hash. Useful for comparing versions of a codebase as small changes in code result in a greatly different hash.

## Install

```
$ npm install --save-dev grunt-hash-file-contents
```

## Usage

```js
grunt.loadNpmTasks('grunt-contrib-concat');

grunt.initConfig({
  hashFileContents: {
    algorithm: 'md5',
    encoding: 'hex',
    files: [
      'src/**/*.*'
    ],
    target: 'target/codebaseHash.txt'
  }
});

grunt.registerTask('default', ['hashFileContents']);
```

## Options

### algorithm

Type: `string`
Default: `md5`

The name of the hashing algorithm to use. This can be one of hte hashing algorithms available to node, the available algorithms depend on the version of OpenSSL on the platform. Examples are `sha256`, `sha512`, `md5` etc. It is recommended to stick to quick algorithms as a secure has isn't really the point here. 

### encoding

Type: `string`
Default: `hex`

The encoding of the resultant hash. Can be one of 'hex', 'binary' or 'base64'.

### files

Type: `array[string]`
Required

The array of blobbing patterns to use to fetch the files to turn into a hash. This is required.

### target

Type: `string`
Required

The name of the target file, this will contain the hash.