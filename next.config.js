const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
  PHASE_PRODUCTION_SERVER,
} = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    return {
      env: {
        target: "server",
        mongodb_username: "jox",
        mongodb_password: "fyoumohtt33",
        mongodb_clustername: "nextjs-blog",
        mongodb_database: "nextjs-blog-production",
      },
    };
  }

  if (phase === PHASE_PRODUCTION_BUILD) {
    return {
      env: {
        target: "server",
        mongodb_username: "jox",
        mongodb_password: "fyoumohtt33",
        mongodb_clustername: "nextjs-blog",
        mongodb_database: "nextjs-blog-build",
      },
    };
  }

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        target: "server",
        mongodb_username: "jox",
        mongodb_password: "fyoumohtt33",
        mongodb_clustername: "nextjs-blog",
        mongodb_database: "nextjs-blog-dev",
      },
    };
  }
};
