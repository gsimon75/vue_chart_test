pipeline {
    agent {
        docker {
            image 'node:10.5'
            args '-u root --privileged'
        }
    }
    stages {
        /*stage('Build Dev') {
            steps {
                sh 'npm install'
                sh 'npm run builddev'
            }
        }*/
        stage('Build Prod') {
            steps {
                sh 'export HOME="$PWD"'
                sh 'while sleep 1; do echo "."; done'
                sh 'npm install'
                sh 'npm run buildprod'
            }
        }
        stage('Pack Result') {
            steps {
                sh 'rm -rf node_modules'
                sh 'npm install --production'
                sh 'docker image build -t vue-chart-test:latest .'
            }
        }
    }
}
// vim: set ts=4 sw=4 et ft=groovy:
