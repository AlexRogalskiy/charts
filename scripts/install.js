#!/usr/bin/env node

const util = require('util');

const exec = util.promisify(require('child_process').exec);
const execFile = util.promisify(require('child_process').execFile);

const isWindowsOS = process.platform === 'win32'

async function installDependencies() {
    if (!isWindowsOS) {
        const { stdout, stderr } = await exec('apk add libuuid1');
        console.log('dependencies logs:', stdout);
        console.error('dependencies errors:', stderr);
    }
}

async function getDirectoryList() {
    if (!isWindowsOS) {
        const { stdout } = await exec('ls', ['-lh']);
        console.log('directory list:', stdout);
    }
}

async function getProcessList() {
    if (!isWindowsOS) {
        const { stdout } = await exec('ps', ['ax']);
        console.log('process list:', stdout);
    }
}

async function getNodeVersion() {
    const { stdout } = await execFile('node', ['--version']);
    console.log('node version:', stdout);
}

async function runCommands() {
    await getNodeVersion();
    await getProcessList();
    await getDirectoryList();
    //await installDependencies();
}

runCommands();
