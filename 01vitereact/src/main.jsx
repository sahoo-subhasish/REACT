import React  from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Name() {
    return (
        <h1>MKB AAAAAG</h1>
    )
}

const Element = (
    <a href='https://google.com' target='_blank'>Google</a>
)
const Elements = React.createElement(
    'a',
    {href: 'https://facebook.com', target: '_blank'},
    'Facebook'
);
    


createRoot(document.getElementById('root')).render(
    <>
    <App />
    <Name />
    {Element}
    <br/>
    {Elements}
    </>
)
