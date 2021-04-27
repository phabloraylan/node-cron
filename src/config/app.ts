export default {
  environment: (process.env.TS_NODE_DEV ? 'development' : 'production') as
    | 'development'
    | 'production',
  name: process.env.APP_NAME || 'Server',
  port: Number(process.env.APP_PORT) || 3333,
};
