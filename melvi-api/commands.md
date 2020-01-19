# To run the docker container of postgres

sudo docker run --rm --name pg-docker -e POSTGRES_PASSWORD=Mawchine@18 -d -p 5432:5432 -v \$HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres
