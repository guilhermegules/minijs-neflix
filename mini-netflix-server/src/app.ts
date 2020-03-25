import express from 'express'

import routes from './server/routes/routes'

class App {
  private users = require('./users/users')
  public express: express.Application;

  public constructor () {
    this.express = express()
    this.middlewares()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
