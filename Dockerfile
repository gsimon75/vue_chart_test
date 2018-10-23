FROM node:10.5 AS node
LABEL maintainer="gabor.simon75@gmail.com"
COPY server_launcher.js utils.js config.json public node_modules /
WORKDIR /
ENTRYPOINT ["node", "server_launcher.js", "-p", "./vue_chart_test.pid", "-F"]
