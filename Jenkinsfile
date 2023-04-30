pipeline {
    agent any

    stages {
        stage('Fetch frontend') {
            steps {
                git branch: 'main',
				url: 'https://github.com/TicketWave/TicketWave-Frontend.git'
            }
        }
    }
}