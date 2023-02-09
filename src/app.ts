import { createServer } from 'node:http'
import { createApp, createRouter, eventHandler, toNodeListener } from 'h3'
const app = createApp()
const port = process.env.PORT || 3000
const router = createRouter()
router.get(
  '/',
  eventHandler(() => {
    return 'hello world'
  }),
)
app.use(router)
createServer(toNodeListener(app)).listen(port, undefined, () => {
  // eslint-disable-next-line no-console
  console.log(`server is runing at http://127.0.0.1:${port}/`)
})
