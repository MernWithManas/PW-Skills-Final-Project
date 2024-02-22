# PW Skills Final Project

### Setup instruction

1. Clone the project
...
    git clone https://github.com/usernamemanas/PW-Skills-Final-Project
...

2. Move into the directory
```
    cd pw-final-project
```

3. Install dependencies
```
    npm i
```

4. Run the server
```
    npm run dev
```


# How to setup tailwind in your project[Link]
(https://tailwindcss.com/docs/guides/vite)

1. Install tailwind and other dependencies
```
    npm install -D tailwindcss postcss autoprefixer
```

2. Create the  `tailwind.config.js` file
```
    npm tailwindcss init -p
```
3. Add the files and extensions to tailwind config in the content property
```
     content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

4. Add the tailwind directives on the top of index.css file
```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

5. Then run the server.. tailwind should be activated


### Adding plugins and dependencies
```
    npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```