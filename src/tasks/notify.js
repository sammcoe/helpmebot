
'use strict'

const _ = require('lodash')
const config = require('../config')
const trending = require('github-trending')
const Botkit = require('botkit')

var controller = Botkit.slackbot({})
var bot = controller.spawn({
  incoming_webhook: {
    url: config('WEBHOOK_URL')
  }
})

const msgDefaults = {
  response_type: 'in_channel',
  username: 'helpmebot',
  icon_emoji: config('ICON_EMOJI'),
  text: "Test message."
}

bot.sendWebhook({text: "This is test"}, function(err, res) {
  if (err) {
    console.log("Failure to launch.")
  } else {
    console.log("Sent.")
  }
})
