pipeline {
    agent any

    stages {
        stage('Clean workspace') {
            steps {
                sh '''
                sudo rm -rf /var/lib/jenkins/workspace/TicketWave-Frontend-Pipeline/*
                '''
            }
        }
        stage('Fetch') {
            steps {
                git branch: 'main',
                url: 'https://github.com/TicketWave/TicketWave-Frontend.git'
            }
        }
        stage('Install dependencies') {
			steps {
			    sh '''
			    pwd
			    cd /var/lib/jenkins/workspace/TicketWave-Frontend-Pipeline/signup-login/
			    pwd
			    npm install
			    '''
			}
		}
		
// 		stage('Test') {
// 			steps {
// 			    sh '''
//     			    pwd
//     			    cd /var/lib/jenkins/workspace/TicketWave-Frontend/signup-login/
//     			    pwd
//     			    npm test -- --watchAll=false
// 			    '''
// 			}
// 		}
        stage('Clean and setup') {
            steps {
                sh '''
                sudo rm -rf /home/omar/TicketWave-Frontend/*
                sudo rm -rf /home/omar/TicketWave-Frontend/Data
                sudo rm -rf /home/omar/TicketWave-Frontend/signup-login
                sudo mv /var/lib/jenkins/workspace/TicketWave-Frontend-Pipeline/* /home/omar/TicketWave-Frontend/
                '''
            }
        }
        stage('Docker compose') {
            steps {
                sh '''
                cd /home/omar
		docker-compose down
		sudo docker-compose up -d
                '''
            }
        }
    }
}
