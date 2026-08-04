// ============================================================
//  Silnav静航 - 链接配置（只改这个文件即可，不用动 index.html）
//  说明：公网版仅保留 NAS【外网地址】，内网 IP 不公开（安全）。
//        需要内网地址自动切换，请在内网单独部署一份含 internal 的版本。
// ============================================================
window.NAV_CONFIG = {
  "title": "Silnav静航",
  "logo": "静",
  "searchEngine": "必应",
  "searchEngines": [
    {
      "name": "百度",
      "url": "https://www.baidu.com/s?wd="
    },
    {
      "name": "必应",
      "url": "https://www.bing.com/search?q="
    },
    {
      "name": "Google",
      "url": "https://www.google.com/search?q="
    }
  ],
  "useFavicon": true,
  "internalHosts": [
    "localhost",
    "127.0.0.1",
    "nas.local",
    "router.local"
  ],
  "internalIpPrefixes": [
    "192.168.",
    "10.",
    "172.16.",
    "172.17.",
    "172.18.",
    "172.19.",
    "172.20.",
    "172.21.",
    "172.22.",
    "172.23.",
    "172.24.",
    "172.25.",
    "172.26.",
    "172.27.",
    "172.28.",
    "172.29.",
    "172.30.",
    "172.31."
  ],
  "nas": [
    {
      "name": "Openlist",
      "external": "https://openlist.120345.xyz"
    },
    {
      "name": "openspeedtest",
      "external": "https://speed.120345.xyz:16888"
    },
    {
      "name": "MoviePilot-V2",
      "external": "https://mp-v2.120345.xyz"
    },
    {
      "name": "CloudDrive2",
      "external": "https://cd2.120345.xyz:16888"
    },
    {
      "name": "Lucky",
      "external": "https://lucky.120345.xyz"
    },
    {
      "name": "Vaultwarden",
      "external": "https://vau.120345.xyz"
    },
    {
      "name": "qbittorrent",
      "external": "https://qb.120345.xyz"
    },
    {
      "name": "emby",
      "external": "https://emby.120345.xyz"
    },
    {
      "name": "飞牛-虚拟机",
      "external": "https://5ddd.com/xhui999w"
    },
    {
      "name": "v2raya",
      "external": "https://v2ray.120345.xyz"
    },
    {
      "name": "taosync",
      "external": "https://taotao.120345.xyz"
    },
    {
      "name": "immich",
      "external": "https://immich.120345.xyz"
    },
    {
      "name": "dockercopilot",
      "external": "https://docker.120345.xyz"
    },
    {
      "name": "Navidrome",
      "external": "https://music1.120345.xyz:1688"
    },
    {
      "name": "transmission",
      "external": "https://tr.120345.xyz"
    },
    {
      "name": "plex",
      "external": "https://plex.120345.xyz:16888"
    },
    {
      "name": "IYUU",
      "external": "https://iyuu.120345.xyz"
    },
    {
      "name": "audiobookshelf",
      "external": "https://audio.120345.xyz:16888"
    },
    {
      "name": "CMS",
      "external": "https://cms.120345.xyz"
    },
    {
      "name": "CloudSaver",
      "external": "https://cs.120345.xyz"
    },
    {
      "name": "ms-go",
      "external": "https://ms.120345.xyz"
    },
    {
      "name": "MDC-NG",
      "external": "https://mdc.120345.xyz"
    },
    {
      "name": "tgto123",
      "external": "https://tg123.120345.xyz"
    },
    {
      "name": "yt-dlp Web UI",
      "external": "https://yt.120345.xyz"
    }
  ],
  "internal": {
    "categories": [
      {
        "name": "常用网站",
        "links": [
          {
            "name": "kimi",
            "url": "https://kimi.moonshot.cn"
          },
          {
            "name": "cloudflare",
            "url": "https://dash.cloudflare.com"
          }
        ]
      },
      {
        "name": "搜索",
        "links": [
          {
            "name": "百度",
            "url": "https://www.baidu.com"
          },
          {
            "name": "Bing",
            "url": "https://www.bing.com"
          },
          {
            "name": "谷歌",
            "url": "https://www.google.com"
          }
        ]
      }
    ]
  },
  "external": {
    "categories": [
      {
        "name": "常用网站",
        "links": [
          {
            "name": "kimi",
            "url": "https://kimi.moonshot.cn"
          },
          {
            "name": "cloudflare",
            "url": "https://dash.cloudflare.com"
          }
        ]
      },
      {
        "name": "搜索",
        "links": [
          {
            "name": "百度",
            "url": "https://www.baidu.com"
          },
          {
            "name": "Bing",
            "url": "https://www.bing.com"
          },
          {
            "name": "谷歌",
            "url": "https://www.google.com"
          }
        ]
      }
    ]
  }
};
