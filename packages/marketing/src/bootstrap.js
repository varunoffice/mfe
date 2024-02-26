import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

// Mount function to start up the app
const mount = (el)=>{
    ReactDOM.render(
        <App></App>,el
    );
} 


// app to run in isolation

if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#_marketing-dev-root');
    if(el){
        mount(el);        
    }
}

// Running with container
export {mount};