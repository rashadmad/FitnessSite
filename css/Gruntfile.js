module.exports = function(grunt) {
 
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shopify');
 
  grunt.initConfig({
    shopify: {
      options: {
        //You can find these in your Shopify Admin under Apps then look at the bottom for Create a private API Key
        api_key: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        password: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        url: "YOUR-STORE-NAME.myshopify.com",
        base: 'shop/'
      }
    },
    watch: {
      shopify: {
        files: ['shop/**'],
        tasks: ["shopify"]
      }
    }
 
  });
 
  grunt.registerTask('default', ['shopify']);
 
};