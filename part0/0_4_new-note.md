# Creating new note

Creating a new note on [https://studies.cs.helsinki.fi/exampleapp/notes](https://studies.cs.helsinki.fi/exampleapp/notes):

``` mermaid
sequenceDiagram
    participant browser
    participant server

    browser ->>  browser: User clicks on `Save` button (form submit)
    activate browser
    browser ->>  server: POST /exampleapp/new_note HTTP/1.1
    activate server
    server  -->> browser: HTTP/1.1 302 Found
    Note right of browser: Server response forces page reload
    deactivate server

    browser ->>  server: GET /exampleapp/notes HTTP/1.1
    activate server
    server  -->> browser: HTTP/1.1 200 OK
    deactivate server

    browser ->>  server: get /exampleapp/main.css HTTP/1.1
    activate server
    server  -->> browser: HTTP/1.1 304 Not Modified 
    Note left of server: Browser uses cached resource
    deactivate server
    
    browser ->>  server: GET /exampleapp/main.js HTTP/1.1
    activate server
    server  -->> browser: HTTP/1.1 304 Not Modified 
    Note left of server: Browser uses cached resource
    deactivate server
    
    Note right of browser: `main.js` runs AJAX request on `/exempleapp/data.json`
    browser ->>  server: GET /exampleapp/data.json HTTP/1.1
    activate server
    server  -->> browser: HTTP/1.1 200 OK
    deactivate server
    
    deactivate browser
```
