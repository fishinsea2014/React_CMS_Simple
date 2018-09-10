/**
 * @author Jason Qu
 * This is a simple server of restful we API
 * Conect is a framework of node.js middleware, which handle the reqest from clients
 */

 var connect = require ('connect'); 

 // body parser extract the entire body portion of an incoming request stream and expose it on req.body
 var bodyParser = require ( 'body-parser'); 
 var serverStatic = require ('serve-static');

 var app = connect()
    .use(bodyParser.json()) //parse JSON
    .use(bodyParser.urlencoded({extended : true}))
    .use(serverStatic(__dirname))
    .use (function (req, res , next){
        //Make the response can be shared with resources with the given origin.
        res.setHeader('Access-Control-Allow-Origin', '*'); //Allow any resources
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); //Allow any request method
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-with, content-type, X-Session-Token'); //Allow any data type
        res.writeHead(200, {"Content-Type" : "text/plain ; charset=utf-8"}); //Convert to utf-8
        next();
    })
    
    .use('/cms_chart', (req, res, next) => {
        console.log("req: "+ req);
        let data = {
            "code" :"200",
            "msg"  : "success",
            "result" : [80, 932, 341, 934, 1290, 1330, 1320] 
        }
        res.end(JSON.stringify(data));        
        next();
    })

    .listen(3333);
    console.log('Server started on port 3333.')


