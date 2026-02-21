function customElement(reactElement, container) {
    const Elemnent = document.createElement(reactElement.type);
    Elemnent.innerHTML = reactElement.children;

    

    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        Elemnent.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(Elemnent);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Google'
}

const root = document.getElementById('root')
customElement(reactElement, root);