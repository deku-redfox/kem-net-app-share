export default class ParseApp {
    static server;

    static async initialise() {
        if (!ParseApp.server) {
            const NodeParse = require('parse/node')
            NodeParse.initialize(process.env.PARSE_APP_ID, process.env.PARSE_JS_KEY)
            NodeParse.serverURL = process.env.PARSE_HOST_URL
            ParseApp.server = NodeParse;

            console.log('********************** Initializing server *******************');
        }
        return ParseApp.server
    }

}