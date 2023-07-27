* [রিডাক্স কিভাবে কাজ করে](#রিডাক্স-কিভাবে-কাজ-করে)
* [Create React and Redux project](#create-redux-and-react-project)
* [রিয়েক্ট রিডাক্সের সাথে কানেক্ট করা ](#রিয়েক্ট-রিডাক্সের-সাথে-কানেক্ট-করা)
* [সেটআপ প্রথম slice](#setup-first-slice)
* [typeScript best practice and devtools](#typescript-best-practice-and-devtool)
* [use custom hook for best practice](#create-hook-for-best-practice)
* [middleware and custom middleware](#middleware-and-custom-middleware-in-redux)
* [product add in cart minus from cart and remove from cart](#product-add-cart-and-minus-cart--remove-product-form-cart)
* [methodolozy of RTK query](#methodolozy-of-rtk-query)
* [Redux Cache validation](#cache-validation)
* [Redux Refatching using Mount or arg change polling and code spliting](#redux-refatching-using-mount-or-arg-change-polling-and-code-spliting)
* [Firebase installl and setup](#firebase-install-and-setups)



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
Tailwind Css intelesense for tailwind
Tailwind Fold for tailwind class short
CodeSnap
Better comment //!eta commment highlicght kore
```

## রিডাক্স কিভাবে কাজ করে
### Redux is a prdictable state container for javascript application .

**এটা রিডাক্সের পারফেক্ট সংজ্ঞা । উপরের সংজ্ঞা থেকে predictable , state container নিয়ে পরে আলোচনা করব , আর আছে for javascript application তার মানে বুঝায় যেকোনো জাভাস্ক্রিপ্ট লাইব্রেরির সাথে রিডাক্স ব্যবহার করা যায় যেমন : angular , react , next , এমনকি raw জাভাস্ক্রিপ্টে ইত্যাদি ।**

1. Predictable 
2. Centralise
3. Debugable 
4. Flexible

এবার আলোচনা করা যাক । Redux Predictable কীভাবে ?

## predictable কি জিনিস কয়েকটা পয়েন্টের মাধ্যমে জেনে নিই ।

prdictable

আন্দাজ করা । 

1. **Single Source of truth** : 

   **যখন আমরা রিডাক্স ইমপ্লিমেন্ট করব তখন এক জায়গাতে state থাকবে । রিয়েক্টে আলাদা আলাদা কম্পোনেন্ট state করতে হতো এখন আমরা সব state রিডাক্সে রাখব ।** 

2. Immutable behevior : 
   **অপরির্বতনীয় আচরণ । রিডাক্সে যখন আমরা state রাখি কোন প্রকার অপরিবর্তনভাবে রাখা লাগছে ।** 

3. Usage of Pure Function : 
   **রিডাক্সে Reducer আছে , যেটা হল পিউর ফাংশন । পিউর ফাংশন হচ্চে সেইম ইনপুট দিব সেইম আউটপুট দিবে মাঝখানে কোন সইড এফেক্ট নেই ।** 


4. Object as Action : 
   **আমরা state এর কি পাঠাচ্ছি , মাঝখানে , কি পাব , সবকিছু ্‌অবজেক্ট আকারে হচ্ছে ।** 

5. Unidirectional flow : 
   **এটা ইউজারের একশন থেকে শুরু করে মাঝখানে স্টেট চেন্জ হওয়া সবকিছু unidirection হিসেবে চলে ।**

### Centralise
**কেন্দীভূত করা**

**আমরা স্টেটগুলো একটা কেন্দ্রে রাখব । আমরা আলাদা context , state রাখর না । যখন যে component এ state লাগবে সে ঐ কেন্দ্র থেকে নিবে ।**

### Debugable 
**সনাক্ত করা** 

**রিয়েক্টে state এর কি অবস্থা তা console.log করে দেখতে হয় । রিডাক্সে Debug করা সহজ । রিডাক্সে Redux devtools আছে ।** 
### Flexible


**এটা নিয়ে অনেক কথা লেখা যায় । এর ভিতরে অনেক মেকানিজম আছে । আপাতত দুইটা পয়েন্ট নিই ।**

   1. Independent of UI Frameword
     - **রিডাক্স শিখলে কোন লস নেই । যে কোন ফ্রেমওয়ার্কে independently state management করতে পারব ।** 
   2. Middleware support 
     - **মিডলওয়ার মানে একজন ইউজার আ্যকশন নেওয়ার পরে স্টেট চেন্জ করার আগে কিছু একটা করতে চাই এটাকে আমরা মিডলওয়ার বলি ।** 

       **রিডাক্স মিডলওয়ার হল কোন থার্ড পার্টি প্যাকেজ সাথে রিডাক্সকে integrete করতে চাই ।**
### what we will learn
* Redux 
  * React Redux 

    **এটা হচছে পুরাতন পদ্ধতি । এটা অনেক কোড লিখা লাগে । সবকিছু নিজেকে ইন্টিগ্রেড করা লাগে । আমরা এটা ব্যবহার করব না ।** 

  * Redux Toolkit
    * RTK Query

      **এটা নতুন পদ্ধতি । আমরা এটা ব্যবহার করব । Redux Toolkit এখানে  ওরা যেভাবে বলছে সেভাবে ইন্টিগ্রেড করতে হবে ।** 


      **RTK Query হচ্ছে asyncronize হিসেবে কাজ করে । আমবা API সেট করব RTK Query hook বানায় দিবে . যখন খুশি hook কে কল করব ।**

  **Rtk Query এর মতন React Redux এ tunk ইউজ হয় ।** 

## রিডাক্স কি আমরা সব জায়গায় ইউজ করব?
  না , বড় পজেক্টে ইউজ করব ।
## রিডাক্সের alternative way আছে ?
  আছে , movex । 
## রিডাক্স ভিতরে কীভাবে কাজ কবে ?
![Alt text](<Screenshot 2023-07-06 190526.png>)


  **এটাকে আমবা পাচভাগে ভাগ করি** 

  **এটা একটা ফ্লো**

1. Action

  - **ইউজাররা যে আ্যকশনটা নেয় । যেমন : ক্লীক করা । আর প্রতিটা আ্যকশনের এঋ এঋটা ফাংশন আছে ।** 
2. Dispatch

  - **আ্যকশনের ফাংশনকে state এ নিয়ে যাওয়া ।** 
3. Payload

  - **এক্সট্রা ইনফরমেশন dispatch এর সাথে নিয়ে যাওয়া** 
4. Reducer 
  - **এটা ইম্পরটেন্ট । এখানে বর্তমান স্টেটা সেইভ থাকে এবং যে আ্যকশনটা আমি dispatch করছি সেটা ইনপুট হিসেবে নেয় । নেওয়ার পরে combine করে নতুন এঋটা**

    **এঋটা স্টেট তৈরি করে store করে ।** 
5. store
  - **এটা একটা গ্লোবাল স্টোর যেটাতে স্টেট থাকে যা Reducer এর মাধ্যমে এখানে সেভ হয় । যখন ইচ্ছা নিয়ে নির ।**
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
npm i --save-dev @types/redux-logger
npm i redux-logger
npm install firebase
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
  * page - **এই ফোল্ডারে একটা ফুল পেইজ থাকবে যেমন : home page , about page ইত্যাদি ।**
  * components - **এই  ফোল্ডারে থাকবে যেমন : একটা পেইজে অনেক সেকশন থাকে header section , footer section , ইত্যাদি ।**

    **কম্পোনেন্ট দুই থরণের হতে পারে ।** 
    * ui 
    * data fatching
  * hooks - **যেমন : আমাদের বানানো লাগতে পারে । যেমন : প্রতিটা পেইজের জন্য Home - trick bd , About - trickbd**
  * styles - **যেমন : গ্লোবাল স্টাইলের জন্য**
  
  * utils - **আমরা টাকার এমাউন্টে এক ঘর পর , দুই ঘর পর কমা বসাতে চাচ্ছি ।**

  * redux - **আমরা যেহেতু redux ব্যবহার করব । তাই ফোল্ডার লাগবে ।** 

  * types - **আমরা যেহেতু Tailwind ব্যবহার করব যে টাইপ গুলো গ্লোবাল রাখব ।** 

  * layout - **হতে পারে এডমিন এবং ইউজারের জন্য আলাদা রাউট থাকতে পারে  admin এর সাইডবার আছে  user এর নেই ।** 
  * routes - **ekane onek routes thakbe**
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
![Alt text](<Screenshot 2023-07-06 001537.png>)

1 . Redux tookit
    **এটাকে আমরা চারটা পয়েন্ট ভাগ করি** 


  * Simple - simple setup
  * Opinionated - **মানে ওরা একটা সিস্টেম করে রাখছে । আমরা জাস্ট follow করব ।**
  * Powerful
  * Effective
2 . ফোল্ডার ক্রিয়েট করা 
  * redux
    * feature এখানে সব reducer থাকবে 
      * counter **এটা একটা ফোল্ডার , reducer থাকবে এটি store.tsx এ জমা হবে** 

      * cart    **এটা একটা ফোল্ডার , reducer থাকবে এটি store.tsx এ জমা হবে** 

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
এগুলো হচ্ছে টাইপস্ক্রিপ্ট এর জিনিস যাতে ইরর না দেয় । 
এথানে টাইপ বলা আছে এবং রিটান কি হবে এটা বলা আছে ।
store.getState and store.dispatch হচ্চে old reudux এর আমরা এখন tookit ব্যবহার করছি 
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

```
## রিয়েক্ট রিডাক্সের সাথে কানেক্ট করা 

* src
  * main.tsx 
**Provider ইউজ করতে হবে । যেটা react রিডাক্সের । জাস্ট এটা context api এর মতো আমরা** 

**গ্লোবালভাবে রাখব ।**

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store = {store}>
    <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);

```
## setup first slice

**যদি আমরা counterSlice তৈরি করি** 

**createSlice মেথডের মাধ্যমে আমরা তৈরি করব name , initialState , reducers এই তিনটা অবশ্যই লাগবে** 

**এবং initialState টা সাইজে অনেক বড় হয় ।** 


**এখান থেকে reducer মাধ্যমে payload , state স্টোরে যাচ্ছে ।**
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

**এই স্টোরে counterSlice টা যুক্ত করে দিলাম ।**

```js
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './feature/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter : counterSlice
  },
})
// Infer the `RootState` and `AppDispatch` types from the store itself
এগুলো হচ্ছে টাইপস্ক্রিপ্ট এর জিনিস যাতে ইরর না দেয় । 
এথানে টাইপ বলা আছে এবং রিটান কি হবে এটা বলা আছে ।
store.getState and store.dispatch হচ্চে old reudux এর আমরা এখন tookit ব্যবহার করছি 
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

```
* src
  * App.tsx
 **useDispatch increment decrement, and paload funcition incrementByAmount নিয়ে আসে ।**

 **আ্যকশনের ফাংশনকে state এ নিয়ে যাওয়া ।** 

```js
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "./redux/store"
import { decrement, increment, incrementByAmount } from "./redux/feature/counter/counterSlice"


function App() {
    //এগুলো রিডাক্সের বানানো হোক আমরা সরাসরি ইউজ করি 
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
উপরে 
 **এটা স্টৌর থেকে কল করে ডাটা নিয়ে আসা যেমন : count = value**

 const {count} = useSelector((state : RootState) => state.counter)
 //এখানে funciton এঋশনকে কল করা 

 **const dispatch = useDispatch()**
## typeScript best practice and devtool
* redux 
  * Counter
    * counterSlice
```js
type CountState = {
  count: number;
};
const initialState: CountState = {
  count: 8,
};
```
## create hook for best practice
* redux
  * hooks.tsx
ইউজ কাস্টম useDispatch , useSelector এতদিন এগুলো ইউজ করতাম । 
এখন নিজেরা বানাব ।
useSelector এর মাধ্যমে আমরা স্টোর থেকে কল করে নিয়ে আসি । 
```js
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
```
এ্খানে কাস্টমহোক ইউজ করা হয়েছে । 
```js

import { decrement, increment, incrementByAmount } from "./redux/feature/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hooks"


function App() {
  //এগুলো রিডাক্সের বানানো হোক আমরা সরাসরি ইউজ করতাম
    const {count} = useSelector((state : RootState) => state.counter)
      const dispatch = useDispatch()
  // এখন আমরা আমাদের কাস্টম হুক ব্যবহার করছি ।
    const {count} = useAppSelector((state ) => state.counter)
    const dispatch = useAppDispatch()
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
**আমরা যদি ডেপটুল ইউজ করতে না চাই devTools : false দিতে হবে , এটা ডিফল্টভাবে সত্য থাকে** 

```js
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './feature/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter : counterSlice
  },
  devTools : true
})
// Infer the `RootState` and `AppDispatch` types from the store itself
এগুলো হচ্ছে টাইপস্ক্রিপ্ট এর জিনিস যাতে ইরর না দেয় । 
এথানে টাইপ বলা আছে এবং রিটান কি হবে এটা বলা আছে ।
store.getState and store.dispatch হচ্চে old reudux এর আমরা এখন tookit ব্যবহার করছি 
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
```
## Middleware and custom middleware in redux
## [install logger for middleware](#create-redux-and-react-and-vite-project)

**middleware এটা কোন স্টেট execute হওয়ার আগে কিছু করতে চাই** 

**concat(logger) এটা হল রিডাক্সের মিডলওয়ারের সাথে যুক্ত করা** 

```js
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './feature/counter/counterSlice'
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    counter : counterSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
```
**এখন যদি আমরা কাস্টম মিডলওয়ার করতে চাই তাহলে** 

* redux
  * middleware
    * logger.tsx

**একটা middleware করতে হবে , store , next , action এই সিকুয়েন্নে দিতে হবে । তারপর export করতে হবে ।**
```js
import { Middleware } from "@reduxjs/toolkit"

const logger : Middleware= (store) => (next) => (action) => {
    console.log("current state " , store.getState())
    console.log("action", action)

    next(action)
    console.log("Updated state " , store.getState)
}
export default logger

```
* redux
  * store.tsx
উপরের logger কে ইম্পোর্ট করতে হবে ।
```js
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './feature/counter/counterSlice'
import logger from './middleware/logger'


export const store = configureStore({
  reducer: {
    counter : counterSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

```
# product add cart and minus cart , remove product form cart
* src 
  * redux
    * feature
      * cart
        * cartslice.tsx
* in Cart.tsx
```js
export default function Checkout() {
  const [scheduled, setScheduled] = useState<boolean>(false);
  const  { products , total} = useAppSelector((state)=> state.cart) 

  

  return (
  <div className="border-l pl-5 flex flex-col justify-between">
                <Button onClick={() => dispatch(addToCart(product))}>
                  <HiOutlinePlus size="20" />
                </Button>
                <Button onClick={() => dispatch(removeOne(product))}>
                  <HiMinus size="20" />
                </Button>
                <Button
                  variant="destructive"
                  className="bg-red-500 hover:bg-red-400"
                 onClick={() => dispatch(removeFromCart(product))}>
                  <HiOutlineTrash size="20" />
                </Button>
              </div>
  )
```

```js
import { PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';

interface ICart {
  products: IProduct[];
  total: number;
}

//এটা ইনিশিয়ালি ফাকা Array দিয়েছি ।
const initialState: ICart = {
  products: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const exiting = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (exiting) {
        //! যদি ডাটা থাকে তাহলে ‍ ১ করে বাড়াবো ।
        exiting.quantity = exiting.quantity! + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;
    },
    removeOne: (state, action: PayloadAction<IProduct>) => {
      const exiting = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (exiting && exiting.quantity! > 1) {
        //! যদি ডাটা থাকে তাহলে ‍ ১ করে বাড়াবো ।
        exiting.quantity = exiting.quantity! - 1;
      } else {
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id
        );
      }
      state.total -= action.payload.price;
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
      state.total -= action.payload.price * action.payload.quantity!;
    },
  },
});
export const { addToCart, removeFromCart, removeOne } = cartSlice.actions;
export default cartSlice.reducer;
```


```js
import { configureStore } from '@reduxjs/toolkit'
import logger from './middleware/logger'
import cartReducer from './feature/cart/cartSlice'


export const store = configureStore({
  reducer: {
    cart : cartReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

```
## Product filter and toggle using redux

* src 
  * redux
    * feature
      * product
        * productSlice.tsx
### filter range and togle এর জন্য সেলাস তৈরি করা হয়েছে । 
```js
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IProduct {
 status : boolean,
 priceRange : number
}
const initialState : IProduct = {
  status : false,
  priceRange : 150
}
const productSlice = createSlice({
    name : "product" ,
    initialState,
    reducers : {
        toggleState : (state) => {
            state.status = !state.status
        },
        setPriceRange : (state , action : PayloadAction<number>) => {
            state.priceRange = action.payload;
        }
    }
})
export const {toggleState , setPriceRange} = productSlice.actions

export default productSlice.reducer

```
* page
  * prduct.tsx

**আমরা শুধুমাত্র এইগুলো পরিবতন করেছি**

```js
  const { toast } = useToast();
  const {priceRange , status} = useAppSelector((state) => state.product)
  const dispatch = useAppDispatch();

  const handleSlider = (value: number[]) => {
    dispatch(setPriceRange(value[0]))
  };

  let productsData;

  if (status) {
    productsData = data.filter(
      (item) => item.status === true && item.price < priceRange
    );
  } else if (priceRange > 0) {
    productsData = data.filter((item) => item.price < priceRange);
  } else {
    productsData = data;
  }
```
## Methodolozy of RTK query
### RTK query কি?
#### ব্যকএন্ডের ডাটার সাথে ফ্রন্ডএন্ডের ডাটার সাথে maintain টা RTK Query কাজ ।
* src
  * redux
    * api
      * apiSlice.ts
```js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    singleProduct: builder.query({
      query: (id) => `/product/${id}`,
    }),
  }),
});
export const { useGetProductsQuery, useSingleProductQuery } = api;


```
#### এখানে উপরের হোক ইউজ করে ডাটা আনা হয়েছে ।
```js
  const {data , isLoading , error} = useGetProductsQuery(undefined)
```
#### এখানে উপরের হোক ইউজ করে ডাটা আনা হয়েছে ।

```js
 const {data : product , isLoading , error} = useSingleProductQuery(id)
```
## Post object using react toolkit mutation 
mutaion হচ্চে post এর মতোন , এটা RTK এর ভাষায় mutaion বলে । 


#### কিভাবে আমরা mutaion বানাব । 
* src 
  * redux
    * api
      * apiSlice.tsx
```js
  postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: `POST`,
        body: data,
      }),
    }),
    export const {
  useGetProductsQuery,
  useSingleProductQuery,
  usePostCommentMutation,
} = api;

```
#### সাধারণত GET ক্ষেত্রে RTK query এর hook কে কল করতে হয় , এবং তিনটা জিনিস রির্টান করতো ।
#### const {data , isLoading , error} = useGetProductsQuery(undefined)

#### যেহেতু এটা পোস্ট কমেন্টের জন্য কল করা হচ্ছে ।

####  const [postComment , {isLoading , error , isSuccess}] = usePostCommentMutation();

#### usePostCommentMutaion হচ্ছে hook , একটা function রির্টান করবে এবং একটা object রিটার্ন করবে  । 



```js
  const option = {
      id : id,
      // এখানে আমরা prostman যেভাবে পাঠাব সেভাবে data এর মধ্যে পাঠাতে হবে ।
      data : { comment : inputValue }
 }

```

**এখানে কল করতে হবে ।** 

**যেটাকে আমরা post বলি সেটাকে RTK এর ভাষায় mutation বলি**
    

```js

  const [inputValue, setInputValue] = useState<string>('');
  console.log(inputValue);
  // সাধারণত GET ক্ষেত্রে RTK query এর hook কে কল করতে হয় , এবং তিনটা জিনিস রির্টান করতো । 
  //  const {data , isLoading , error} = useGetProductsQuery(undefined)
  // যেহেতু এটা পোস্ট কমেন্টের জন্য কল করা হচ্ছে । 
  // usePostCommentMutaion হচ্ছে hook , এটা রির্টান করবে  । 
  const [postComment , {isLoading , error , isSuccess}] = usePostCommentMutation();

  console.log(isLoading)
 console.log(error)
 console.log(isSuccess)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const option = {
      id : id,
      data : { comment : inputValue }
    }
    // এখানে কল করতে হবে । 
    //যেটাকে আমরা post বলি সেটাকে RTK এর ভাষায় mutation বলি । 
    postComment(option)
    setInputValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };
```
## Redux Cache Validation 
#### যখন আমরা comment এর ক্ষেত্রে post করব 

#### সাথে সাথে ঔই comment টা page দেখাচ্ছে না , কারণ react একবার লোড হয়ে cache করে রাখে । 

#### যদি আমরা mongodb তে manually comment করি তাহলে ও এটা দেখাবে না 


#### যখন আমরা পেইজ reload দিব তাহলে আসবে । 

```js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['comments'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    singleProduct: builder.query({
      query: (id) => `/product/${id}`,
    }),
    getComment: builder.query({
      query: (id) => `/comment/${id}`,
      providesTags: ['comments'],
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: `POST`,
        body: data,
      }),
      invalidatesTags: ['comments'],
    }),
  }),
});
export const {
  useGetProductsQuery,
  useSingleProductQuery,
  usePostCommentMutation,
  useGetCommentQuery,
} = api;
```
##### উপরের কোড গুলোর মধ্যে নিচের ১. ২. ৩. এর মধ্যে tags add করা হয়েছে ।

##### প্রধমে ১. নাম্বারের মধ্যে tags add করা হয়েছে যেমন :   tagTypes: ['comments'], । যেকোন নাম দেয়া যেতে পারে ।

##### 2 .নাম্বারের মধ্যে নতুন যে ডাটা আসছে সেটা provide করছি । যেমন : providesTags: ['comments'],


##### ৩. এখন কথা হচ্ছে কখন আমরা fetch করব ? যখন আমরা ডাটা post করব তখন সাথে সাথে get করব । 
##### কিভাবে করব? জাস্ট postComment mutaion এর মধ্যে  invalidatesTags: ['comments'], এটা দিয়ে দিব । 


#### এটা post হওয়ার সাথে সাথে get করছে , আমাদের কাছে মনে হচ্ছে এটা real time হচছে ।
1. 
```js
  tagTypes: ['comments'],
