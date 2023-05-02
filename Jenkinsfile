pipeline {
    agent any
    environment {
        GITHUB_PAT = credentials('github_pat')
    }
    stages {
        stage('Fetch frontend') {
            steps {
                git branch: 'main',
                credentialsId: GITHUB_PAT,
				url: 'https://github.com/TicketWave/TicketWave-Frontend.git'
            }
        }
    }
}