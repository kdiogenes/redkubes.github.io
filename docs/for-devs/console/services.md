---
slug: services
title: Team Services
sidebar_label: Services
---

<!-- ![Console: new service](img/team-services.png) -->

A service in Otomi is a self-service feature for:

- Publicly exposing ClusterIP services. Otomi will automatically create and configure all ingress resources needed, including Istio Virtual Services and Gateways, certificates, DNS records and Oauth2 proxy for Single Sign On
- Private (in-cluster) exposure of ClusterIP services
- Configure network policies

## Create a Service

1. Enter a name for the service. The name will be used to generate hostname if `Use suggested domain` is chosen (see below). When configuring ingress for an existing (pre-deployed) service, make sure the name provided here matches the name of the CusterIP service
2. Enter the port number of the service

After providing a name and a port number, you can now configure ingress.
## Configuring exposure (ingress)

Exposure controls wether internet exposure should be enabled or not. Three options exist:

- `Private`: choose to expose services in-cluster
- `Public`: choose to expose services publicly

### Private

Choose private to expose the service in-cluster and configure in-cluster [ingress network policies](#ingress-traffic-inside-the-cluster)

### Public

Use Public to expose a service with a domain name and a certificate on an external network (using an external load balancer)

A URL will have a hostname that consists of `$HOST_NAME.$DNS_ZONE`. Options are described below.

| Setting                          | Description                                                                                                               |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Ingress class name               | The ingress class to assing this service to                                                                               |
| TLS passthrough                  | Pass through the request as is to the backing service                                                                     |
| Use suggested domain             | The suggested domain is the team domain for which a wildcard certificate already exists. Has the team name in it          |
| Host                             | Choose a hostname that will be the prefix of the domain                                                                   |
| Forward path                     | Do not "terminate" the path but instead pass it to the receiving service                                                  |
| DNS Zone                         | Choose a dns zone that will be the suffix of the domain                                                                   |
| Authenticate with Single Sign On | Forwards any unauthenticated traffic to the Keycloak login page, which might forward to an external IDP                   |
| Already has a certificate        | Don't generate certificates for this service                                                                              |
| > Certificate ARN                | [AWS only] Provide the certificate ARN                                                                                    |
| > Select existing secret name    | [non AWS] Provide a TLS secret name previously created under `Secrets`. Override to select name of secret not known here  |
| HTTP Response Headers            | HTTP Response headers that will be set on the exposed service                                                             |

## Configure network policies

### Ingress traffic inside the cluster

When the network policies option is enabled for the team all traffic to the service (from other services within the team and from services in other teams) is set to `Deny all` by default. To allow other services to access the service, select `Allow traffic from selected team services` and specify the Team and Service name of the services that is allowed to access the service. It is also possible to allow traffic from all Team Services. In this case select `Allow traffic from all team services`.

### External egress filtering

Traffic to external endpoints (outside of the cluster) is denied by default. To allow egress traffic to external endpoints, add the FQDN or IP address of the endpoint, the target port and the protocol used.
