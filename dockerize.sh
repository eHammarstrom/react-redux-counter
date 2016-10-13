#!/bin/bash

docker build --no-cache -t emilhammarstrom/react-redux-counter .
docker push emilhammarstrom/react-redux-counter
