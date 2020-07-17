# LoL Data Project 
We will be making calls to the Riot Games API to obtain datasets about players and their stats. We will be using a crawler that we made from scratch. We will obtain match data based on players' usernames, and give analytics pertaining to their perforamnce during that match. We can also make suggestions based on the player's performance such as improving their performance or efficiency in specific tasks, such as generating gold per minute or their win rate on specific characters. This game (League of Legends) has a huge esports scene and is very competitive, so many players and professionals can make use of our website and analysis to see what they can improve on.

## **App Architecture**

Web-based application built with React, Node, MongoDB. The project is setup to run the services, server, and client (app/site) concurrently. Use `npm run dev` to deploy the server and client. Data collection done via Python application using calls to Riot Games' API.

## **Data Model**

Data retrieved from the Riot Games API will be cleaned and stored inside various collections on our MongoDB database.

