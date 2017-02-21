
'use strict'

const _ = require('lodash')
const config = require('../config')
const Botkit = require('botkit')
const redis = require('botkit-storage-redis')(config('REDIS_URL'), {namespace: "helpme"})
console.log("Redis client object: " + redis.toString())

const msgDefaults = {
  response_type: 'in_channel',
  username: 'helpbot',
  icon_emoji: config('ICON_EMOJI')
}

const handler = (payload, res) => {
  
  const controller = Botkit.slackbot({
    debug: true,
    storage: redis
  })

  const id = payload.text.split(" ")[1]

  // Resolve help request with given ID
  console.log("Resolve request: " + id)
  controller.storage.channels.delete(id);
    
  const msg = "Request ID " + id + " has been resolved!"
  res.set('content-type', 'application/json')
  res.status(200).json(msg)
  return
}

module.exports = { pattern: /resolve/ig, handler: handler }
