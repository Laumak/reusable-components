node {
    stage('Cleanup') {
        deleteDir()
    }

    stage('Checkout') {
        checkout scm
    }

    stage('Build') {
        echo '-- Building the application -- '
        sh 'yarn'
        sh 'npm run gen:docs && npm run build:docs'
        echo '-- Build complete -- '
    }

    stage('Deploy') {
        echo '-- Deploying the docs to Surge --'

        sh 'surge ./build --domain mits-comps.surge.sh'
    }

    stage('Notify') {
        slackSend "Build done: ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
    }
}
