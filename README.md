# LoL Data Project 
We will be making calls to the Riot Games API to obtain datasets about players and their stats. We will be using a crawler that we made from scratch. We will obtain match data based on players' usernames, and give analytics pertaining to their perforamnce during that match. We can also make suggestions based on the player's performance such as improving their performance or efficiency in specific tasks, such as generating gold per minute or their win rate on specific characters. This game (League of Legends) has a huge esports scene and is very competitive, so many players and professionals can make use of our website and analysis to see what they can improve on.

## **App Architecture**

Web-based application built with React, Node, MongoDB. The project is setup to run the services, server, and client (app/site) concurrently. Use `npm run dev` to deploy the server and client. Data collection done via Python application using calls to Riot Games' API.

## **Data Model**

Data retrieved from the Riot Games API will be cleaned and stored inside various collections on our MongoDB database.

## **Datasets Used**

The data we retrieved contains a list of high-ranked players (Master+), which includes several statistics such as wins, losses, win ratio, and their rank on the ladder.

## **Crawler**

Our API crawler is a program that sends GET requests to the Riot Games API continuously to retrieve data of all ranked players of any region. If only a subset of the data is needed, the user can run the program and input a specific division to get data from. For this project, we ran our crawler to grab over 8,000 pages worth of data in json format but are only working with data from the top ranked players.

## **How to Run the Code**

In order to run the crawler, simply run the RiotAPI.py file and follow the instructions given by the program.

## **Contributors**

Chris Hung Huynh (hhuyn019@ucr.edu)
+ Built API crawler
+ EDA (visualizations and conclusions)
+ Data cleaning (dropped unnecessary columns, added new valuable columns, standardization)


Daniel Kwong (dkwon014@ucr.edu)
+ Project Setup (npm) and server and client for app following MVC-like structure.
+ Server: ExpressJS, NodeJS, mongoose. Created models and routes to connect to DB.
+ Client: React front-end. Started on styling using Google's Material Design library. Creates API requests to our server in order to display data
+ MongoDB setup and connection to server (via mongoose)
+ Created API on back-end to provide data to front-end
