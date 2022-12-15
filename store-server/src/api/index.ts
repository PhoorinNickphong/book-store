import Router from 'koa-router'
import category from './category'
import book from './book'

const apiRounter = new Router()
apiRounter.get('/api/greet', async ( ctx, next) => {
    ctx.body = {msg: 'Hello world'}
})

apiRounter.use('/api/category',category.routes())
apiRounter.use('/api/book',book.routes())

export default apiRounter
