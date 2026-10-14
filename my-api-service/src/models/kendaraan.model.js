
import mongoose from 'mongoose'
import kendaraanSchema from '../schemas/kendaraan.schema.js'

const Kendaraan = mongoose.model('Kendaraan', kendaraanSchema)

export default Kendaraan
