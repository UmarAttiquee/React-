function reactfunction(reactObject, reactContainer)
 {
  const elementInject = document.createElement(reactObject.type);
  elementInject.innerHTML = reactObject.children;

  for (let prop in reactObject.props) {
    elementInject.setAttribute(prop, reactObject.props[prop]);
  }
  reactContainer.appendChild(elementInject);
}

let reactObject = {
  type: "a",
  children: "Click me",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
};
const rootElement = document.querySelector("#root");
reactfunction(reactObject, rootElement);
