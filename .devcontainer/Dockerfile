ARG NODE_VERSION=22.18.0
FROM node:${NODE_VERSION}-alpine3.22

# Update packages
RUN if [ "alpine" == "alpine" ] ; then apk update ; else apt-get update ; fi

# Install Git
RUN if [ "alpine" == "alpine" ] ; then apk add git ; else apt-get install -y git ; fi
