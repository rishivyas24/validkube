export const NGINX_YAML = `apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  namespace: example
  labels:
    app: nginx
spec:
  replicas: "Wrong"
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        args: []
        ports:
        - containerPort: 80
        resources: {}`;
