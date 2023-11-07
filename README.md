# Movies Planet

Movies Planet is a web application that allows you to search for movies and view their details. You can toggle between light and dark themes for a personalized viewing experience.

## Table of Contents

- [Movies Planet](https://react-movie-finder-weld.vercel.app/)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Prerequisites](#prerequisites)
  - [React technologies used:](#react-technologies-used)

## Project Overview

Movies Planet is a React-based web application that fetches movie data from the OMDB API and allows users to search for movies. It features a dynamic dark/light theme toggle and displays movie details, including posters, release date, genre, and more.

## Prerequisites

Before you start, make sure you have the following software/tools installed:

- *Node.js*
- *React*
- *React Router*
- *React Router Dom*
- *React sass*
- *React icons*
- *Font awesome*
- *OMDB API Key by signing up at OMDB API.*

## React technologies used:

1.**React Components:** The project is structured around React components, such as<ins> App, Home, MovieDetail, Search, Footer, Button</ins>, and <ins>ThemeToggle</ins>. 

2.**React Routing:** React Router is used for handling client-side routing. The <ins>Route and Routes</ins> components from react-router-dom are used to define the routing structure in the App component.

3.**React State Management:** State management is done using React hooks. <ins>useState and useReducer</ins> are used in the Home component to manage the state of movies and loading status. The <ins>ThemeProvider</ins> component manages the theme state using the useState hook.

4.**Context API:** React's Context API is used to manage the theme state in the <ins>ThemeProvider</ins> component. It provides a way to share the theme state and toggle function with child components like Home and ThemeToggle.

5.**Conditional Rendering:** Conditional rendering is used throughout the components, such as conditional class names to switch between light and dark themes and conditional rendering of movie data based on loading and error states.

6.**Hooks:** Various hooks are used, including useEffect for data fetching in the Home and MovieDetail components and custom hook useTheme for accessing the theme context.

7.**CSS Styling:** CSS styles are used to style the components. The project uses custom styles defined in SCSS files, and class names are conditionally applied based on the theme.

8.**Component Routing:** The project leverages <ins>React Router</ins> for component-based routing. It allows users to navigate between the home page and individual movie details.

9.**Function and Class Components:** The code includes both function components (e.g.,<ins> Home, MovieDetail, Search, Footer, Button</ins>) and class components (e.g.,<ins>App</ins>). Function components are used more extensively with hooks.


