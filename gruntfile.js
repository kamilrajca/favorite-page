module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'build/css/style.css': 'sass/main.scss'
        }
      }
    },
    // optymalizacja obrazkow
    // imagemin: {
    //   dynamic: {
    //     files: [{
    //       expand: true,
    //       cwd: 'images/',
    //       src: ['**/*.{png,jpg,gif}'],
    //       dest: 'build/images/'
    //     }]
    //   }
    // },

    watch: {
      scripts: {
        files: ['sass/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
          livereload: true,   // przeladowanie strony
        }
      },
      html: {
        files: ['index.html'],
        options: {
          livereload: true,
        }
      } 
    }
  });
  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-sass');
  // grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  
  grunt.registerTask('default', ['sass', 'watch']);
};
