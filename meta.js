// 定义 模板中的一些配置
const path = require('path')
const fs = require('fs')

const {
  sortDependencies,
  installDependencies,
  runLintFix,
  printMessage,
} = require('./utils')
const pkg = require('./package.json')

const templateVersion = pkg.version

const { addTestAnswers } = require('./scenarios')

module.exports = {
  metalsmith: {
    // When running tests for the template, this adds answers for the selected scenario
    before: addTestAnswers
  },
  // 自定义 的Handlebars 辅助函数
  helpers: {
    if_or(v1, v2, options) {

      if (v1 || v2) {
        return options.fn(this)
      }

      return options.inverse(this)
    },
    template_version() {
      return templateVersion
    },
  },
  // 收集用户自定义数据
  prompts: {
    name: {
      when: 'isNotTest',
      type: 'string',
      required: true,
      message: '项目名：',
    },
    description: {
      when: 'isNotTest',
      type: 'string',
      required: false,
      message: '项目描述：',
      default: 'A Vue.js project',
    },
    author: {
      when: 'isNotTest',
      type: 'string',
      message: '作者：',
    },


    lint: {
      when: 'isNotTest',
      type: 'confirm',
      message: '需要使用 ESLint 语法规则和代码风格来检查你的代码吗?',
    }
  },
  // 根据条件过滤文件
  filters: {
    '.eslintrc.js': 'lint',
    '.eslintignore': 'lint'
  },
  // 模板渲染完成后的回调函数， 优先于completeMessage
  complete: function(data, { chalk }) {
    const green = chalk.green

    sortDependencies(data, green)

    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)

    if (data.autoInstall) {
      installDependencies(cwd, data.autoInstall, green)
        .then(() => {
          return runLintFix(cwd, data, green)
        })
        .then(() => {
          printMessage(data, green)
        })
        .catch(e => {
          console.log(chalk.red('Error:'), e)
        })
    } else {
      printMessage(data, chalk)
    }
  },
}
