
## Install project dependencies
```
$ yarn / npm install
```

## Install PostgreSQL

Look up instructions for your specific OS/distribution.

## Initialize DB
```
$ yarn db:init | npm run db:init
```

Run server:
```
$ yarn start | npm start
```

API: 

```
Idea:

GET: /api/ideas
GET: /api/ideas/:id

POST: /api/ideas 
body: title, description, budget, isReadyForComments, peopleNeeded, categoryId

PUT: /api/ideas/:id
body: title, description, budget, isReadyForComments, peopleNeeded, categoryId

DELETE: /api/ideas/:id

```

```
Comment:

GET: /api/ideas/:id/comments

```
