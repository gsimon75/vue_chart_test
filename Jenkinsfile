pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage('Build Dev') {
            steps {
                sh 'npm install'
                sh 'npm run builddev'
            }
        }
        stage('Build Prod') {
            steps {
                sh 'npm install'
                sh 'npm run buildprod'
            }
        }
        stage('Pack Result') {
            steps {
                sh 'rm -rf node_modules'
                sh 'npm install --production'
                sh 'tar czf vue_chart_test.tar.gz server.sh server_launcher.js utils.js config.json public node_modules'
            }
        }
    }
}
