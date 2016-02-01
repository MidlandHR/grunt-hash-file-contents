module.exports = function(grunt) {
    var crypto = require('crypto');

    var getConfig = function() {
        return grunt.config('hashFileContents');
    };

    grunt.registerTask('hashFileContents', function() {
        var config = getConfig(),
            hash = crypto.createHash(config.algorithm || 'md5');

        if(!(config.files && config.target)) {
            grunt.fatal('Missing config information, requires files and target');
        }

        grunt.file.expand(config.files).forEach(function(file) {
            hash.update(grunt.file.read(file));
        });

        grunt.file.write(config.target, hash.digest(config.encoding || 'hex'));
    });
};
