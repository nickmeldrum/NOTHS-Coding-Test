const { CLIEngine } = require('eslint')

const cli = new CLIEngine({})

module.exports = {
  '*.ts': (files) => {
    const fileList = files.filter((file) => !cli.isPathIgnored(file)).join(' ')
    return [
      `eslint --max-warnings=0 ${fileList}`,
      `jest --bail --findRelatedTests ${fileList}`,
    ]
  }
}
