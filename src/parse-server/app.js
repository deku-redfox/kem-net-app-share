export default class ParseApp {
    static parse;

    static async initialise() {
        if (!ParseApp.parse) {
            const Parse = require('parse/node')
            Parse.initialize(process.env.PARSE_APP_ID, process.env.PARSE_JS_KEY)
            Parse.serverURL = process.env.PARSE_HOST_URL
            ParseApp.parse = Parse;

            console.log('********************** Initializing server *******************');
        }
        return ParseApp.parse
    }

}