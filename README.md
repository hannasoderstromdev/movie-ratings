# Movie-Ratings

Mono-repo for Movie-Ratings API and Client.

## API

- Pattern: MVC
- Database: Mongodb
- Authentication: JSON Web Token
- Encryption: bcrypt

## Client

- Single-page Application built with React.
- The UI is designed for mobile, future versions will handle desktop as well.
- Design can be viewed on figma: https://www.figma.com/file/a4lVBProS8RJi8IySHItU8Nc/Movie-Ratings?node-id=0%3A1
- Features and backlog can be seen at trello: https://trello.com/b/ZnvGM75b/movie-ratings

### Architecture

The client architecture it split into three layers. _The UI-layer_ (what you see and interact with). _The domain-layer_ (the store and data-objects) and _the data-access-layer_ with services that handles the communication with the API for fetching and updating stuff.

I'm trying this out as I've found that testing asynchronous thunks with a lot of side-effects is quite complex, and also I don't particularly like the Redux-Saga pattern with generators, as they are a bit hard to grasp intuitively.

With services, I can repeat the same file-structure as for action-creators and reducers and its a clear separation of concern which makes testing much easier.

### Styled Components and Styleguidist

I really like css-in-js and since we're already doing HTML-in-js with JSX in React, I don't see the problem with doing the same with CSS. This makes handling different styling based on different props a breeze.

In order to build components separately from the application, I've used Styleguidist which also lets you easily build a clear and neat documentation for the UI-library.

### Atomic Design

For the UI-components I've implemented the Atomic Design-structure. This means you start with the basic building blocks as _atoms_ (labels, inputfields, buttons) and then combine them to more complex _molecules_ (menus, formfields) and then _organisms_ for even more complex sections of components.

These then combines into Pages which are the routes for the application.

You can read more about the Atomic Design-principles in practice here: https://medium.com/backticks-tildes/visually-breaking-down-ui-components-using-atomic-design-part-1-476e1ddd73ca

## Release Notes

### v2.1.0 - New style for movies

Features:

- New style for movies

Fixes:

- Movies now opens with details open

---

### v2.0.0 - Genres!

Features:

- You can now filter movies by genre(s).

Chores:

- Updating dependencies.

Fixes:

- A lot of minor fixes and improvements.

---

### v1.1.0 - Preview user account

Features:

- Design changes for bottom menu and buttons.

- Renaming page previously named "New" to "Add"

- Renamed "Account" to "Settings" and removed unnecessary button in bottom menu.

- User is now logged out and redirected to login-screen when not allowed access (i.e. if access token is invalid)

- Hiding library search component when user is not logged in.

- Adds an test-user account with restricted access.

- Checking against user role for access to restricted features such as:
  - Adding a new rating
  - Change an existing rating
  - Delete an existing rating

Chores:

- Updating dependencies

- Refactoring in both server and client for more consistent and more readable code.

Fixes:

- Hiding pagination-buttons when there is only one page of content available.

- Closing filter-dropdown when user clicks an filtering option.
