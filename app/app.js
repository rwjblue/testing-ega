import GlimmerApplication from "./system/application";
import HelloWorldComponent from './components/hello-world';

let app = new GlimmerApplication();
let output = document.getElementById('output');

app.registerComponent('hello-world', HelloWorldComponent);

let ref = app.model({ items: ['Robert', 'Ben', 'Matt'] });
let result = app.render(ref, output);
