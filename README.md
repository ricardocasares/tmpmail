# tmpmail

Temporary email service based on mailgun

## Installation

You'll need a [mailgun account](https://www.mailgun.com/), also a domain name, but you can use the mailgun sandbox domain.

1. Signup for mailgun
1. Add your domain and follow the instructions or use the sanbox one
1. Create a [catch-all route](https://app.mailgun.com/app/routes) on mailgun and mark the checkbox `Store and notify`
1. Find out what's your [api key](https://app.mailgun.com/app/account/security/api_keys) for the next step
1. Rename `backend/env.sample` to `backend/.env` and edit with your settings
1. Run `yarn dev` at the root of the project

**NOTE**: You'll have to provide the environment variables on production somehow
