import 'dotenv/config'

export const APP_PORT = process.env.APP_PORT ?? '3000'
export const DATABASE_URL = 'mongodb://127.0.0.1:27017/alexia_chelsea_manajemen_data_kendaraan'
export const JWT_SECRET = process.env.JWT_SECRET ?? 'supersecretkey'
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN ?? '1d'
