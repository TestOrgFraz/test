import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  networkSidebar: [
    "intro",
    {
      type: "category",
      label: "Network",
      collapsed: true,
      link: { type: "doc", id: "network/overview" },
      items: [
        "network/getting-started",
        {
          type: "category",
          label: "Network Guides",
          collapsed: true,
          link: {
            slug: "/category/network/guides",
            type: "generated-index",
            description:
              "Learn how to interact with Flare onchain and offchain.",
          },
          items: [{ type: "autogenerated", dirName: "network/guides" }],
        },
        {
          type: "category",
          label: "Network Reference",
          collapsed: true,
          link: { type: "doc", id: "network/solidity-reference" },
          items: [
            { type: "autogenerated", dirName: "network/solidity-reference" },
          ],
        },
        {
          type: "category",
          label: "Flare Systems Protocol",
          collapsed: true,
          link: { type: "doc", id: "network/fsp" },
          items: [
            {
              type: "autogenerated",
              dirName: "network/fsp",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "FTSOv2",
      collapsed: true,
      link: { type: "doc", id: "ftso/overview" },
      items: [
        "ftso/getting-started",
        "ftso/feeds",
        {
          type: "category",
          label: "FTSOv2 Guides",
          collapsed: true,
          link: {
            slug: "/category/ftso/guides",
            type: "generated-index",
            description:
              "Learn how to interact with FTSOv2 onchain and offchain.",
          },
          items: [{ type: "autogenerated", dirName: "ftso/guides" }],
        },
        {
          type: "category",
          label: "FTSOv2 Reference",
          collapsed: true,
          link: { type: "doc", id: "ftso/solidity-reference" },
          items: [
            { type: "autogenerated", dirName: "ftso/solidity-reference" },
          ],
        },
        {
          type: "category",
          label: "Scaling",
          collapsed: true,
          link: { type: "doc", id: "ftso/scaling/overview" },
          items: [
            "ftso/scaling/getting-started",
            "ftso/scaling/anchor-feeds",
            // {
            //   type: "category",
            //   label: "Scaling Guides",
            //   collapsed: true,
            //   link: {
            //     slug: "/category/ftso/scaling/guides",
            //     type: "generated-index",
            //     description: "Learn how to interact with Scaling onchain and offchain.",
            //   },
            //   items: [
            //     {
            //       type: "autogenerated",
            //       dirName: "ftso/scaling/guides",
            //     },
            //   ],
            // },
            {
              type: "category",
              label: "Scaling Reference",
              collapsed: true,
              link: {
                type: "doc",
                id: "ftso/scaling/solidity-reference",
              },
              items: [
                {
                  type: "autogenerated",
                  dirName: "ftso/scaling/solidity-reference",
                },
              ],
            },
          ],
        },
        "ftso/migration",
      ],
    },
    {
      type: "category",
      label: "FDC",
      collapsed: true,
      link: { type: "doc", id: "fdc/overview" },
      items: [
        "fdc/getting-started",
        {
          type: "category",
          label: "Attestation Types",
          collapsed: true,
          link: { type: "doc", id: "fdc/attestation-types" },
          items: [{ type: "autogenerated", dirName: "fdc/attestation-types" }],
        },
        {
          type: "category",
          label: "FDC Guides",
          collapsed: true,
          link: {
            type: "generated-index",
          },
          items: [{ type: "autogenerated", dirName: "fdc/guides" }],
        },
        {
          type: "category",
          label: "FDC Reference",
          collapsed: true,
          link: { type: "doc", id: "fdc/solidity-reference" },
          items: [{ type: "autogenerated", dirName: "fdc/solidity-reference" }],
        },
        {
          type: "category",
          label: "FDC API Docs",
          link: { type: "doc", id: "fdc/open-api" },
          items: [],
        },
      ],
    },
    {
      type: "category",
      label: "FAssets",
      collapsed: true,
      link: { type: "doc", id: "fassets/overview" },
      items: [
        // "fassets/getting-started",
        {
          type: "category",
          label: "FAssets Guides",
          collapsed: false,
          link: {
            type: "generated-index",
          },
          items: [{ type: "autogenerated", dirName: "fassets/guides" }],
        },
      ],
    },
    {
      type: "category",
      label: "Run a Node",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [{ type: "autogenerated", dirName: "run-node" }],
    },
    {
      type: "html",
      value: `
        <div style="margin-top: 20px; padding-left: 15px;">
          <a href="https://github.com/flare-foundation/developer-hub" 
             aria-label="GitHub repository" 
             target="_blank" 
             rel="noopener noreferrer">
            <img class="github-logo-sidebar" src="/img/github-icon.svg" alt="GitHub" style="width: 24px; height: 24px;" />
          </a>
        </div>
      `,
    },
  ],
};

export default sidebars;