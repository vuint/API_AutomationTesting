var gulp = require ('gulp');
var merge = require ('gulp-merge-json');

gulp.task ('mergeJson', function () {
  return gulp
    .src ('.report/*.json')
    .pipe (
      merge ({
        startObj: [],
        concatArrays: true,
      })
    )
    .pipe (gulp.dest ('.report'));
});

// Generate xml report from result test json file
gulp.task ('report', ['mergeJson'], function () {
  return gulp
    .src ('report/*.json')
    .pipe (cucumberXmlReport ({strict: true}))
    .pipe (gulp.dest ('report'));
});

function cucumberXmlReport (opts) {
  var gutil = require ('gulp-util'),
    through = require ('through2'),
    cucumberJunit = require ('./lib/cucumber_junit2');

  return through.obj (function (file, enc, cb) {
    // If tests are executed against multiple browsers/devices
    var suffix = file.path.match (/\/(.*)\.json/);
    if (suffix) {
      opts.prefix = suffix[1] + ';';
    }

    var xml = cucumberJunit (file.contents, opts);
    file.contents = new Buffer.from (xml);
    file.path = gutil.replaceExtension (file.path, '.xml');
    cb (null, file);
    console.log ('XML report has been generated at: ' + file.path);
  });
}
