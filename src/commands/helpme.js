
'use strict'

const _ = require('lodash')
const config = require('../config')
const Botkit = require('botkit')

const redis = require('botkit-storage-redis')
console.log(redis.toString())
const controller = Botkit.slackbot({
  debug: true,
  logLevel: 7,
  storage: redis.config
})


const msgDefaults = {
  response_type: 'in_channel',
  username: 'helpbot',
  icon_emoji: config('ICON_EMOJI')
}

const handler = (payload, res) => {

  // Create a help event with payload
  var helpReq = {id: payload.channel, request: payload.text}
  console.log(helpReq)
  controller.storage.channels.save(helpReq);
    
  const msg = "Help request received!"
  res.set('content-type', 'application/json')
  res.status(200).json(msg)
  return
}

module.exports = { pattern: /helpme/ig, handler: handler }
