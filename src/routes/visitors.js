import express from 'express'
import { supabase } from '../supabaseClient.js'

const router = express.Router()

router.post('/', async (req, res) => {
  const { name, age, id_proof, visitor_mode } = req.body

  const { data, error } = await supabase
    .from('visitors')
    .insert([{ name, age, id_proof, visitor_mode }])
    .select()

  if (error) return res.status(400).json({ error })

  res.json(data)
})

router.get('/', async (req, res) => {
  const { data, error } = await supabase.from('visitors').select('*')

  if (error) return res.status(400).json({ error })

  res.json(data)
})

export default router
