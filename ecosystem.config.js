const port = 3000;

module.exports = {
    apps: [
        {
            name: 'my-app',
            script: 'node_modules/next/dist/bin/next',
            args: 'start -p ' + port,
            instances: "max", //
            autorestart: true,
            exec_mode: "cluster",
        }
    ],
};



