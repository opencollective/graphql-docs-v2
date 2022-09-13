import path from "path";
import { fileURLToPath } from "url";

function relativePath(target) {
  return path.join(path.dirname(fileURLToPath(import.meta.url)), target);
}

/**
 * @type {import('@magidoc/cli').MagidocConfiguration}
 */
const configuration = {
  introspection: {
    type: "url",
    url: "https://api.opencollective.com/graphql/v2",
  },
  website: {
    template: "carbon-multi-page",
    staticAssets: relativePath("assets"),
    output: relativePath("./docs"),
    options: {
      appTitle: "Open Collective",
      appLogo: "/logo.png",
      appFavicon: "/favicon.png",
      siteMeta: {
        description:
          "Open Collective is an open source platform for communities to collect and disburse money transparently.",
        "og:description":
          "Open Collective is an open source platform for communities to collect and disburse money transparently.",
      },
      queryGenerationFactories: {
        EmailAddress: "john.doe@yourwebsite.com",
        JSON: {},
        JSONObject: {},
        DateString: "2021-01-01",
        AccountSettingsKey: "<account-settings-key>",
        IsoDateString: "2021-01-01T00:00:00.000Z",
      },
    },
  },
};

export default configuration;
