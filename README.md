# Switcher Data Sample

This sample project has six questions: five are writing SQL, and one is a small ETL script to load some data.

All the SQL questions are against a small SQLite database. The ETL script is written in JavaScript.

## Running Online

The easiest way to complete the exercise is totally online (for free!) via glitch.com.

Just click this button to create a copy of the git repo to "remix" on Glitch:

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/remix/switcherstudio-data-sample)

Glitch will automatically install the dependencies for you.

### Running Locally

We 100% recommend completing this exercise on Glitch - it requires virtually no setup. If you have node 10+, git, and yarn installed, feel free to fork this repo and run locally. Submit the completed repo to us instead of the Glitch project.

## Schema

There are two tables in the database. Both loaded with data from [The World Bank API](https://datahelpdesk.worldbank.org/knowledgebase/articles/898581-api-basic-call-structures).

```
create table countries (
    id TEXT PRIMARY KEY,
    iso2code TEXT NOT NULL,
    name TEXT NOT NULL,
    capital_city TEXT NOT NULL,
    longitude TEXT,
    latitude TEXT
);
create table indicators (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    indicator_id TEXT NOT NULL,
    countryiso3code TEXT NOT NULL,
    date TEXT NOT NULL,
    value DOUBLE
);
```

## Answering Questions

The project contains six failing unit tests. Your goal is make them all pass!

Open the terminal on glitch.com by selecting the "Tools" menu at the bottom left of the UI, and select "Terminal" in the popup menu.

From the terminal run `yarn test` to see the failing test output.

The test output will automatically refresh as you make changes.

The `questions` directory contains a file for each question to be answered.

Each SQL question query should all return the correct answer in a column named `result` in the first row of the results.

Failing tests will show the incorrect SQL results returned for easy query writing.

### Question 1

File: `01_longest_capital_name.sql`

What is the longest capital city name?

### Question 2

File: `02_furthest_north.sql`

What is the name of the country that is the furthest north?

### Question 3

File: `03_highest_gdp_2019.sql`

What is the name of the country with the highest GDP in 2019?

### Question 4 

File: `04_largest_gdp_change_norway.sql`

For Norway, which year had the largest change in GDP from the prior year?

### Question 5

File: `05_load_populations_for_2003.js`

Fetch and load the "total population" indicator for all countries in the year 2003.

This question requires loading some additional data from [The World Bank API](https://datahelpdesk.worldbank.org/knowledgebase/articles/898581-api-basic-call-structures) by writing JavaScript.

There are some notes in `05_load_populations_for_2003.js` on fetching data, and a sample call to batch insert the transformed rows in to the database.

To execute your ETL function, first stop the test runner (press q or Ctrl-C).

Then run `yarn run question5` in the terminal to execute the ETL script.

If something goes wrong loading data, reset the database at any time by running `yarn run reset` in the terminal.

After the data is loaded, go back to the terminal and run `yarn test` to verify the rows are loaded.

### Question 6

File: `06_population_for_usa_2003.sql`

What was the population of the USA in 2003?

(This question will use the newly loaded data from question 5).

## Submitting Answers

To submit the answers, click "Share" on the upper left of the Glitch UI. Then select the "Code" tab, and email us a link to view your completed project!

Alternatively, you are welcome to grab the six files with your answers and send them as a zip via email.
