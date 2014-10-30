#!/bin/bash
nvm use 0.10
istanbul cover node_modules/.bin/_mocha -- -u exports -R spec test/unit