const contentSections = [
  {
    id: "section-home",
    title: "首页",
    tags: ["pg模拟器", "模拟器下载", "pg模拟器安卓", "pg模拟器iOS"],
    content: "欢迎来到 pg模拟器 官方站点，提供最新版模拟器下载与使用教程。",
    url: "https://web-pgsimulator.com"
  },
  {
    id: "section-features",
    title: "功能特性",
    tags: ["pg模拟器", "模拟器玩法", "模拟器设置"],
    content: "pg模拟器 支持高度自定义画面、按键映射与多开功能，适配主流游戏。",
    url: "https://web-pgsimulator.com/features"
  },
  {
    id: "section-download",
    title: "下载中心",
    tags: ["pg模拟器下载", "模拟器版本", "pg模拟器历史版本"],
    content: "提供 pg模拟器 历史版本与最新安装包下载，支持安卓与iOS双平台。",
    url: "https://web-pgsimulator.com/download"
  },
  {
    id: "section-guide",
    title: "使用指南",
    tags: ["pg模拟器教程", "模拟器入门", "模拟器常见问题"],
    content: "从零开始学会使用 pg模拟器，涵盖安装、配置与常见问题排查。",
    url: "https://web-pgsimulator.com/guide"
  },
  {
    id: "section-community",
    title: "社区交流",
    tags: ["pg模拟器社区", "模拟器玩家", "模拟器攻略"],
    content: "加入 pg模拟器 玩家社区，分享你的游戏心得与配置方案。",
    url: "https://web-pgsimulator.com/community"
  }
];

const keywordTags = [
  "pg模拟器",
  "pg模拟器安卓",
  "pg模拟器iOS",
  "pg模拟器下载",
  "模拟器教程",
  "模拟器设置",
  "游戏模拟器",
  "pc模拟器",
  "手机模拟器",
  "模拟器多开"
];

const defaultSearchFilter = function(sections, query) {
  if (!query || query.trim() === "") {
    return sections;
  }
  const lowerQuery = query.trim().toLowerCase();
  return sections.filter(function(section) {
    const titleMatch = section.title.toLowerCase().includes(lowerQuery);
    const contentMatch = section.content.toLowerCase().includes(lowerQuery);
    const tagMatch = section.tags.some(function(tag) {
      return tag.toLowerCase().includes(lowerQuery);
    });
    const urlMatch = section.url.toLowerCase().includes(lowerQuery);
    return titleMatch || contentMatch || tagMatch || urlMatch;
  });
};

const searchSections = function(query) {
  const results = defaultSearchFilter(contentSections, query);
  return results;
};

const getAllTags = function() {
  const tagSet = new Set();
  contentSections.forEach(function(section) {
    section.tags.forEach(function(tag) {
      tagSet.add(tag);
    });
  });
  keywordTags.forEach(function(tag) {
    tagSet.add(tag);
  });
  return Array.from(tagSet).sort();
};

const getSectionById = function(id) {
  for (let i = 0; i < contentSections.length; i++) {
    if (contentSections[i].id === id) {
      return contentSections[i];
    }
  }
  return null;
};

const generateContentMap = function() {
  return {
    sections: contentSections,
    keywords: keywordTags,
    siteUrl: "https://web-pgsimulator.com",
    coreTerm: "pg模拟器"
  };
};

if (typeof window !== "undefined" && window.document) {
  window.contentMap = {
    sections: contentSections,
    tags: keywordTags,
    search: searchSections,
    getTags: getAllTags,
    getSectionById: getSectionById,
    generateMap: generateContentMap
  };
}