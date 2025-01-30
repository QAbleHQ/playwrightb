const envConfig = {
  copb2b: {
    staging: 'https://uat.shop.colgateprofessional.com',
    production: '',
  },
  gaba: {
    fr: {
      staging: 'https://uat.shop.colgateprofessional.ch/fr-ch',
      production: '',
      qa:'',
    },
    de: {
      staging: 'https://uat.shop.colgateprofessional.ch',
      production: '',
    },
  },
  pcaskin: {
    staging: 'https://test.pcaskinpro.com',
    production: '',
  },
  hro: {
    staging: 'https://test.hillsretailorder.com',
    production: '',
    en: {
      staging: 'https://test.hillsretailorder.com',
      production: '',
      qa:'',
    },
    de: {
      staging: 'https://de-test.hillsretailorder.com',
      production: '',
    },
  },
};
 
const getEnvironment = (project) => {
  const availableEnvironments = ['production', 'staging', 'qa', 'dev'];
  return availableEnvironments.find(env => project?.toLowerCase().includes(env)) || 'staging';
};
const getBaseUrl = (project) => {
  const [product, language, browser, environment] = project.split('-');
  const finalEnvironment = getEnvironment(project);
 
  if (project.includes('mobile')) {
    console.log(`Running mobile tests for ${product}, using the same URL as desktop.`);
    if (envConfig[product]) {
      const productConfig = envConfig[product];
      if (productConfig[language]) {
        return productConfig[language][finalEnvironment] || productConfig[language].staging;
      }
      return productConfig[finalEnvironment] || productConfig.staging;
    }
  }
  if (envConfig[product]) {
    const productConfig = envConfig[product];
    // Check if there's a language-specific configuration
    if (productConfig[language]) {
      return productConfig[language][finalEnvironment] || productConfig[language].staging;  // Default to staging if the environment is not found
    }
    // Return the environment-specific URL for products without language configuration
    return productConfig[finalEnvironment] || productConfig.staging;
  }
 
  console.error(`Product ${product} is not supported.`);
  return '';  
};
 
module.exports = { getBaseUrl };