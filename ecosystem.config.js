module.exports = {
  apps: [
    {
      name: "next",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      watch: false,
    },
  ],
};
