import { defineConfig } from "dumi";

export default defineConfig({
  mode: "site",
  hash: true,
  title: "Bug",
  navs: {
    "en-US": [
      { title: "Guide", path: "/guide" },
      { title: "API", path: "/api" },
      {
        title: "GitHub",
        path: "https://github.com/formularx/formular",
      },
    ],
    "zh-CN": [
      { title: "教程", path: "/guide" },
      { title: "API", path: "/api" },
      {
        title: "GitHub 仓库",
        path: "https://github.com/formularx/formular",
      },
    ],
  },
});
