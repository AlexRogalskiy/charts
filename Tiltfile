# -*- mode: Python -*

# For more on Extensions, see: https://docs.tilt.dev/extensions.html
load('ext://restart_process', 'docker_build_with_restart')

k8s_yaml('kubernetes.yaml')
k8s_resource('styled-charts', port_forwards=3000, resource_deps=['deploy'])

# Records the current time, then kicks off a server update.
# Normally, you would let Tilt do deploys automatically, but this
# shows you how to set up a custom workflow that measures it.
local_resource(
    'deploy',
    './record-start-time.sh'
)

# Add a live_update rule to our docker_build
congrats = "🎉 Congrats, you ran a live_update! 🎉"
docker_build_with_restart('styled-charts', '.', build_args={'IMAGE_SOURCE': 'node', 'IMAGE_TAG': 'lts-alpine'},
    dockerfile='./Dockerfile',
    entrypoint=['npm', 'run', 'development:docker'],
    live_update=[
        sync('.', '/usr/src/app'),
        run('./record-start-time.sh')
])
