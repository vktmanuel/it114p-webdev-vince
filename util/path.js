const path = require('path');
const rootDir = path.dirname(process.mainModule.filename);
const pathUtil = {
    root: rootDir,
    public: path.join(rootDir, 'public/'),
    views: path.join(rootDir, 'views/')
}

module.exports = pathUtil;