import { Router } from 'express'
import axios from 'axios'
import dotenv from 'dotenv'
import { users } from '../user/users'
dotenv.config()

const url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&order=relevance&q=netflix%20trailer&type=video'

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

routes.get('/login', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
  res.send(users)
})

routes.get('*', (req, res) => {
  res.send("You should access 'http://localhost:3333/'")
})

export default routes
