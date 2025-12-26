// const express = require('express')
import express from 'express';
import dotenv from 'dotenv'

import animalRoutes from './routes/animals.js'
import visitorRoutes from './routes/visitors.js'
import visitRoutes from './routes/visits.js'

dotenv.config()

const app = express()

app.use(express.json())

app.use('/animals', animalRoutes)
app.use('/visitors', visitorRoutes)
app.use('/visits', visitRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
