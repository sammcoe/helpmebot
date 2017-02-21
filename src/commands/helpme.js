
'use strict'

const _ = require('lodash')
const config = require('../config')
const Botkit = require('botkit')
const redis = require('botkit-storage-redis')(config('REDIS_URL'))
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

  const url_array = payload.response_url.split('/')
  const id = url_array[url_array.length() - 1]
  console.log("Unique request ID:" + id)

  // Create a help event with payload
  const helpReq = {id: payload.channel_id, request: payload.text}
  console.log("Help request: " + helpReq)
  controller.storage.channels.save(helpReq);
    
  const msg = "Help request received!"
  res.set('content-type', 'application/json')
  res.status(200).json(msg)
  return
}

module.exports = { pattern: /helpme/ig, handler: handler }
