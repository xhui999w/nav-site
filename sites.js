// ============================================================
//  Silnav静航 - 链接配置（只改这个文件即可，不用动 index.html）
//  数据已从 sun-Panel 导入（24 个内网服务 + 1 个外部分类）
// ============================================================
//  规则：
//  1. 页面读取【导航页自身被访问的网址】自动判断内/外网：
//      命中 internalHosts 或 internalIpPrefixes（如 192.168.*）→ 内网模式
//      否则 → 外网模式。普通分类只显示当前环境对应的那一组。
//  2. 顶部「NAS」分类始终显示，每个设备填 internal（内网）+ external（外网），
//      点击图标按当前环境自动选地址。
//  3. 自行添加：在任意分类标题上右键 → 快速添加（普通分类单网址，NAS 勾选填双地址）。
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
      "internal": "http://192.168.31.126:5248",
      "external": "https://openlist.120345.xyz"
    },
    {
      "name": "openspeedtest",
      "internal": "http://192.168.31.126:3001",
      "external": "https://speed.120345.xyz:16888"
    },
    {
      "name": "MoviePilot-V2",
      "internal": "http://192.168.31.126:3004",
      "external": "https://mp-v2.120345.xyz"
    },
    {
      "name": "CloudDrive2",
      "internal": "http://192.168.31.126:19798",
      "external": "https://cd2.120345.xyz:16888"
    },
    {
      "name": "Lucky",
      "internal": "http://192.168.31.126:16601",
      "external": "https://lucky.120345.xyz"
    },
    {
      "name": "Vaultwarden",
      "internal": "http://192.168.31.126:3512",
      "external": "https://vau.120345.xyz"
    },
    {
      "name": "qbittorrent",
      "internal": "http://192.168.31.126:8091",
      "external": "https://qb.120345.xyz"
    },
    {
      "name": "emby",
      "internal": "http://192.168.31.126:9096",
      "external": "https://emby.120345.xyz"
    },
    {
      "name": "飞牛-虚拟机",
      "internal": "http://192.168.68.86:8000",
      "external": "https://5ddd.com/xhui999w"
    },
    {
      "name": "v2raya",
      "internal": "http://192.168.31.126:2017",
      "external": "https://v2ray.120345.xyz"
    },
    {
      "name": "taosync",
      "internal": "http://192.168.31.126:8023",
      "external": "https://taotao.120345.xyz"
    },
    {
      "name": "immich",
      "internal": "http://192.168.31.126:2283",
      "external": "https://immich.120345.xyz"
    },
    {
      "name": "dockercopilot",
      "internal": "http://192.168.31.126:12712",
      "external": "https://docker.120345.xyz"
    },
    {
      "name": "Navidrome",
      "internal": "http://192.168.31.126:4533",
      "external": "https://music1.120345.xyz:1688"
    },
    {
      "name": "transmission",
      "internal": "http://192.168.31.126:9091",
      "external": "https://tr.120345.xyz"
    },
    {
      "name": "plex",
      "internal": "http://192.168.31.126:32400",
      "external": "https://plex.120345.xyz:16888"
    },
    {
      "name": "IYUU",
      "internal": "http://192.168.31.126:8780",
      "external": "https://iyuu.120345.xyz"
    },
    {
      "name": "audiobookshelf",
      "internal": "http://192.168.68.125:13378",
      "external": "https://audio.120345.xyz:16888"
    },
    {
      "name": "CMS",
      "internal": "http://192.168.31.126:9527",
      "external": "https://cms.120345.xyz"
    },
    {
      "name": "CloudSaver",
      "internal": "http://192.168.31.126:8008",
      "external": "https://cs.120345.xyz"
    },
    {
      "name": "ms-go",
      "internal": "http://192.168.31.126:8888",
      "external": "https://ms.120345.xyz"
    },
    {
      "name": "MDC-NG",
      "internal": "http://192.168.31.126:9208",
      "external": "https://mdc.120345.xyz"
    },
    {
      "name": "tgto123",
      "internal": "http://192.168.31.126:12366",
      "external": "https://tg123.120345.xyz"
    },
    {
      "name": "yt-dlp Web UI",
      "internal": "http://192.168.31.126:3033",
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
