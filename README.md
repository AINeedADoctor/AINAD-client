# AINeedADoctor

## Inspiration
We thought that there are a lot of eHealth chatbots, but only a few control your mental status. We did a bot that helps in that aspect.

## What it does
Clank helps you searching hospitals, pharmacies, and giving ambulance or expert information. Furthermore and more importantly, it gives you the possibility to do an extensive test to predict your actual mental state or another to predict if you will have mental status problems in the future because of bad routine habits.

## How we built it
For the user interface, we used an angular client that integrates the ehealth bot. This bot uses the dialog flow API to make the proper decisions in every moment and Google-Cloud to make proper recommendations.

The backend, done in flask, contains the two models that predict the mental status: 
First, we have an algorithm that predicts the **actual** mental state of the user. This machine learning algorithm uses **Ada Boost** to classify the state of the user.

Second, we have another algorithm that predicts the **future** mental state of the user. This ML algorithm classifies the user mental state using a **Logistic Regression** Model.

## Challenges we ran into
We spent a lot of time searching datasets that could fit our idea and a lot of time reading the documentation of the bot API.

## Accomplishments that we're proud of
We are happy that we managed to create a working product, able to help people day by day and that is able to help the society with their health problems.

## What we learned
We learned how to use the Google Places API and the Dialog Flow API and also improved our skills in datascience and machine learning.

## What's next for AINAD
More models and better accuracy. To offer a top quality bot, it will be needed to iterate the machine learning part and improve the bot communication part.
