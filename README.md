# F1

React app to list F1 Rankings, for Drivers and Teams per Season. This project uses [Typescript](https://www.typescriptlang.org/) which makes it easier to extend.

## Instalation

Clone this repo locally and install the dependencies with `npm install`. Once the installation finishes, you can start the server up with `npm start`. A new window will be open with project. You can also open run the app in http://localhost:3000.

## Data

Two endpoints are used in this project.

- To retreive the data (GET request), https://api-sports.io/ is used to collect F1 data that is shown in tables.
- To simulate a POST request, https://beeceptor.com/ is used with two endpoints. One of them responses successfully, and the other one responses with server error (503). This is done randomly to simulate success and fail.

## Providers

The global state of the application is handled by two providers:

- `DataContext.Provider`, which stores the selected season and rankings tab (drivers or teams).
- `DispatchContext.Provider`, which exposes the dispatch function to update this global state.

By having this global state, any component can access the current selected season and tab in order to render properly the data. For example, `<Table />` component is able to render the drivers or teams rankings for the selected season. Also, `<CreateItemDialog />` renders the necessary fields for drivers or teams to create a new record.

## Form

Currently, the project only mocks the item creation, as mentioned in Data section. For the creation of the form, [Formik library](https://formik.org/) has been installed and used for the easy validation of the data. The configuration of the inputs for drivers and teams can be found in [src/components/Rankings/constants.ts](https://github.com/yeyosan/F1/blob/master/src/components/Rankings/constants.ts)

## Components

In this project, components such as selects, tabs, buttons, tables and dialogs are taken from [Material UI library](https://mui.com/material-ui).
