## Setting base OS layer
## docker build -t container_tag --build-arg IMAGE_SOURCE=node IMAGE_TAG=lts-alpine .
ARG IMAGE_SOURCE=node
ARG IMAGE_TAG=12-buster

FROM $IMAGE_SOURCE:$IMAGE_TAG

## General arguments
ARG PYTHON_VERSION=3.8.2

ARG USER="cukebot"
ARG UID=5000
ARG GID=10000

ARG LC_ALL="en_US.UTF-8"
ARG VERSION="0.0.0-dev"
ARG BUILD_DATE="$(git rev-parse --short HEAD)"
ARG VCS_REF="$(date -u +\"%Y-%m-%dT%H:%M:%SZ\")"

ARG NAME="styled-charts"
ARG VERSION="0.0.0-dev"
ARG DESCRIPTION="Automatically generate styled SVG charts upon request"

## Vercel token
ARG TOKEN

## Working directories
ARG APP_DIR="/usr/src/app"
ARG DATA_DIR="/usr/src/data"

## ## General metadata
LABEL "name"="$NAME"
LABEL "version"="$VERSION"
LABEL "description"="$DESCRIPTION"

LABEL "com.github.repository"="https://github.com/AlexRogalskiy/charts"
LABEL "com.github.homepage"="https://github.com/AlexRogalskiy/charts"
LABEL "com.github.maintainer"="Sensiblemetrics, Inc. <hello@sensiblemetrics.io> (https://sensiblemetrics.io)"

LABEL "com.github.version"="$VERSION"
LABEL "com.github.build-date"="$BUILD_DATE"
LABEL "com.github.vcs-ref"="$VCS_REF"

LABEL "com.github.name"="$NAME"
LABEL "com.github.description"="$DESCRIPTION"

## Setting environment variables
ENV PYTHON_VERSION $PYTHON_VERSION

ENV APP_DIR=$APP_DIR \
    DATA_DIR=$DATA_DIR

# System-level base config
ENV TZ=UTC \
    LANGUAGE=en_US:en \
    LC_ALL=$LC_ALL \
    LANG=$LC_ALL \
    PYTHONIOENCODING=UTF-8 \
    PYTHONUNBUFFERED=1 \
    DEBIAN_FRONTEND=noninteractive \
    APT_KEY_DONT_WARN_ON_DANGEROUS_USAGE=1

ENV VERCEL_TOKEN $TOKEN

ENV USER=$USER \
    UID=$UID \
    GID=$GID

## Mounting volumes
VOLUME ["$APP_DIR"]

## Creating work directory
WORKDIR $APP_DIR

# Create a cukebot user. Some tools (Bundler, npm publish) don't work properly
# when run as root
RUN addgroup --gid "$GID" "$USER" \
    && adduser \
    --disabled-password \
    --gecos "" \
    --ingroup "$USER" \
    --uid "$UID" \
    --shell /bin/bash \
    "$USER"

## Installing dependencies
RUN apt-get update \
    && apt-get install --assume-yes \
    git \
    curl \
    locales \
    && apt-get clean

## Installing python
RUN cd /tmp && curl -O https://www.python.org/ftp/python/${PYTHON_VERSION}/Python-${PYTHON_VERSION}.tar.xz && \
    tar -xvf Python-${PYTHON_VERSION}.tar.xz && \
    cd Python-${PYTHON_VERSION} && \
    ./configure --enable-optimizations && \
    make -j 4 && \
    make altinstall

## Installing vercel
RUN npm i -g vercel

## Copying project sources
COPY .vercel*/ ./.vercel
COPY api/ ./api
COPY scripts/ ./scripts
COPY src/ ./src
COPY typings/ ./typings
COPY tests/ ./tests

COPY favicon.ico .
COPY .env-cmdrc.json .
COPY vercel.json .
COPY package.json .

## Removing unnecessary dependencies
RUN rm -rf /var/cache/apt/* /tmp/Python-${PYTHON_VERSION}

## Show versions
RUN echo "NPM version: $(npm --version)"
RUN echo "NODE version: $(node --version)"
RUN echo "PYTHON version: $(python3 --version)"

## Installing project dependencies
RUN npm install

## Run format checking & linting
RUN npm run test:all

RUN yes | vercel --confirm --token $VERCEL_TOKEN

## Setting volumes
VOLUME /tmp

## Setting user
USER $USER

## Exposing ports
EXPOSE 3000

## Running package bundle
CMD ["npm", "run", "development:docker"]
