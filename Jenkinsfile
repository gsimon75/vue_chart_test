pipeline {
    agent {
        docker {
            image 'node:10.5'
            args '-u root --privileged'
        }
    }
    environment {
        YADDA = '42'
    }
    stages {
        stage('Prepare') {
            steps {
                sh 'export HOME="$PWD"'
                sh 'npm install'
            }
        }
        /*stage('Build Dev') {
            steps {
                sh 'export HOME="$PWD"'
                sh 'npm run builddev'
            }
        }*/
        stage('Build Prod') {
            steps {
                sh 'export HOME="$PWD"'
                sh 'npm install'
                sh 'npm run buildprod'
            }
        }
        stage('Pack Result') {
            steps {
                sh 'export HOME="$PWD"'
                sh 'rm -rf node_modules'
                sh 'npm install --production'
                //sh 'docker image build -t vue-chart-test:latest .'
                script {
                    def app = docker.build("vue-chart-test:latest")
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    app.run()
                }
            }
        }
    }
}
// vim: set ts=4 sw=4 et ft=groovy:
