
import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import apiRoutes from './routes/api.routes.js'

const app = express()
const PORT = process.env.APP_PORT || 3000

app.use(express.json())
app.use('/api', apiRoutes)

mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('MongoDB connected successfully')

    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`)
    })
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error.message)
  })
