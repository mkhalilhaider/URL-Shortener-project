# URL Shortener with Server-side Rendering (EJS)

A simple URL shortener application built with Node.js, Express, and MongoDB. This project demonstrates how to create short links and render them using EJS templating for server-side rendering. It also includes a basic user interface for generating and displaying shortened URLs.

## Features

- **URL Shortening**: Shorten long URLs and redirect to the original URL.
- **Server-side Rendering**: Pages rendered dynamically with EJS templates.
- **Basic UI**: A minimalistic user interface to interact with the URL shortener.
  
## Setup and Installation

1. Clone this repository to your local machine.
    ```bash
    git clone https://github.com/your-username/url-shortener.git
    cd url-shortener
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables (e.g., database URI, port) as needed.

4. Start the application:
    ```bash
    npm start
    ```

5. Open your browser and visit `http://localhost:<PORT>` to use the URL shortener.

## Built With

- **Node.js**: JavaScript runtime for the server-side code.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing shortened URLs.
- **EJS**: Templating engine for dynamic views.

## Future Improvements

- Add more advanced UI features like validation, error handling, and better styling.
- Implement user authentication for personalized short URLs.