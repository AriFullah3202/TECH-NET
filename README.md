#[Important extention for vscode](#important-extention-for-vs-code)
#[রিডাক্স কিভাবে কাজ করে](#রিডাক্স-কিভাবে-কাজ-করে)
#[Create React and Redux project](#create-redux-and-react-project)
#[রিয়েক্ট রিডাক্সের সাথে কানেক্ট করা ](#রিয়েক্ট-রিডাক্সের-সাথে-কানেক্ট-করা)
#[সেটআপ প্রথম slice](#setup-first-slice)



## important extention for vs code
```js
ES7 React/Redux/React-Native/JS snippets
Important Extension for vs code:
auto import
code spell checker
eslint
JavaScript (ES6) code snippets
Prettier - Code formatter
React Extension Pack
Reactjs code snippets
Auto Rename Tag
```

## রিডাক্স কিভাবে কাজ করে
### Redux is a prdictable state container for javascript application .

এটা রিডাক্সের পারফেক্ট সংজ্ঞা । উপরের সংজ্ঞা থেকে predictable , state container নিয়ে পরে আলোচনা করব , আর আছে for javascript application তার মানে বুঝায় যেকোনো জাভাস্ক্রিপ্ট লাইব্রেরির সাথে রিডাক্স ব্যবহার করা যায় যেমন : angular , react , next , এমনকি raw জাভাস্ক্রিপ্টে ইত্যাদি ।

1. Predictable 
2. Centralise
3. Debugable 
4. Flexible

এবার আলোচনা করা যাক । Redux Predictable কীভাবে ?

predictable কি জিনিস কয়েকটা পয়েন্টের মাধ্যমে জেনে নিই ।
prdictable

আন্দাজ করা । 

1. Single Source of truth : 
   যখন আমরা রিডাক্স ইমপ্লিমেন্ট করব তখন এক জায়গাতে state থাকবে । রিয়েক্টে আলাদা আলাদা কম্পোনেন্ট state করতে হতো এখন আমরা সব state রিডাক্সে রাখব । 
2. Immutable behevior : 
   অপরির্বতনীয় আচরণ । রিডাক্সে যখন আমরা state রাখি কোন প্রকার অপরিবর্তনভাবে রাখা লাগছে । 
3. Usage of Pure Function : 
   রিডাক্সে Reducer আছে , যেটা হল পিউর ফাংশন । পিউর ফাংশন হচ্চে সেইম ইনপুট দিব সেইম আউটপুট দিবে মাঝখানে কোন সইড এফেক্ট নেই । 
4. Object as Action : 
   আমরা state এর কি পাঠাচ্ছি , মাঝখানে , কি পাব , সবকিছু ্‌অবজেক্ট আকারে হচ্ছে । 
5. Unidirectional flow : 
   এটা ইউজারের একশন থেকে শুরু করে মাঝখানে স্টেট চেন্জ হওয়া সবকিছু unidirection হিসেবে চলে ।

### Centralise
কেন্দীভূত করা 
আমরা স্টেটগুলো একটা কেন্দ্রে রাখব । আমরা আলাদা context , state রাখর না । যখন যে component এ state লাগবে সে ঐ কেন্দ্র থেকে নিবে ।
### Debugable 
সনাক্ত করা 
রিয়েক্টে state এর কি অবস্থা তা console.log করে দেখতে হয় । রিডাক্সে Debug করা সহজ । রিডাক্সে Redux devtools আছে । 
### Flexible
এটা নিয়ে অনেক কথা লেখা যায় । এর ভিতরে অনেক মেকানিজম আছে । আপাতত দুইটা পয়েন্ট নিই ।
   1. Independent of UI Frameword
     - রিডাক্স শিখলে কোন লস নেই । যে কোন ফ্রেমওয়ার্কে independently state management করতে পারব । 
   2. Middleware support 
     - মিডলওয়ার মানে একজন ইউজার আ্যকশন নেওয়ার পরে স্টেট চেন্জ করার আগে কিছু একটা করতে চাই এটাকে আমরা মিডলওয়ার বলি । 
       রিডাক্স মিডলওয়ার হল কোন থার্ড পার্টি প্যাকেজ সাথে রিডাক্সকে integrete করতে চাই ।
