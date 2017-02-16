
'use strict'

const _ = require('lodash')
const config = require('../config')

const msgDefaults = {
  response_type: 'in_channel',
  username: 'helpbot',
  icon_emoji: config('ICON_EMOJI')
}

const handler = (payload, res) => {
    
    res.set('content-type', 'application/json')
    res.status(200).json(msg)
    return
}

module.exports = { pattern: /repos/ig, handler: handler }
