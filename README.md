## Requirement
- docker engine installed
- docker-compose installed

## How to run
- docker-commpose up -d
- access the app with your local_ip:80

## How to scale
- Depends on what your orchestration, you can just increate the nummber of replica of this service
- If you are using docker swarm, you can increase in `deploy` section
- If you are using k8s, you can use `ReplicaSet`
- Or you can use some scaling method in your cloud provider such as AWS based on some metrics
