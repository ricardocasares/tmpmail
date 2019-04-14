# tmpmail

Temporary email service based on Mailgun

## Installation

You'll need a [mailgun account](https://www.mailgun.com/), also a domain name, but you can use the mailgun sandbox domain.

1. Signup for mailgun
1. Add your domain and follow the instructions or use the sanbox one
1. Create a [catch-all route](https://app.mailgun.com/app/routes) on mailgun and mark the checkbox `Store and notify`
1. Check what's your [api key](https://app.mailgun.com/app/account/security/api_keys) for later
1. Rename `backend/env.sample` to `backend/.env` and edit with your settings
