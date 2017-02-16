
'use strict'

const _ = require('lodash')
const config = require('../config')

const msgDefaults = {
  response_type: 'in_channel',
  username: 'helpbot',
  icon_emoji: config('ICON_EMOJI')
}

let attachments = [
  {
    title: "Help Bot will assit you in getting help from real people. Not that Help Bot isn't a real people.",
    color: '#2FA44F',
    text: '`/helpme [request]` logs a request for help, and will post a reminder every 15 minutes',
    mrkdwn_in: ['text']
  },
  {
    title: 'Configuring Help Bot',
    color: '#E3E4E6',
    text: '`/helpme help` ... you\'re lookin at it! \n',
    mrkdwn_in: ['text']
  }
]

const handler = (payload, res) => {
  let msg = _.defaults({
    channel: payload.channel_name,
    attachments: attachments
  }, msgDefaults)

  res.set('content-type', 'application/json')
  res.status(200).json(msg)
  return
}

module.exports = { pattern: /help/ig, handler: handler }
