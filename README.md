# THVC Provider Directory Frontend Challenge

## Notes

1. I'm not a Front End Developer (I'm a back end dev), but I am a problem solver :)
2. I understand React/Ant.d but as you'll see I'm not that fast doing CSS/Styles
3. Here are some blockers fixed so this project runs:
   - Using Node 18, you have to enable OpenSSL legacy provider (instructions below)
   - Used Ant.d 5 to prototype fast the layout and UI
   - Added prettier rules to style the code
   - Moved dependencies to devDependencies in package.json
   - removed eslintConfig as it breaks dependencies when calling eslint-reactapp

## Start the project

- **Clone** repo with `git clone https://github.com/rodrigo-telus/provider-directory-takehome`
- cd to the project

If you are using Node.js v18, Enable legacy OpenSSL provider with:

```cmd
set NODE_OPTIONS=--openssl-legacy-provider
```

- Install dependencies

```cmd
npm install
```

- Run the project

```cmd
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
