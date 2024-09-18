/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: "postgresql://OrionAiDB_owner:nUZetq8r7WGT@ep-delicate-wildflower-a5eiumj9.us-east-2.aws.neon.tech/OrionAiDB?sslmode=require",
    }
  };