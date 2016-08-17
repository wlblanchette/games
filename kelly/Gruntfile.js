/*global module:false*/
module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);
  
  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    browserify: {
      dist: {
        options: {
          transform: [
            ["babelify", {
              presets: ['es2015'],
              plugins: ["transform-object-rest-spread", "transform-react-jsx"],
            }]
          ]
        },
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**/**/**/*.js'],
            dest: 'build/'
          },
        ],
      },
    },
    sass: {
      options: {
        style: 'expanded',
        sourceMap: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src/sass/',
          src: ['*.scss'],
          dest: 'build/css/',
          ext: '.css'
        }]
      }
    },
    jshint: {
      files: ['src/**/**/**/*.js'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: false,
        boss: true,
        eqnull: true,
        browser: true,
        esnext: true,
        globals: {
          jQuery: true,
          mobile: true,
          console: true
        },
      },
    },
    copy: {
      main: {
        expand: true,
        cwd: 'src/',
        src: ['**/**/**/*.html'],
        dest: 'build/',
      },
    },
    // browserify: {
    //   js: {
    //     expand: true,
    //     cwd: 'src/',
    //     src: ['**/**/*.js'],
    //     dest: 'build/'
    //   }
    // },
    watch: {
      target: {
        files: ['src/**/**/**/*.js','src/**/**/**/*.html'],
        tasks: []
      },
    },
  });

  // These plugins provide necessary tasks.
  // grunt.loadNpmTasks('grunt-contrib-babel');
  // grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-browserify');

  // Default task.
  grunt.registerTask('default', ['watch']);
  grunt.registerTask("build", ["browserify", "copy", "sass"]);
  grunt.registerTask("jshint", ["jshint"]);
  grunt.registerTask("html", ["copy"]);

  grunt.event.on('watch', function(action, filepath) {
    grunt.config('browserify.dist.files', "");
    grunt.config('copy.main', "");

    grunt.config('copy.main.src', filepath);
    grunt.config('copy.main.dest', 'build/');
    grunt.config('copy.main.expand', true);
    
    grunt.config('browserify.dist.files.src', filepath);
    grunt.config('copy.main.dest', 'build/');
    grunt.config('copy.main.expand', true);

    grunt.task.run(['copy', 'browserify']);
  });
};
