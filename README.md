<h1>Geographic Search</h1>

<p>
Geographic Search is a React application that allows users to explore countries around the world and view geographic information about each country.
</p>

<p>
Users can browse the complete country list, search for countries by name or continent, and open individual country pages containing additional geographic information.
</p>

<p>
<a href="https://react-project-jrock474.vercel.app/">View Live Application</a>
</p>

<h2>Purpose</h2>

<p>
Geographic Search was created as a personal learning project to practice React and become more comfortable working with React hooks, components, routing, state management, and external APIs.
</p>

<p>
The project gave me an opportunity to build a multi-page React application where data retrieved from an API could be searched, filtered, shared between components, and displayed dynamically based on user interaction.
</p>

<p>
It represents one of my earlier React projects and helped strengthen my understanding of component-based application development.
</p>

<h2>Technologies</h2>

<p>React</p>
<p>JavaScript</p>
<p>HTML5</p>
<p>CSS3</p>
<p>React Router</p>
<p>React Context API</p>
<p>REST Countries API</p>
<p>Vite</p>
<p>Vercel</p>

<h2>API</h2>

<p>
Country information is retrieved using the REST Countries API.
</p>

<p>
The API provides geographic information including country names, flags, capitals, populations, continents, time zones, and map links.
</p>

<p>
API: https://restcountries.com/
</p>

<h2>Functionality</h2>

<h3>Country Directory</h3>

<p>
The application retrieves a list of countries from the REST Countries API and dynamically renders the results.
</p>

<p>
Each result displays the country's flag and official name along with an option to view additional information.
</p>

<h3>Country Search</h3>

<p>
Users can filter the country directory by entering a country name.
</p>

<p>
The displayed results update dynamically based on the user's search input.
</p>

<h3>Continent Search</h3>

<p>
Countries can also be filtered by continent, providing another way to narrow the list of available results.
</p>

<h3>Country Details</h3>

<p>
Selecting a country navigates the user to a dedicated country details page.
</p>

<p>The details page displays:</p>

<p>Official Country Name</p>
<p>Country Flag</p>
<p>Flag Description</p>
<p>Capital</p>
<p>Time Zone</p>
<p>Continent</p>
<p>Population</p>
<p>Google Maps Link</p>

<h3>Flag Lightbox</h3>

<p>
Users can select the country's flag to open a larger version inside a custom lightbox.
</p>

<p>
The lightbox can be dismissed by selecting the surrounding area.
</p>

<h3>Application Routing</h3>

<p>
React Router is used to provide navigation between the home page, country directory, individual country pages, contact page, and donation page.
</p>

<h3>Contact Form</h3>

<p>
The application includes a controlled React form that manages name, email, and message input using component state.
</p>

<p>
Submitting the form clears the controlled input fields and provided additional practice working with form events and React state.
</p>

<h2>React Concepts</h2>

<p>
This project was primarily created to practice fundamental React concepts and patterns.
</p>

<h3>useState</h3>

<p>
React state is used throughout the application to manage search input, filtered countries, selected countries, API data, form input, and lightbox visibility.
</p>

<h3>useEffect</h3>

<p>
The useEffect hook is used to retrieve country information when components are initially rendered.
</p>

<h3>Context API</h3>

<p>
React Context is used to share the currently selected country and its API data between components without passing the information through each component manually.
</p>

<h3>React Router</h3>

<p>
React Router provides client-side routing and allows the application to navigate dynamically to country-specific pages.
</p>

<h3>API Requests</h3>

<p>
The Fetch API and async/await are used to retrieve country information from the REST Countries API.
</p>

<h3>Filtering</h3>

<p>
JavaScript array filtering is used alongside React state to dynamically update the country list based on country and continent search input.
</p>

<h2>Development</h2>

<p>
Fork the repository using the <b>Fork</b> button at the top of the GitHub repository page.
</p>

<p>
<a href="https://github.com/Jrock474/React_Project">Fork Geographic Search on GitHub</a>
</p>

<p>
After opening your fork locally, install the required dependencies:
</p>

```bash id="fg4j21"
npm install
```

<p>
Start the Vite development server:
</p>

```bash id="pn7x92"
npm run dev
```

<p>
Vite will provide a local development URL where the application can be viewed in your browser.
</p>

<h2>Available Scripts</h2>

<p>Start the development server:</p>

```bash id="mm6s42"
npm run dev
```

<p>Create a production build:</p>

```bash id="hq8v31"
npm run build
```

<p>Run ESLint:</p>

```bash id="fd5p73"
npm run lint
```

<p>Preview the production build locally:</p>

```bash id="cr2k84"
npm run preview
```

<h2>What I Learned</h2>

<p>
Geographic Search helped me become more comfortable working with React beyond individual components by building a complete application with multiple pages and shared application state.
</p>

<p>
Through this project, I practiced React hooks, controlled forms, client-side routing, Context API, asynchronous API requests, conditional rendering, filtering data, mapping API responses into components, and responding to user interaction.
</p>

<p>
Building individual country pages also helped me understand how application state, API data, and routing can work together to create dynamic views based on a user's selection.
</p>

<h2>Links</h2>

<p>GitHub: https://github.com/Jrock474/React_Project</p>

<p>Live Application: https://react-project-jrock474.vercel.app/</p>

<p>REST Countries API: https://restcountries.com/</p>
