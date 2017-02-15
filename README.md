# 🌟 Help Me Bot

![Starbot](https://heroku-www-files.s3.amazonaws.com/starbot/starbot-banner.png)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


### Supported `/slash` commands

Create a `/starbot` [custom slash command](https://api.slack.com/slash-commands), using the URL: `{app-name}.herokuapp.com/commands/starbot`. *Take note of the provided `token`, this is used to verify requests come from Slack.*

- `/starbot` or `/starbot help` - List available commands
- `/starbot repos` - Display trending GitHub projects

### Install

```shell
$ npm install
```

### Copy `.env-example` to `.env`

```shell
$ cp .env-example .env
```

### Configure

```shell
SLACK_TEAM_TOKEN=xoxb...8WRqKWx
NODE_ENV=development
PORT=3000
```
### Run

```shell
$ npm start

🚀 Starbot LIVES on PORT 3000 🚀
```

Visit [localhost:3000](http://localhost:3000).

### Deploy


### License

