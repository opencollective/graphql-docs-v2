# Open Collective GraphQL API v2 Docs

## Updating:

Installing graphdoc:

`npm install -g @2fd/graphdoc`

Updating documentation:

`graphdoc -e https://api.opencollective.com/graphql/v2 -o ./update`

`cp -R update/* ./ && rm -rf update`

## Deploying

Login on Vercel:

`vercel login`

Switching to Open Collective team:

`vercel switch opencollective`

Deploying:

`vercel --prod`