### what we will learn
* Redux 
  * React Redux 
    এটা হচছে পুরাতন পদ্ধতি । এটা অনেক কোড লিখা লাগে । সবকিছু নিজেকে ইন্টিগ্রেড করা লাগে । আমরা এটা ব্যবহার করব না । 
  * Redux Toolkit
    * RTK Query
      এটা নতুন পদ্ধতি । আমরা এটা ব্যবহার করব । Redux Toolkit এখানে  ওরা যেভাবে বলছে সেভাবে ইন্টিগ্রেড করতে হবে । 
      RTK Query হচ্ছে asyncronize হিসেবে কাজ করে । আমবা API সেট করব RTK Query hook বানায় দিবে . যখন খুশি hook কে কল করব । 
  Rtk Query এর মতন React Redux এ tunk ইউজ হয় । 
## রিডাক্স কি আমরা সব জায়গায় ইউজ করব?
  না , বড় পজেক্টে ইউজ করব ।
## রিডাক্সের alternative way আছে ?
  আছে , movex । 
## রিডাক্স ভিতরে কীভাবে কাজ কবে ?
  এটাকে আমবা পাচভাগে ভাগ করি 
  এটা একটা ফ্লো
1. Action
  - ইউজাররা যে আ্যকশনটা নেয় । যেমন : ক্লীক করা । আর প্রতিটা আ্যকশনের এঋ এঋটা ফাংশন আছে । 
2. Dispatch
  - আ্যকশনের ফাংশনকে state এ নিয়ে যাওয়া । 
3. Payload
  - এক্সট্রা ইনফরমেশন dispatch এর সাথে নিয়ে যাওয়া 
4. Reducer 
  - এটা ইম্পরটেন্ট । এখানে বর্তমান স্টেটা সেইভ থাকে এবং যে আ্যকশনটা আমি dispatch করছি সেটা ইনপুট হিসেবে নেয় । নেওয়ার পরে combine করে নতুন এঋটা 
    এঋটা স্টেট তৈরি করে store করে । 
5. store
  - এটা একটা গ্লোবাল স্টোর যেটাতে স্টেট থাকে যা Reducer এর মাধ্যমে এখানে সেভ হয় । যখন ইচ্ছা নিয়ে নির ।
## Create Redux and React AND vite project
```bash
// kono folder e giye 
npm crete vite@latest
```
then project name
then React 
then typeScript 
then ঔই ফোল্ডারে গিয়ে 
```bash
npm i
npm install react-router-dom
npm i colors
npm install react-redux
npm install @reduxjs/toolkit

// to run
npm run dev
```
change the port into 3000
go to 
* vite.config.ts
change the posrt 
```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});
```
project set up
delete app.css
then app.tsx e moddhe ট্যাগ ফেলৈ দিতে হবে
now download tailwind 
```bash
npx tailwindcss init -p
npm install -D tailwindcss postcss autoprefixer
```
then in tailwind.config.ts
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
in index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
এবং manin.tsx এ চেন্জ import "./index.css"
 করতে হবে 
```js
import React from 'react'
import ReactDOM from 'react-dom/client';
import "./index.css"

// Your code using ReactDOM goes here

import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import { Provider } from 'react-redux';
import { store } from './redux/store';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store = {store}>
    <RouterProvider router = {routes}/>
    </Provider>
  </React.StrictMode>,
)
```

## File stucture and Routing
* src 
  * page - এই ফোল্ডারে একটা ফুল পেইজ থাকবে যেমন : home page , about page ইত্যাদি ।
  * components - এই  ফোল্ডারে থাকবে যেমন : একটা পেইজে অনেক সেকশন থাকে header section , footer section , ইত্যাদি ।
    কম্পোনেন্ট দুই থরণের হতে পারে । 
    * ui 
    * data fatching
  * hooks - যেমন : আমাদের বানানো লাগতে পারে । যেমন : প্রতিটা পেইজের জন্য Home - trick bd , About - trickbd
  * styles - যেমন : গ্লোবাল স্টাইলের জন্য 
  * utils - আমরা টাকার এমাউন্টে এক ঘর পর , দুই ঘর পর কমা বসাতে চাচ্ছি ।
  * redux - আমরা যেহেতু redux ব্যবহার করব । তাই ফোল্ডার লাগবে । 
  * types - আমরা যেহেতু Tailwind ব্যবহার করব যে টাইপ গুলো গ্লোবাল রাখব । 
  * layout - হতে পারে এডমিন এবং ইউজারের জন্য আলাদা রাউট থাকতে পারে  admin এর সাইডবার আছে  user এর নেই । 
  * routes - ekane onek routes thakbe
  হতে পারে এগুলো সব লাগতে আবার না ও লাগতে পারে । খালি থাকুক । 
