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

### Architecture

The client architecture it split into three layers. *The UI-layer* (what you see and interact with). *The domain-layer* (the store and data-objects) and *the data-access-layer* with services that handles the communication with the API for fetching and updating stuff.

I'm trying this out as I've found that testing asynchronous thunks with a lot of side-effects is quite complex, and also I don't particularly like the Redux-Saga pattern with generators, as they are a bit hard to grasp intuitively.

With services, I can repeat the same file-structure as for action-creators and reducers and its a clear separation of concern which makes testing much easier.

### Styled Components and Styleguidist

I really like css-in-js and since we're already doing HTML-in-js with JSX in React, I don't see the problem with doing the same with CSS. This makes handling different styling based on different props a breeze.

In order to build components separately from the application, I've used Styleguidist which also lets you easily build a clear and neat documentation for the UI-library.

### Atomic Design

For the UI-components I've implemented the Atomic Design-structure. This means you start with the basic building blocks as *atoms* (labels, inputfields, buttons) and then combine them to more complex *molecules* (menus, formfields) and then *organisms* for even more complex patterns of components.

These then combines into Pages which are the routes for the application.

You can read more about the Atomic Design-principles in practice here: https://medium.com/backticks-tildes/visually-breaking-down-ui-components-using-atomic-design-part-1-476e1ddd73ca
