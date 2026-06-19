react router library - perform routing in react
react - ui banana
react-dom - react and dom k bich m connect krna
types of react-ruter-dom

- install i react-router-dom - npm i react-router-dom
- import in main.jsx from 'react-router-dom'
- wrap App by browserRouter in main.jsx file
- make routes in app.jsx to wrap all route

<Route path='/' element = {<Home.jsx/>}>
use <link> tag to redirect to any specific route
make navbar compponent as well and add it before routes

<Route path="/about/:id" element={<Random />} /> - dynamic routes

useParams hook - give detail of nested router use parameters

- nested routes can be made by writing in this way - path='/product/man;
- dynamic routes can be made by writing in this way - path='/product/:id'
- can access id by using useParams

//not found page
<Route path='*' element ={<Notfound/>}>