### Routing
#[dowonload route package](#create-redux-and-react-and-vite-project)

* routes
  * index.tsx
```js
import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Login from "../page/Login";
import App from "../App";
export const routes = createBrowserRouter([
 {
  path : "/",
  element : <App />
 },
 
  {
    path: "/home",
    element: <Home />,
  },
  {
    path : '/login'
    ,
    element : <Login></Login>
  },
    {
    path : '*',
    element : <NotFound></NotFound>
  }
  // eta not found
]);
```
* src
  * main.tsx
```js
import React from 'react'
import ReactDOM from 'react-dom/client';

// Your code using ReactDOM goes here

import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router = {routes}/>
  </React.StrictMode>,
)
```
## setup redux store
#[download redux tookit](#create-redux-and-react-and-vite-project)

1 . Redux tookit
    এটাকে আমরা চারটা পয়েন্ট ভাগ করি 
  * Simple - simple setup
  * Opinionated - মানে ওরা একটা সিস্টেম করে রাখছে । আমরা জাস্ট follow করব ।
  * Powerful
  * Effective
2 . ফোল্ডার ক্রিয়েট করা 
  * redux
    * feature এখানে সব reducer থাকবে 
      * counter এটা একটা ফোল্ডার , reducer থাকবে এটি store.tsx এ জমা হবে 
      * cart    এটা একটা ফোল্ডার , reducer থাকবে এটি store.tsx এ জমা হবে 
      * user    এটা একটা ফোল্ডার , reducer থাকবে এটি store.tsx এ জমা হবে 
    * store.tsx এখানে সব স্টেট জমা হবে
in store.tsx
```js
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './feature/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter : counterSlice
  },
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

```
## রিয়েক্ট রিডাক্সের সাথে কানেক্ট করা 

* src
  * main.tsx 
Provider ইউজ করতে হবে । যেটা react রিডাক্সের । জাস্ট এটা context api এর মতো আমরা গ্লোবালভাবে রাখব ।
```js

```
## setup first slice
যদি আমরা counterSlice তৈরি করি 
createSlice মেথডের মাধ্যমে আমরা তৈরি করব name , initialState , reducers এই তিনটা অবশ্যই লাগবে 
এবং initialState টা সাইজে অনেক বড় হয় । 


এখান থেকে reducer মাধ্যমে payload , state স্টোরে যাচ্ছে ।
```js
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 8,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

```
* src
  * redux
    * store.tsx
in store.tsx
এই স্টোরে counterSlice টা যুক্ত করে দিলাম ।
```js
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './feature/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter : counterSlice
  },
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

```
* src
  * App.tsx
 useDispatch increment decrement, and paload funcition incrementByAmount নিয়ে আসে ।  আ্যকশনের ফাংশনকে state এ নিয়ে যাওয়া । 

```js
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "./redux/store"
import { decrement, increment, incrementByAmount } from "./redux/feature/counter/counterSlice"


function App() {
    const {count} = useSelector((state : RootState) => state.counter)
    const dispatch = useDispatch()
    return (
        <div>
            <div className="flex gap-6">
              <button className="border-2 border-green-500 rounded-md px-2 py-4"  onClick={() => dispatch(increment())}>Increment</button>
             <button className="border-2 border-green-500 rounded-md px-2 py-4"  onClick={() => dispatch(incrementByAmount(4))}>Increment</button>
              <div>{count}</div>
              <button className="border-2 border-red-500 rounded-md px-2 py-3"  onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
        </div>
    )
}

export default App

```
