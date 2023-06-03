module.exports = {
  apps: [
      {
          name: "chris.portfolio",
          script: "node_modules/next/dist/bin/next",
          args: "start -p 8008",
          watch: false,
      },
  ],
};