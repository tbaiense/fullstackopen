# Accessing the SPA version

Accessing the SPA version of the notes app at [https://studies.cs.helsinki.fi/exampleapp/spa](https://studies.cs.helsinki.fi/exampleapp/spa):

``` mermaid
sequenceDiagram
    participant browser
    participant server

    browser ->> server: GET /exampleapp/spa HTTP/1.1
    activate browser
    activate server
    server  -->> browser: HTTP/1.1 200 OK
    deactivate server

    browser ->> server: GET /exampleapp/main.css HTTP/1.1
    activate server
    server  -->> browser: HTTP/1.1 200 OK
    deactivate server

    browser ->> server: GET /exampleapp/spa.js HTTP/1.1
    activate server
    server  -->> browser: HTTP/1.1 200 OK
    deactivate server

    browser ->> browser: executes `main.js`
    Note right of browser: `main.js` runs AJAX that fetches `/exempleapp/data.json`
    browser ->> server: GET /exempleapp/data.json HTTP/1.1
    activate server
    server -->> browser: HTTP/1.1 200 OK
    deactivate server
    
    browser ->> browser: executes `main.js: redrawNotes()`
    deactivate browser
```
