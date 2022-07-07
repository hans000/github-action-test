const fse = require('fs-extra')
const path = require('path')

const filename = path.resolve('./docs/test.txt')

if (! fse.existsSync(filename)) {
    fse.mkdirSync(path.dirname(filename))
}
fse.writeFileSync(filename, '{}')