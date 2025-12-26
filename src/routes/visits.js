import express from 'express'
import { supabase } from '../supabaseClient.js'

const router = express.Router()

router.post('/', async (req, res) => {
  const { visitor_id, animal_id, ticket_price } = req.body

  const { data, error } = await supabase
    .from('visits')
    .insert([{ visitor_id, animal_id, ticket_price }])
    .select()

  if (error) return res.status(400).json({ error })

  res.json(data)
})

// Get visitor count per animal
router.get('/animal/:animalId/count', async (req, res) => {
  const { animalId } = req.params

  const { count, error } = await supabase
    .from('visits')
    .select('*', { count: 'exact', head: true })
    .eq('animal_id', animalId)

  if (error) return res.status(400).json({ error })

  res.json({ visitor_count: count })
})

export default router
