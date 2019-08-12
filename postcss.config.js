module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-import': {},
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
      selectorBlackList: ['.ignore'], // 忽略转换正则匹配项 'van'
      minPixelValue: 2 //小于指定数值的px不转换
    }
  }
}
