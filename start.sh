#!/bin/bash

echo "Запуск серверной части..."
cd ./server
uvicorn main:app --reload &

cd ..

# echo "Запуск клиетнской части..."
# cd ./client
# npm run dev


