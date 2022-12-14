import Koa from 'koa'
import json from 'koa-json'
import apiRounter from './api'

const app = new Koa()
app.use(json)
app.use(apiRounter.routes())

app.listen(8000)
