# New note on SPA version

Creating a new note on the SPA version of the app at [https://studies.cs.helsinki.fi/exampleapp/spa](https://studies.cs.helsinki.fi/exampleapp/spa):

``` mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: User submits form
    browser ->> server: POST /exampleapp/new_note_spa HTTP/1.1
    activate browser
    activate server
    server -->> browser: HTTP/1.1 201 Created
    deactivate server
    browser ->> browser: executes `spa.js: redrawNotes()`
    
    deactivate browser
```
