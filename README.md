# Fruity Shuffle

This is a memory game where you try to click each fruit only one time.  If you click a fruit more than once, the game will restart.

## Click the link for the deployed app

https://ewgalassi.github.io/fruity-shuffle/

Otherwise, you can install the app on your own computer.

### How to install it
Here is how you get started:

Enter these commands in your command line console
```
yarn create react-app fruity-shuffle
cd fruity-shuffle
git init
git add
git commit -m "First commit"
git remote add origin <Your git repository SSH>
```

Once the installation is done you will need to deploy the app to your GitHub pages
```
npm install gh-pages --save-dev
```
Add the following lines to your `package.json` file
```
"homepage": "http://yourgitname.github.io/fruity-shuffle"
```
and in the `scripts` section
```
"scripts": {
  //...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
This makes it ready to deploy.  Now enter
```
npm install
npm run deploy
```
and the app will be deployed on your GitHub pages!

- - -

### If you have any difficulty
Please contact me.  I maintain my repositories regularly, so I will try to work out any bugs you encounter.


### Languages and resources
This app uses HTML, CSS, JavaScript, Node.js, and React.js.
