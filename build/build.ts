const { copyFile, remove, writeFile } = require('fs-extra');

async function handlePackageJSON() {
   const keys = [
      'name',
      'version',
      'author',
      'respository',
      'homepage',
      'bugs',
      'peerDependencies'
   ];
   const pkg = require('./package.json');
   const origPackage = require('../package.json');

   // Copy keywords
   keys.forEach((key) => {
      pkg[key] = origPackage[key];
   });

   await writeFile('./dist/package.json', JSON.stringify(pkg));
}

async function init() {
   try {
      // Copy files
      // await copyFile('README.md', './dist/README.md');

      // Create package.json
      await handlePackageJSON();
   } catch (error) {
      console.error('Build Failed\n\n', error);
   }
}

init();
