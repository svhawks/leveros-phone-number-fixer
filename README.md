![Lever OS](https://raw.githubusercontent.com/leveros/leveros/master/doc/images/leveros-logo-full-white-bg-v0.2.png "Lever OS")
======================================================================

**Serverless + Microservices = ♥**

Lever OS is in **beta**. Please report bugs via [GitHub issues](https://github.com/leveros/leveros/issues)!

Deploy your service locally

```bash
$ lever deploy
```

This takes the whole current directory, archives it and deploys it onto Lever, in an environment that was created by default: `dev.lever`.

###### Invoke via CLI

```bash
$ lever invoke lever://dev.lever/phoneService/suggest '"905054146201"'


[{"code":"TR","formatted":"+90 505 414 6201","isValid":true,"success":true}]


Maintenance & Development [Çağatay Çalı](http://github.com/ccali14)
