# Todo Typescript API

This project is designed to explore the basics of a MVC api written in typescript.

You can view the project documentation [here](https://docs.google.com/document/d/1cvGFK8QNIxSUHFzflp76LByfVuaph3LAFtEzcf_79Is/edit?usp=sharing)

## Start Application

``` bash
# Clone Repository and enter directory
git clone git@github.com:jwoodrow99/todo-typescript-api.git
cd todo-typescript-api

# Configure application
cp .env.example .env

# Generate app key and add to env
require('crypto').randomBytes(64).toString('hex');

# Migrate Database
npm run migrate

# Start Application
npm run dev
```
