import Kendaraan from '../models/kendaraan.model.js'

class KendaraanController {
  // GET: Menampilkan semua data kendaraan
  static async index(req, res) {
    try {
      const kendaraan = await Kendaraan.find()

      return res.status(200).json({
        data: kendaraan
      })
    } catch {
      return res.status(500).json({
        message: 'Terjadi kesalahan pada server'
      })
    }
  }

  // GET BY ID: Menampilkan detail kendaraan
  static async show(req, res) {
    try {
      const { id } = req.params

      if (!/^[0-9a-fA-F]{24}$/.test(id)) {
        return res.status(400).json({
          message: 'ID kendaraan tidak valid'
        })
      }

      const kendaraan = await Kendaraan.findById(id)

      if (!kendaraan) {
        return res.status(404).json({
          message: 'Data kendaraan tidak ditemukan'
        })
      }

      return res.status(200).json({
        data: kendaraan
      })
    } catch {
      return res.status(500).json({
        message: 'Terjadi kesalahan pada server'
      })
    }
  }

  // POST: Menambahkan data kendaraan
  static async store(req, res) {
    try {
      const { nomor_polisi, merk, tahun_produksi } = req.body

      if (
        typeof nomor_polisi !== 'string' ||
        !nomor_polisi.trim() ||
        typeof merk !== 'string' ||
        !merk.trim() ||
        tahun_produksi === undefined ||
        tahun_produksi === null ||
        tahun_produksi === '' ||
        typeof tahun_produksi !== 'number' ||
        !Number.isFinite(tahun_produksi) ||
        !Number.isInteger(tahun_produksi) ||
        tahun_produksi < 1886
      ) {
        return res.status(400).json({
          message: 'nomor_polisi dan merk wajib berupa teks, sedangkan tahun_produksi wajib berupa angka bulat minimal 1886'
        })
      }

      const kendaraan = await Kendaraan.create({
        nomor_polisi: nomor_polisi.trim(),
        merk: merk.trim(),
        tahun_produksi
      })

      return res.status(201).json({
        message: 'Data kendaraan berhasil ditambahkan',
        data: kendaraan
      })
    } catch (error) {
      if (error.name === 'ValidationError' || error.name === 'CastError') {
        return res.status(400).json({
          message: 'Data kendaraan tidak valid'
        })
      }

      return res.status(500).json({
        message: 'Terjadi kesalahan pada server'
      })
    }
  }

  // PUT: Memperbarui data kendaraan
  static async update(req, res) {
    try {
      const { id } = req.params
      const { nomor_polisi, merk, tahun_produksi } = req.body

      if (!/^[0-9a-fA-F]{24}$/.test(id)) {
        return res.status(400).json({
          message: 'ID kendaraan tidak valid'
        })
      }

      if (
        typeof nomor_polisi !== 'string' ||
        !nomor_polisi.trim() ||
        typeof merk !== 'string' ||
        !merk.trim() ||
        tahun_produksi === undefined ||
        tahun_produksi === null ||
        tahun_produksi === '' ||
        typeof tahun_produksi !== 'number' ||
        !Number.isFinite(tahun_produksi) ||
        !Number.isInteger(tahun_produksi) ||
        tahun_produksi < 1886
      ) {
        return res.status(400).json({
          message: 'Semua field wajib diisi dengan tipe data yang sesuai'
        })
      }

      const kendaraan = await Kendaraan.findByIdAndUpdate(
        id,
        {
          nomor_polisi: nomor_polisi.trim(),
          merk: merk.trim(),
          tahun_produksi
        },
        {
          new: true,
          runValidators: true
        }
      )

      if (!kendaraan) {
        return res.status(404).json({
          message: 'Data kendaraan tidak ditemukan'
        })
      }

      return res.status(200).json({
        message: 'Data kendaraan berhasil diperbarui',
        data: kendaraan
      })
    } catch (error) {
      if (error.name === 'ValidationError' || error.name === 'CastError') {
        return res.status(400).json({
          message: 'Data kendaraan tidak valid'
        })
      }

      return res.status(500).json({
        message: 'Terjadi kesalahan pada server'
      })
    }
  }

  // DELETE: Menghapus data kendaraan
  static async destroy(req, res) {
    try {
      const { id } = req.params

      if (!/^[0-9a-fA-F]{24}$/.test(id)) {
        return res.status(400).json({
          message: 'ID kendaraan tidak valid'
        })
      }

      const kendaraan = await Kendaraan.findByIdAndDelete(id)

      if (!kendaraan) {
        return res.status(404).json({
          message: 'Data kendaraan tidak ditemukan'
        })
      }

      return res.status(200).json({
        message: 'Data kendaraan berhasil dihapus',
        data: kendaraan
      })
    } catch  {
      return res.status(500).json({
        message: 'Terjadi kesalahan pada server'
      })
    }
  }
}

export default KendaraanController