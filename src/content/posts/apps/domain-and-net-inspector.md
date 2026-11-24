---
title: "Domain & Net Inspector — DNS, TLS, HTTP & Network Diagnostics for Android"
description: "A comprehensive network engineering and security diagnostic toolkit for Android featuring DNSSEC, Email Security (SPF/DMARC/DKIM/MTA-STS/BIMI), TLS/HTTP audits, TCP/ICMP/UDP probing, Watchlist monitoring, SSH/Telnet/SCP, and Markdown/JSON/PDF reporting."
pubDatetime: 2026-11-24T18:00:00+11:00
featured: true
tags:
  - apps
  - android
  - networking
  - security
  - dns
  - tls
---

**Domain & Net Inspector** is a pocket network-engineering and security audit toolkit built for Android. Designed by a Senior Network & Security Engineer, it brings desktop-grade DNS, TLS, HTTP, packet-level diagnostics, automated monitoring, and remote terminal access directly to your mobile device.

## Key Features

### 1. Deep DNS & Email Security Auditing (`DNS`)
* **DNSSEC & Zone Health:** Validates DNSSEC (`AD` flag), queries authoritative SOA serials directly over UDP/53 (`RD=0`) across all nameservers, and inspects IPv6 (`AAAA`), `CAA`, `MX`, and Reverse DNS (`PTR` / FCrDNS) records.
* **Complete Email Security Posture:** Audits **SPF** (including recursive DNS lookup counting against the 10-lookup RFC limit), **DMARC** (`p=` / `sp=` enforcement and `rua` reporting), **DKIM** selectors, **MTA-STS** policy resolution, **TLS-RPT**, and **BIMI** records.

### 2. TLS & HTTP Security Inspection (`TLS` & `HTTP`)
* **Certificate & Chain Verification:** Inspects TLS versions, certificate chains, expiry dates, and trust validation before sending HTTP requests.
* **HTTP Header Audits:** Examines response headers, redirects, and web security posture for any host, port, or URL.

### 3. Active Network Diagnostics & Probing (`Net`)
* **Multi-Protocol Probing:** Run **TCP ping**, **ICMP ping**, **Live TCP ping** (1 handshake/sec), **Port scans** (up to 1,024 ports, 32 concurrent), **Traceroute**, **Path MTU**, and **IPv4 vs. IPv6** comparisons.
* **Custom UDP Probes:** Send targeted UDP probes for **DNS**, **NTP**, **STUN**, **QUIC**, or generic payloads to any resolver or endpoint.

### 4. Device Telemetry & Subnet/CIDR Calculator (`Device` & `Tools`)
* **Interface & Routing Telemetry:** View active transport (`Wi-Fi` / cellular), interface (`wlan0`), captive portal status, VPN state, Link MTU, Private DNS (`DoT`), and local IPv4/IPv6 addresses.
* **IPv4 & IPv6 Subnet / CIDR Calculator:** Instantly calculate network address, netmask, wildcard mask, broadcast, usable host range, total addresses, and RFC address type (e.g., RFC 1918).

### 5. Automated Watchlist & Scan Comparison (`Watch` & `History`)
* **Background Watchlist Monitoring:** Track critical domains and receive local notifications (via Android `JobScheduler` every ~12 hours) for **certificate expiry (< 21 days)**, **chain trust issues**, **hostname mismatches**, or **DMARC policy changes**.
* **Scan History & Diff Comparison:** Automatically saves up to 50 recent inspections locally so you can re-scan targets or select two scans to compare changes side by side.

### 6. Remote Access & Audit Exports *(Pro)*
* **SSH, Telnet & SCP:** Connect directly to routers, switches, firewalls, and servers via SSH or Telnet, and transfer configuration backups or software images securely with **SCP**.
* **Audit-Ready Reporting:** Export and share full inspection reports as **Markdown (`.md`)**, **JSON (`.json`)**, or **PDF (`.pdf`)**, with full Light, Dark, and System theme support.

---

## Download & Support
* **Platform:** Android *(Google Play Store link coming soon)*
* **Support & Feedback:** [support@mmalik.net](mailto:support@mmalik.net)
* **Developer Contact:** [apps@mmalik.net](mailto:apps@mmalik.net)
* **Privacy Policy:** [mmalik.net/privacy](/privacy)
