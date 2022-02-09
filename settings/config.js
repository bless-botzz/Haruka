const fs = require('fs')
const chalk = require('chalk')

// self or public
global.self = false //jadiin true klo gk mau fitur bot lu di pke sama org lain

// setting
global.ownername ="BlessXdOfc"
global.ownernumber = "6283845319280"
global.botname = "BLESSBOTZ-MD"
global.thumbnail = fs.readFileSync("./settings/bedu.jpg") //sesuaikan dengan nama foto
global.background = "https://telegra.ph/file/918a03657e7790b21cff6.jpg"
global.limit = {
		free:20,
		premium:1000
	}
global.session_name = "session.json"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
