pipeline {
    agent any

    tools {
        // Assume Maven is configured in Jenkins under 'Global Tool Configuration' with this name
        maven 'Maven 3'
        jdk 'JDK 17'
    }

    environment {
        DOCKER_IMAGE_NAME = 'environmentsafetyapp'
        DOCKER_TAG = "v${env.BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build & Test') {
            steps {
                echo 'Building and Testing...'
                // Using maven tool from environment
                sh 'mvn clean package'
            }
            post {
                always {
                    junit 'target/surefire-reports/*.xml'
                }
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker Image...'
                sh "docker build -t ${DOCKER_IMAGE_NAME}:${DOCKER_TAG} -t ${DOCKER_IMAGE_NAME}:latest ."
            }
        }

        stage('Docker Push') {
            steps {
                echo 'Pushing Docker Image (Placeholder)'
                // Example of pushing to a registry
                // withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                //     sh "echo \$DOCKER_PASSWORD | docker login -u \$DOCKER_USERNAME --password-stdin"
                //     sh "docker push ${DOCKER_IMAGE_NAME}:${DOCKER_TAG}"
                //     sh "docker push ${DOCKER_IMAGE_NAME}:latest"
                // }
                echo 'Skipping push as registry is not configured.'
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully!"
        }
        failure {
            echo "Pipeline failed! Please check the logs."
        }
    }
}
