const polymerCLI = require('polymer-cli');
const events = require('events');
const domain = require('domain');
const polymerJSON = require('./my-app/polymer.json');

domain.active = domain.create();
domain.active.on('error', error => console.error(error.stack));
events.usingDomains = true;

const polymerCli = new polymerCLI.PolymerCli(['build'], polymerJSON);
polymerCli.run();
