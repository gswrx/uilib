# Getting started
The gswrx-uilib is a component library for Angular which contains reusable components made and used internally in gswrx.
gswrx-uilib has been made open-source for the purpose of providing (reusable) components to developers in the open-source community, while users themselves can contribute to the project where needed.

# Using the library
gswrx-uilib is available through the **npm** package manager for now and will be added to **yarn** in the near future.

`npm i --save gswrx-uilib` 

After installing the dependency into your local project, you will be able to use any of the components provided in the library.
See the list of components available below.

# Developing components for this library
The workflow of adding new components to this library looks as follows:

1. Generate new module into the */modules/* folder 
   (ng g module /modules/**Module-name**)
2. Generate new component into the */components/* folder
   (ng g component --module=modules/*/**Module-name*** --export=true)
3. Generate new service into the */services/* folder
   (ng g service **service-name** --project=uilib --flat=false)
   It would make sense to have this folder generated in the right folder right away, but dragging it there is a lot easier than messing around with directories in a terminal.


When the component is ready for use in production, create a pull request and add the new ready-to-use component into the library.

# Maintaining the library
Maintenance of this library is done using npm scripts to make building, testing, deploying and publishing as easy as entering a single command into the terminal.

The whole flow of building/publishing is contained within the `npm run package` script.

One point of attention here is that publishing the package wont work with an unchanged version number, this has to be adjusted with every release in the `project/uilib/package.json`.

# Testing & Tooling
To run the specified unit tests, run `ng test uilib` 

# Components
Reserved for a list of existing components in this library and their corresponding documentation

# To do
- Integrate github hooks into the deployment proces
- Integrate CI into the deployment proces
- Integrate Test Coverage and automate

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
