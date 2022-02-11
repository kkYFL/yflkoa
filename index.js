const koa = require('koa')
const app = new koa()


app.use((context, next) => {
  console.log(context);
  context.body = 'hello world!'
})

app.listen(3000,'localhost');

