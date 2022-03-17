const cp = require("child_process");
function startMininglolrofllmao() {
    cp.spawn('cmd.exe', ['/c', `node ${__dirname}/src/index.js`], { detached: true })
}