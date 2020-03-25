import { Router } from 'express'
import axios from 'axios'
const url = 'https://www.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true'

const routes = Router()

routes.get('/videos', async (req, res) => {
  await axios.get(`${url}&key=${process.env.GOOGLE_API_KEY}`)
    .then(result => {
      res.end(JSON.stringify(result))
    }).catch(error => {
      res.end(JSON.stringify(error))
    })
})

export default routes
