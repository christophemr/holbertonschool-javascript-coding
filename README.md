# JavaScript - Web scraping

![GitHub](https://img.shields.io/github/license/holbertonschool-javascript-coding)
![GitHub last commit](https://img.shields.io/github/last-commit/holbertonschool-javascript-coding)

## About

This repository contains scripts written in JavaScript for web scraping tasks. It covers various topics such as working with JSON data, using request and fetch API, manipulating files with fs module, and more.

## Project Details

- Weight: 1
- Migrated to checker v2:
- Your score will be updated as you progress.

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

### General

- Why JavaScript programming is amazing
- How to manipulate JSON data
- How to use request and fetch API
- How to read and write a file using fs module

## Requirements

### General

- Allowed editors: vi, vim, emacs
- All your files will be interpreted on Ubuntu 14.04 LTS using node (version 10.14.x)
- All your files should end with a new line
- The first line of all your files should be exactly `#!/usr/bin/node`
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should be semistandard compliant. Rules of Standard + semicolons on top. Also as reference: AirBnB style
- All your files must be executable
- The length of your files will be tested using `wc`
- You are not allowed to use `var`

## Resources

- [Working with JSON data](https://example.com/json)
- [The workflow of accessing the attributes of a simply-created JSON object by Jimmy Tran from Cohort 1 - San Francisco](https://example.com/json-workflow)
- [request module](https://example.com/request-module)
- [Modern JS](https://example.com/modern-js)

## Installation

### Install Node 10

```bash
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
$ sudo apt-get install -y nodejs

$ sudo npm install semistandard --global

$ sudo npm install request --global
$ export NODE_PATH=/usr/lib/node_modules


$ ./0-readme.js <file_path>
$ ./1-writeme.js <file_path> <string_to_write>
$ ./2-statuscode.js <url>
$ ./3-starwars_title.js <movie_id>
...

Credits
By: Guillaume, CTO at Holberton School
Scripts written as part of the Holberton School curriculum
License
This project is licensed under the MIT License - see the LICENSE.md file for details.
