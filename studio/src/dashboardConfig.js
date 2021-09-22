export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "614afbe541f2e69be914fd62",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-uibk4rah",
                  apiId: "ba72779a-6218-482e-9ec4-58846030cc28",
                },
                {
                  buildHookId: "614afbe541f2e6a32714f7c2",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-8xj1wgqf",
                  apiId: "9309f5de-54ed-4c9b-ba42-0db8e0c2ba4a",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/nathan-britten/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-8xj1wgqf.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
