const path = require('path');
const fs = require('fs');

export function getAppBuildVersion() {
  const DIST_FOLDER = path.join(process.cwd(), 'dist/browser');
  return new Promise(resolve => {
    fs.readdir(DIST_FOLDER, (err, files) => {
      const mainHash = getMainHash(files);
      resolve(mainHash);
    });
  });
}

function getMainHash(files) {
  const mainFile = files.find(fileName => fileName.indexOf('main') >= 0);
  if (mainFile) {
    return mainFile.split('.').splice(-2, 1).join('');
  } else {
    return Date.now();
  }
}
