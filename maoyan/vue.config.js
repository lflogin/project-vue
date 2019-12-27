const mockArr = require('./public/mock/index.json');
const dataArr = require('./public/mock/data.json')

module.exports = {
  lintOnSave: false,
  devServer: {
   before(app) {
     //正在上映数据
    app.get('/api/mock',(req,res)=>{
      res.json(mockArr)
    })
    //即将上瘾数据
    app.get('/api/data',(req,res)=>{
      res.json(dataArr)
    })
   }
  }
}