```
2. 
```js
 getComment: builder.query({
      query: (id) => `/comment/${id}`,
      providesTags: ['comments'],
    }),
```
3. 
```js
 postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: `POST`,
        body: data,
      }),
      invalidatesTags: ['comments'],
    }),
```
## Redux Refatching using Mount or arg change polling and code spliting


##### মনে করেন , যখন আমরা অনেকজন কমেন্ট করব অথবা যখন আমরা postman থেকে comment করব তখন সাথে সাথে comment দেখাচ্ছে না । এজন্যে আমরা 

##### ৩০ সেকেন্ড পর পর refatch করব । এজন্য আমাদের করতে হবে 


##### ৩০ সেকেজঢ পর পর refech হবে , এগুলৈ সবquery তে দিতে পারব । 

```js
  const { data  } = useGetCommentQuery(id , {refetchOnMountOrArgChange : true , pollingInterval : 30000})

```
#### code splite করথ
##### আমরা root api তে আমরা সব করতেছি যেহেতু এটা ছোট প্রতেক্ট । সেজন্য আমরা বড় প্রজেক্টের ক্ষেত্রে একটা root api বানাব



##### এরপর product api , cart api বনায়ে main root এ inject করব ।


#### এটা root api

* redux 
  * api
    * apiSlice.tsx

```js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['comments'],
  endpoints: (builder) => ({}),
});

