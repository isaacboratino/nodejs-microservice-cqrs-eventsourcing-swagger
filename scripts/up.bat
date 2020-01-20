set DIR_DATA_PATH="%CD%"

set CONTAINER_COMMAND="yarn start:dev"
set CONTAINER_SCALE=1
set CONTAINER_PORT=7070

docker-compose up --build
