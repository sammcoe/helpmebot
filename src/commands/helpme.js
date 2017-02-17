
'use strict'

const _ = require('lodash')
const config = require('../config')
const Botkit = require('botkit')
const redis = require('botkit-storage-redis')

const controller = Botkit.slackbot({
  storage: redis
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
    
  res.set('content-type', 'application/json')
  res.status(200).json(msg)
  return
}

module.exports = { pattern: /helpme/ig, handler: handler }
