const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function installDependencies() {
    const { stdout, stderr } = await exec('apt-get install libuuid1');
    console.log('stdout:', stdout);
    console.error('stderr:', stderr);
}

async function runCommand() {
    if (process.platform !== 'win32') {
        await installDependencies()
    }
}

runCommand();
