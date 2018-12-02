#! /bin/bash

fuser -k 3000/tcp
fuser -k 5000/tcp

cd ./oj-server
nodemon server.js &

cd ../executor
pip3 install -r requirements.txt
python executor_server.py &

echo "================================"
read -p "PRESS [enter] to terminate processes" PRESSKEY

fuser -k 3000/tcp
fuser -k 5000/tcp