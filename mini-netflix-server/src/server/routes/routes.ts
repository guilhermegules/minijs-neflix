import { Router } from 'express'
import axios from 'axios'
import dotenv from 'dotenv'
import { users } from '../user/users'
dotenv.config()

const url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10'

const routes = Router()

routes.get('/', (req, res) => {
  axios.get(`${url}&key=${process.env.GOOGLE_API_KEY}`)
    .then(result => {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
      res.send(result.data.items)
    }).catch(error => {
      res.end(error)
    })
})

//todo login
routes.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
  res.status(200).send()
})

routes.get('*', (req, res) => {
  res.send("You should access 'http://localhost:3333/'")
})

export default routes
