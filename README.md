# Gio's Hacker App

News app using the [News API](https://newsapi.org/) that allows the user to search for any current event, along with a "Popular News" section on the right side.

### Technologies Used

React JS, News API

### Quick Start

- Download zip file or clone the repository on your loacl machine and open it up in your code editor.

- In the terminal, run `npm install` to install all libraries.

- Create a `.env` file in the root directory to store your News API Key as shown below:
(variable name must have prefix of REACT_APP_)

`REACT_APP_KEY = XXXXXXXXXXXXXXXXX`

- To get the News API Key, go to [News API](https://newsapi.org/), click on Get API Key and enter the information to register. Once you get your key, assign it to your `REACT_APP_KEY` in your `.env` file.

- To reference the key anywhere in the project: `process.env.REACT_APP_KEY`.

### How to run the app in the browser

- In the terminal run `npm start`. This will run the app in development mode on port [http://localhost:3000](http://localhost:3000).

- The page will reload when you make changes. You may also see any lint errors in the console.
