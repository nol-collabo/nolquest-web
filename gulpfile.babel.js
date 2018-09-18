import gulp from 'gulp';
import nodemon from 'gulp-nodemon'
import config from './config'

gulp.task('nodemon', function (cb) {
  var started = false;

  return nodemon({
    script: './bin/www',
    ext: 'js sql',
    ignore: [
      'node_modules/'
    ],
    watch: ['routes/', 'models/', 'lib/', 'config/', 'data/', 'app.js', 'db.js', 'targets.js']
  }).on('start', function () {
    if (!started) {
      cb();
      started = true;
    }
  })
})

gulp.task('default', ['nodemon'], () => {
  console.log('Start html-from-pug ... port: ' + config.port)
})
