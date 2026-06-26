pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }


        stage('Stop Existing Containers') {
            steps {
                bat 'docker compose down'
            }
        }


        stage('Build Docker Images') {
            steps {
                bat 'docker compose build --no-cache'
            }
        }


        stage('Start Application') {
            steps {
                bat 'docker compose up -d'
            }
        }

    }

}