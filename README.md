# tame

<br>

## Description
An app that allows users to track their migraines, view personal migraine statistics and recommend remedies to other users.

## User Stories

-  **Start** As a anon I can see what the site is about before I sign up 
-  **Signup:** As an anon I can sign up in the platform so that I can start tracking my migraines
-  **Login:** As a user I can login to the platform so that I can track my migraines
-  **Logout:** As a user I can logout from the platform so no one else can modify my information
- **Add new migraine info** As a user I can record a new migraine attack
- **View stats** As a user I can see my personal migraine history and statistics
- **Edit migraines** As a user I can edit details of my migraines
- **Delete migraines** As a user I can delete migraines
- **Recommend** As a user I can recommend remedies to other users and see what is recommended by them
- **Explore** As a user I can read articles and watch videos about migraines

## Backlog
- Night mode to alleviate eye strain
- Phone notifications
- Voice navigation

# Server / Backend


## Models

User model

```javascript
{
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  migraines: [migraines]
  recommends: [recommends]
}
```



Migraine model

```javascript
 {
   start: {type: Date, required: true},
   end: {type: Date, required: true},
   symptoms: [symptoms]
   pain: {type: Number, required: true},
   triggers: [triggers]
   remedies: [remedies]
   notes: {type: String},
 }
```


Remedy model

```javascript
 {
   name: {type: String, required: true},
   description: {type: String, required: true},
   rating: {type: Number}
 }
```


<br>


## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| POST        | `/auth/signup`                | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                 | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session    |
| POST        | `/auth/logout`                | (empty)                      | 204            | 400          | Logs out the user                                            |
| POST        | `/migraines/create`                 | {platform, title, type, id}  |                | 400          | Add new migraine and add to user                                               |
| GET         | `/migraines`             |                              |                | 400          | Show all migraines                                           |                                        |
| DELETE      | `/migraine/:id`                 |                              | 201            | 400          | delete element                                               |
| PATCH         | `/migraine/:id`                |                              |                | 400          | edit element                                         |
| GET         | `/recommendations`                 |                              |                |              | Show recommendations         
| POST         | `/recommendations/create`                 |                              |                |              | Add new recommendation                                    |
| GET         | `/media`                 |                              |                |              | Show media                                          |



<br>

  ## Links

### Trello/Kanban

[Link to your trello board]() 
or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/brittahelm/tame-client)

[Server repository Link](https://github.com/brittahelm/tame-server)

[Deployed App Link]()

### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/16NyniG3zRQL8AWXdVEb-qX6eyv0xLjbKvOc_xuLJlkw/edit?usp=sharing)