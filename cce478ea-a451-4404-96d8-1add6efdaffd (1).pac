function FindProxyForURL(url, host) {
	 var resolved_ip = dnsResolve(host);
	 if (url.substring(0,4) == "ftp:")
	 { return "DIRECT"; } 

	 if ( 
	   shExpMatch(host, "*.local$") || shExpMatch(host, "local$") || 
	   shExpMatch(host, "192.168.*.*") || 
	   shExpMatch(host, "172.16.*.*") || 
	   shExpMatch(host, "10.*.*.*") || 
	   shExpMatch(host, "100.64.*.*") || 
	   shExpMatch(host, "127.*.*.*") ) 
	 {  return "DIRECT";  }

	 if ( 
	   shExpMatch(host, "*.gpcloudservice.com$") || shExpMatch(host, "gpcloudservice.com$") )
	 {  return "DIRECT";  }
     if ( 
	   shExpMatch(host, "*.okta.com$") || shExpMatch(host, "okta.com$") )
	 {  return "DIRECT";  }
     if ( 
	   shExpMatch(host, "*.oktacdn.com$") || shExpMatch(host, "oktacdn.com$") )
	 {  return "DIRECT";  }
     if (
       shExpMatch(host, "dev-57208180.okta.com$") || shExpMatch(host, "dev-57208180.okta.com$") )
     {  return "DIRECT";  }
     if (
       shExpMatch(host, "*.apps.paloaltonetworks.com$") || shExpMatch(host, "cloud-auth.sg.apps.paloaltonetworks.com$") )
     {  return "DIRECT";  }
 return "PROXY fsapaclab.proxy.prismaaccess.com:8080";}