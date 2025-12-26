import express from 'express'
import { supabase } from '../supabaseClient.js'

const router = express.Router()

// Create animal
router.post('/', async (req, res) => {
  const { name, age, food_type, join_date, monthly_expense } = req.body

  const { data, error } = await supabase
    .from('animals')
    .insert([{ name, age, food_type, join_date, monthly_expense }])
    .select()

  if (error) return res.status(400).json({ error })

  res.json(data)
})

// Get all animals
router.get('/', async (req, res) => {
  const { data, error } = await supabase.from('animals').select('*')

  if (error) return res.status(400).json({ error })

  res.json(data)
})

export default router
