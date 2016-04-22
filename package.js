Package.describe({
  name: 'q0821:orion-lang-zh-tw',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Orion Traditional Chinese language',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/q0821/orion-lang-zh-tw',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use('orionjs:lang-en@1.3.0'); // This is the base language
  api.imply('orionjs:lang-en');
  api.addFiles('zh-tw.js');
});