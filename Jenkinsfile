pipeline {
    agent {
        label 'techDockerAgent'
    }
    triggers {
        pollSCM 'H/3 * * * *'
    }
    stages {
        stage("Build Stage"){
            steps {
                echo "Steps: \n 1.Remove previous repo if it exist \n 2.Cloone the latest changes \n 3.cd into technofinances \n 4.npm install \n 5.npm run build "
                sh '''
                if [ -d "TechnoSales" ]; then rm -Rf TechnoSales; fi
                git clone https://github.com/rmrandy/TechnoSales
                cd TechnoSales/technofinances
                npm install
                npm run build
                '''
            }
        }
        stage ("Test Stage"){
            steps {
                sh '''
                cd TechnoSales/technofinances/src
                npm test
                '''
            }
        }
        stage("Deploy Stage"){
            steps {
                withCredentials([usernamePassword(credentialsId: '6536388d-e6b4-419e-a0e9-b14645244769', usernameVariable: 'GIT_USERNAME', passwordVariable: 'GIT_PASSWORD')]){ 
                    script {
                        // URL encode the password in case it contains special characters
                        env.GIT_PASSWORD = URLEncoder.encode(env.GIT_PASSWORD, "UTF-8")
                    }
                    sh '''
                    cd TechnoSales/technofinances/
                    git config --global user.email "pablopolis2016@gmail.com"
                    git config --global user.name "Pablo Flores M"
                    echo $(git status)
                    if [ -z "$(git status --porcelain)" ]; then
                        echo "The working tree is clean."
                    else
                        git add -f build/
                        git commit -m "this is a new build"
                        git push -u https://\${GIT_USERNAME}:\${GIT_PASSWORD}@github.com/rmrandy/TechnoSales.git main 
                    fi
                    '''
                }
            }
        }
    }
}
