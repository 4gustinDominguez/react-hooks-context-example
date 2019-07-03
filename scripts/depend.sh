#!/bin/bash

cd /home/ec2-user/react-hooks

# Install dependencies
sudo /home/ec2-user/.nvm/versions/node/v10.16.0/bin/npm install

# Build Production Environment
sudo /home/ec2-user/.nvm/versions/node/v10.16.0/bin/npm run build

# Move production files to /var/www/
sudo mv /home/ec2-user/react-hooks/build/* /var/www/