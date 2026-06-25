pipeline {

    agent any

    stages {

        stage('Checkout') {

            steps {

                echo 'Checking out FutureSelf code'

            }
        }


        stage('Build Docker Images') {

            steps {

                bat 'docker compose build'

            }
        }


        stage('Run Containers') {
    steps {
        bat 'docker compose down'
        bat 'docker compose build --no-cache'
        bat 'docker compose up -d'
    }
}
    }

}