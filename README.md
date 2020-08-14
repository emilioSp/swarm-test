# swarm-test
```
docker-compose up --build
```

```
docker-machine ssh manager
vi docker-compose.yml and paste the docker-compose.yml content
docker stack deploy -c docker-compose.yml simple-node
```

```
docker-machine ssh manager docker service create --network verse --name ping bretfisher/httping -i .1 -GsY http://simple-node:80
```

```
docker-machine ssh manager
docker service update --force simple-node_simple-node
```