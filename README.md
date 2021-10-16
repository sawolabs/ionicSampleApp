# Ionic Sample App with SAWO Integrated

This is a sample app built using the Ionic framework. Read more about it here.
Ionic apps can be easily developed using the Ionic CLI. The ionic CLI can be installed using npm. 

npm install @ionic/cli

# Requirements

Ionic CLI
Capacitor
npm
React
Typescript

# To run the web app

Clone this repository and run

npm install

to install all the dependencies and then run

ionic serve

If you now visit localhost:9100 in your browser, you will be able to see this web app in action.

# To build and run the android app

Clone this repository and run

npm install

to install all the dependencies and then 

ionic build

to build the web assets and prepare the app for the android platform and then

ionic capacitor add android

to add the android platform into your project and then

ionic capacitor build android

to build an ionic project for the given platform and then 

cd android 

to go to the android folder and then 

./gradlew assembleDebug

to and then 

./gradlew installDebug

to and then 

cd ..

and if you check your app folder, you will find the app-debug.apk and you can also run this on your simulator. 

# To build and run this iOS app

Clone this repository and run

npm install

to install all the dependencies and then 

ionic build

to build the web assets and prepare the app for the iOS platform and then

ionic capacitor add ios

to add the iOS platform into your project and then

ionic capacitor open ios

to open the ionic project on XCode and then 

ionic capacitor run ios 

# To reflect web changes in your android or ios app

Any meaningful change made in the web assets must be reflected to the android and ios native projects.

For android,

ionic capacitor copy android 

before building it.

For iOS, 

ionic capacitor copy ios

before building it. 


 
 


