# Create a simple React application
Use the following steps to create a react application. The minimum requirement is to do basic part.
The rest of them are optional and you could do as many as possible.

## Create application structure
Install and create a new react project using
[create-react-app](https://github.com/facebookincubator/create-react-app). All
the necessary information about creating projects and installing softwares are
described in that repository. All you need in to write your own react components,
the heavy lifting is done by `create-react-app` .

## Create web application
The finished application will be more or less look like this ![react](https://cloud.githubusercontent.com/assets/48740/23477626/2fa48914-fe84-11e6-8d07-e09484fed762.png)
Write your own react components to generate and match the display as much as
possible.

### Minimum requirement
* You need to have a running web application that will show the above display
  if i run `npm start` from inside the project application.
* The finished source code should be posted in github which can be cloned and
  verified by running the software using the standard node based tools.
* The UI should have three components...
  * A header text that will occupy most of the viewport.
  * A input box with an `Add` button on its right.
  * On the right an unordered list with the header giving a count of items in
    the list.
  * The texts in the display could be anything you prefer.

### Optional tasks
It is recommended to complete at least one/two of them.

* Use a css framework(like bootstrap) to manage the layout.
* Alternatively use flexbox to manage the layout. 
* Clicking the `Add` button adds a new item in the list and increases the list
  counter. Pick any one of the following for state management. Use both if you would like to
  try [redux](http://redux.js.org/)
  * Use only react components, keep the state in component itself. You could
    use callback function to communicate between sibling components. Here is
    a collection of [react
    patterns](https://github.com/chantastic/reactpatterns.com) for better
    understanding.
  * Use [redux](http://redux.js.org) for state management.
* Add unit tests for your components.

