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
    //导航守卫
    const arr = [
      {
        user: 'login',
        pwd: '123'
      }
    ]
    app.get('/api/login',(req,res)=>{
       let { user, pwd } = req.query;
       const isshow = arr.some(val=>val.user===user&&val.pwd===pwd);
       if(isshow) {
         res.json({
           errCode: 0,
           token: `user_${user}_${Date.now()}`
         })
       } else {
         res.json({
           errCode: -1
         })
       }
    })
   }
  }
}