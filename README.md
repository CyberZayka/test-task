# Test task

This task includes several components, such as a sidebar, a modal window, and a form.
Added the ability to route between pages. The menu component in the sidebar is multi-level,
the levels of which can be described in the mockData.json file. Some of the buttons in the menu are links to different pages,
while others are buttons that activate internal menus and show them. One of the pages has a component with an authentication form.

To implement the login function, I used a fake API - https://dummyjson.com/users. Since this is a login, there are already users there.

You can take the credentials of any of them from the json file, for example: - username: atuny0, - password: 9uQFF1Lh.

If you enter incorrect or invalid data, an error will be displayed. When you click on the "cancel" button, the modal window with the form is closed. Also was added linter and husky

## Used technologies and libraries

- ReactJS
- TypeScript
- Material-UI
- Formik
- React-Query

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run lint`

Runs linter to check some issues with code

### `npm run lint:fix`

Fix founded issues with code

### `npm run format:check`

Check prettier configs
