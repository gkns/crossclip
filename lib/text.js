//import { osLocale } from 'os-locale'
const osLocale = require('os-locale')

const locale = osLocale.sync()
try {
  module.exports = require(`../text/${locale}.json`)
} catch (error) {
  module.exports = require('../text/en_US.json')
}
