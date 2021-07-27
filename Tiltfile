# -*- mode: Python -*

# For more on Extensions, see: https://docs.tilt.dev/extensions.html
load('ext://restart_process', 'docker_build_with_restart')
load('ext://conftest', 'conftest')

conftest(path='k8s/deployment.yaml', namespace='main')
k8s_yaml('k8s/deployment.yaml')
k8s_resource('styled-charts', port_forwards=3000, resource_deps=['conftest'])

# Add a live_update rule to our docker_build
congrats = "🎉 Congrats, you ran a live_update! 🎉"
docker_build_with_restart('styled-charts', '.', build_args={'IMAGE_SOURCE': 'node', 'IMAGE_TAG': '12-buster'},
    dockerfile='./Dockerfile',
    entrypoint=['npm', 'run', 'development:docker'],
    live_update=[
        sync('.', '/usr/src/app')
])

def api_server_logs():
  api_server_pod_name = str(local('kubectl get pods --namespace kube-system -o=jsonpath="{.items..metadata.name}" -l component=kube-apiserver')).rstrip('\n')
  local_resource('API Server Logs', '', serve_cmd='kubectl logs -f -n kube-system %s' % api_server_pod_name )

def current_namespace():
  return str(local("kubectl config view --minify --output 'jsonpath={..namespace}'"))

def get_global(name):
    return os.getenv(_get_env_name(name))

def set_global(name, value):
    os.putenv(_get_env_name(name), value)

def unset_global(name):
    os.unsetenv(_get_env_name(name))

def _get_env_name(name):
    return 'TILT_GLOBAL_VAR_%s' % name.upper()

def jest(path):
  local_resource("jest", "", serve_cmd="cd %s && yarn run jest --bail" % path)
