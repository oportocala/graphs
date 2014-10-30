#!/bin/bash
./coverage.sh
CODECLIMATE_REPO_TOKEN=cfb856dc775dd7aa25e092fc4a7253f5bd3bead019310254d248a0f588daeeaf codeclimate < coverage/lcov.info