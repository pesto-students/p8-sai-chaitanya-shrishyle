# Assignment 1

The main function of a browser is to present the web resource you choose, by requesting it from the server and displaying it in the browser window. The resource is usually an HTML document, but may also be a PDF, image, or some other type of content. The location of the resource is specified by the user using a URI (Uniform Resource Identifier). The way the browser interprets and displays HTML files is specified in the HTML and CSS specifications maintained by W3C Organisation.

The browsers high level structure includes:
1. The user interface - includes the address bar, back button, refresh button, forward button, menu etc.
2. The browser engine - coordinates between the UI and the rendering engine.
3. The rendering engine - responsible for displaying the requested content.
4. Javascript interpreter - is used to interpret and parse javaScript Code.
5. Data Storage - all storage mechanisms like localStorage, IndexedDB, WebSQL etc.
6. Other structures.

![diagram showing highlevel components in a browser](./images/1.jpg).

## The Rendering Engine:
The function of the rendering engine is display of the requested contents on the browser screen, which is termed as "rendering". By default the rendering engine can display HTML and XML documents and images. Different browsers use different rendering engines: Internet Explorer uses Trident, Firefox uses Gecko, Safari uses WebKit. Chrome and Opera (from version 15) use Blink, a fork of WebKit.

The rendering engine gets the contents of the requested document from the networking layer.








<style>
body {
    background-color: #333;
    font-family: calibri;
}

h1, h2, h3, h4 {
    border-left: 7px solid grey;
    padding-left: 1rem;
    color: #64B5F6;
}

h1 {
    font-size: 1.5rem;
    font-weight: 500;
    text-shadow: rgba(50,50,50,0.5);
    background-color:#466B71 ;   
    padding-top: 0.5rem;
    padding-bottom: 0.5rem; 
    text-transform: uppercase;
}

h1:hover {
    color: #E1F5FE;
    background-color: #538088;
    border-left: 7px solid #CFD8DC;
}

h2 {
    font-size: 1.25rem;
    font-weight: 500;
    text-shadow: rgba(50,50,50,0.5);
    background-color:rgba(25,118,210,0.75);
    padding-top: 0.30rem;
    padding-bottom: 0.30rem;
    text-transform: uppercase; 
}

h3 {
    color: #ABD2FA;
    font-size: 1.0rem;
    font-weight: 200;
    text-shadow: rgba(50,50,50,0.5);
    padding-top: 0.15rem;
    padding-bottom: 0.15rem; 
    background-color:rgba(25,118,210,0.50);
}

h4 {
    color: #ABD2FA;
    font-size: 1.0rem;
    font-weight: 100;
    text-shadow: rgba(50,50,50,0.5);
    padding-top: 0.15rem;
    padding-bottom: 0.15rem; 
    background-color:rgba(150,150,150,0.40);
}

p {
    color: #D6DEFF;
    font-family: calibri;
    text-align: justify;
    margin-right: 1rem;
    margin-top:1.4rem;
    font-size: 15px;
    line-height: 1.3rem;
}

table, p {
    margin-left: 1.25rem;
}


img {
    margin-top: 1rem;
    margin-bottom: 1rem !important;
    border: 1px solid grey;
}

li {
    font-size:1.1rem;
}

.filename {
    background-color:#455A64;
    border-radius: 3px;
    font-family: monospace;
    padding-left:7px;
    padding-right: 7px;
    font-size:1rem;
}

code {
    font-size: 13px;
}
</style>
