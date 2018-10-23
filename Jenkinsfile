pipeline {
    agent { docker { image 'node:10.5' } }
    stages {
        /*stage('Build Dev') {
            steps {
                sh 'npm install'
                sh 'npm run builddev'
            }
        }*/
        stage('Build Prod') {
            steps {
	        sh 'whoami'
		sh 'pwd'
		sh 'ls -lR'
		sh 'node --version'
		sh 'npm --version'
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
