export const BACKEND_HOST = (process.env.NODE_ENV === 'production' ? 'https://betgame-server.herokuapp.org' : 'http://localhost')
export const BACKEND_PORT = (process.env.NODE_ENV === 'production' ? 80 : 4000)