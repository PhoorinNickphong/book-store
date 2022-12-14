import Router from 'koa-router'
import category from './category'

const apiRounter = new Router()
apiRounter.get('/api/greet', async ( ctx, next) => {
    ctx.body = {msg: 'Hello world'}
})

apiRounter.use('/api/category',category.routes())

export default apiRounter
