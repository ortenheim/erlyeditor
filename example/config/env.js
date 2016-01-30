export default (argv) => {
  const nodeEnv = process.env.NODE_ENV;

  const environments = {
    production: argv.production || nodeEnv === 'production'
  };

  const environmentName = Array.find(Object.keys(environments), (el) => environments[el]) || 'development';
  environments.development = argv.development || environmentName === 'development';

  return { environments, environmentName };
};
