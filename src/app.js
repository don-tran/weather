'use strict'

import express from 'express'
import * as routes from './routes/index.js'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(bodyParser.json())

routes.init(app)

export default app