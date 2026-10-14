
import mongoose from 'mongoose'

const kendaraanSchema = new mongoose.Schema({
  nomor_polisi: {
    type: String,
    required: true
  },
  merk: {
    type: String,
    required: true
  },
  tahun_produksi: {
    type: Number,
    required: true
  }
})

export default kendaraanSchema
