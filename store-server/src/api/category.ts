import Router from "koa-router";

const category = new Router()
category.get('/',async (ctx,next) => {
    ctx.body = [
        {id: 1,title: 'Fantasy'},
    ]
})

export default category
