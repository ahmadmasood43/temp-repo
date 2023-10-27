// const amount = 5
// if(amount < 10){
//     console.log('small number');
// }
// else{
//     console.log('large number');
// }

// console.log(`hey it's my first node app!!!`)

// ---------gloabals--------

// console.log(__dirname)
// setInterval(() => {
//     console.log('hello world')
// }, 10000)

// ---------Modules----------

//const names = require('./4-name')
//const sayHi = require('./5-name')
//const data = require('./6-alternative-flavor')
//require('./7-mind-grenade')
//console.log(data)
// sayHi(names.aamir)
// sayHi(names.peter)
// sayHi('ahmad')


//--------Built-in Modules-----

// const os = require('os')

// //info about current user
// const user = os.userInfo()


// //method returns the system uptime in seconds
// console.log(`The system Uptime is ${os.uptime()} seconds`)

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }
// console.log(currentOS)

//-------path module -----

// const path = require('path')
// console.log(path.sep)
// const filepath = path.join('/content/', 'subfolder', 'test.txt')
// console.log(filepath)

// const base = path.basename(filepath)
// console.log(base)

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
// console.log(absolute)

//---------Fs module-------

//------ SYNC -------
// const {readFileSync, writeFileSync} = require('fs')
// console.log('start')
// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')

// writeFileSync(
//     './content/result-sync.txt',
//     `here is the result: ${first}, ${second}`,
//     { flag: 'a' }
// )
// console.log('done with this task')
// console.log('starting the next one')

//--------- ASYNC --------

// const {readFile, writeFile} = require('fs')
// console.log('start')

// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err){
//         console.log(err)
//         return
//     }
//     const first = result;
//     readFile('./content/second.txt', 'utf8', (err, result) =>{
//         if (err){
//             console.log(err)
//             return
//         }
//         const second = result;
//         writeFile(
//             './content/result-async.txt',
//             `Here is the result : ${first}, ${second}`
//         , (err,result) =>{
//             if(err){
//                 console.log(err)
//                 return
//             }
//             console.log('done with this task')
//         })
//     })
// })
// console.log('starting next task')

//----- HTTP -----
// const http = require('http');

// const server = http.createServer((req, res) =>{
//     if(req.url === '/'){
//         res.end('Welcome to our home page')
//     }
//     if(req.url === '/about'){
//         res.end('here is our short history')
//     }
//     res.end(`
//         <h1>Oops!</h1>
//     <p>We can't seem to find the page</p>
//     <a href = "/">back home </a>
//         `)
// })
// server.listen(5000)

// --------- NPM --------

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);