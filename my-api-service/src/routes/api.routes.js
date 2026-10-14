
import express from 'express'
import KendaraanController from '../controllers/kendaraan.controller.js'

const router = express.Router()

router.post('/kendaraans', KendaraanController.store)
router.get('/kendaraans', KendaraanController.index)
router.get('/kendaraans/:id', KendaraanController.show)
router.put('/kendaraans/:id', KendaraanController.update)
router.delete('/kendaraans/:id', KendaraanController.destroy)

export default router