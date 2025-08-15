require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
  "login": "loveCoder52",
  "id": 194515007,
  "node_id": "U_kgDOC5gQPw",
  "avatar_url": "https://avatars.githubusercontent.com/u/194515007?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/loveCoder52",
  "html_url": "https://github.com/loveCoder52",
  "followers_url": "https://api.github.com/users/loveCoder52/followers",
  "following_url": "https://api.github.com/users/loveCoder52/following{/other_user}",
  "gists_url": "https://api.github.com/users/loveCoder52/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/loveCoder52/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/loveCoder52/subscriptions",
  "organizations_url": "https://api.github.com/users/loveCoder52/orgs",
  "repos_url": "https://api.github.com/users/loveCoder52/repos",
  "events_url": "https://api.github.com/users/loveCoder52/events{/privacy}",
  "received_events_url": "https://api.github.com/users/loveCoder52/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2025-01-10T14:57:45Z",
  "updated_at": "2025-08-15T04:28:31Z"
};

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) =>{
    res.send('About Us')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please Login on codewithlove</h1>')
})

app.get('/youtube', (req, res) =>{
    res.send('<h1>Welcome to the YouTube page</h1>')
})

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
