module.exports = {
  apps: [
    {
      name: "app",
      script: "app.js",
    },
  ],
  deploy: {
    production: {
      user: "pi",
      host: ["192.168.0.65"],

      ref: "origin/master",
      repo: "https://github.com/RyanHirsch/home-ui.git",
      path: "/home/pi/src/home-ui",

      "post-setup": "/home/pi/src/home-ui/source/scripts/install-deps.sh",

      "post-deploy": "yarn install && yarn build && yarn start",
    },
  },
};
