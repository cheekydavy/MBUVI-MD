const bot = require(__dirname + '/lib/client')
const { VERSION } = require(__dirname + '/config')

const start = async () => {
    Debug.info(`Suhail ${VERSION}`)
  try {
    await bot.init()
    Debug.info('Database syncing...')
    await bot.DATABASE.sync()
    await bot.connect()
  } catch (error) {
    Debug.error(error);
    start();
  }
}
start();