```
* redux 
  * feature
    * cart
      * cartApi.tsx
    * product
      * productApi
in productApi.tsx
##### এখানে আমরা কিছু দেয়নি । উপরের root api এর মাধ্যমে injectEndpoints কে কল করে আমরা 
##### endpoint গুলে দিয়ে দিছি । আর productApi টা export করে দিছি ।


##### এভাবে অনেকগুলা enpoint তৈরি করা যাবে ।
```js
import { api } from "@/redux/api/apISlice";

const productApi = api.injectEndpoints({
    endpoints: (builder) => ({

        getProducts: builder.query({
            query: () => '/products',
          }),
          singleProduct: builder.query({
            query: (id) => `/product/${id}`,
          }),
          getComment: builder.query({
            query: (id) => `/comment/${id}`,
            providesTags: ['comments'],
          }),
          postComment: builder.mutation({
            query: ({ id, data }) => ({
              url: `/comment/${id}`,
              method: `POST`,
              body: data,
            }),
            invalidatesTags: ['comments'],
          }),
})
})
export const {
    useGetProductsQuery,
    useSingleProductQuery,
    usePostCommentMutation,
    useGetCommentQuery,
  } = productApi;
  
```
## Firebase install and setup

প্রথমে firebase এ login করতে হবে । তারপর Get Started এ ক্লিক  করতে হবে ।
#[https://console.firebase.google.com/](#https://console.firebase.google.com/)

##### new project name দিতে হবে । 

#####  তারপর add a project ক্লিক করতে হবে 


##### অথবা get started এ ক্লিক করে যেকোন project এ গিয়ে project overview তে গিয়ে project setting এ গিয়ে project configuration পাওয়া যাবে । 

##### firebase configuration copy করে প্রজেক্টে বসাতে হবে ।

### [প্রথমে firebase টা install করতে হবে](#create-redux-and-react-and-vite-project)
##### copy the firebase project configurtion













