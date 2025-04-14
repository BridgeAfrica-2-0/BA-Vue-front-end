import moment from "moment";
import axios from "axios";
import { faQq } from "@fortawesome/free-brands-svg-icons";

export const getRootSchemeForRedis = () =>
  axios.defaults.baseURL.substring(0, axios.defaults.baseURL.length - 8);

export const date = (value) =>
  moment(value).format("dddd, MMMM Do YYYY, h:mm:ss a");

export const fullMediaLink = (media) => {
  if (media) {
    const scheme = axios.defaults.baseURL.substring(
      0,
      axios.defaults.baseURL.length - 8
    );
    const render = media.startsWith("https://www.youtube.com")
      ? media
      : media.startsWith(scheme)
        ? media
        : media.startsWith("/storage/")
          ? `${scheme}${media}`
          : media;
    return render;
  }
  return "";
};

export const fromNow = (dateTime) =>
  moment(dateTime)
    .local("en" == localStorage.getItem("lang") ? "en" : "fr")
    .fromNow();

export const formatNumber = (num) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num;
};

export const diffBetweenTwoDate = (end, start) => {
  const startDate = moment(start);
  const endDate = moment(end);

  return endDate.diff(startDate);
};

export const notification = (notification) => {
  const time = () => notification.created_at;

  return `
    <div class="d-inline-flex flex-row align-items-center suggest-item cursor-pointer">
        <div>
            <img src="${notification.avatar
    }" class="rounded-circle" alt="" width="30" height="30" />
        </div>
        <div class="d-flex flex-column ml-3">
            <div>${notification.notification_text}</div>
            <div class="small text-muted">
                <span class="text-capitalize">
                ${time()}
                </span>
            </div>
        </div>
    </div>
`;
};

export const isGuestUser = () => {
  let check = false;
  if (localStorage.getItem("isGuestUser")) {
    check = true;
  }
  return check;
};

export const isPremium = () => {
  let check = true;
  let profile_package = JSON.parse(localStorage.getItem("profile_package"));
  if (profile_package.user_package) {
    if (profile_package.user_package.name == "premium") {
      check = true;
    } else if (profile_package.user_package.name == "basic") {
      check = false;
    }
  }

  return check;
};

export const wrapperErrors = (errors) =>
  Object.values(errors).map((err) => err[0]);

export const generateGuestIdentifier = () => {
  return (
    "id-" +
    Math.random()
      .toString(36)
      .slice(2, 11)
  );
};

export const setGuestIdentifier = () => {
  const existing = localStorage.getItem("guest_identifier");
  if (existing) return;
  const guestIdentifier = generateGuestIdentifier();
  localStorage.setItem("guest_identifier", guestIdentifier);
  return guestIdentifier;
};

export const getGuestIdentifier = () => {
  return localStorage.getItem("guest_identifier") ?? null;
};

export let currencyMap = [];

// Updated checkCountry function with proper isLocal flag setting
export const checkCountry = async () => {
  try {
    // Try to get cached country data first
    const cachedCountry = localStorage.getItem('country');
    if (cachedCountry) {
      try {
        const countryData = JSON.parse(cachedCountry);
        if (countryData && countryData.country) {
          console.log("Using cached country data:", countryData);
          
          // Set isLocal flag based on whether user is from Cameroon
          if (countryData.country === 'CM') {
            localStorage.setItem("isLocal", 'true');
          } else {
            localStorage.setItem("isLocal", 'false');
          }
          
          return countryData;
        }
      } catch (e) {
        console.error("Error parsing cached country data:", e);
      }
    }
    
    // Get IP address
    let ip = localStorage.getItem("ip");
    if (!ip) {
      try {
        const res = await fetch('https://api.ipify.org?format=json');
        const data = await res.json();
        ip = data.ip;
        localStorage.setItem("ip", ip);
      } catch (ipError) {
        console.error('Failed to get IP address:', ipError);
        localStorage.setItem("isLocal", 'false');
        return { country: 'US' }; // Default fallback
      }
    }
    
    // Get location from IP
    const response = await axios.get('user/location', { params: { ip: ip } });
    const countryData = response.data;
    
    // Cache the result and set isLocal flag
    if (countryData && countryData.country) {
      localStorage.setItem('country', JSON.stringify(countryData));
      
      // Set isLocal flag based on whether user is from Cameroon
      if (countryData.country === 'CM') {
        localStorage.setItem("isLocal", 'true');
      } else {
        localStorage.setItem("isLocal", 'false');
      }
    }
    
    return countryData;
  } catch (error) {
    console.error('API call failed in checkCountry:', error);
    
    // Try navigator.language as fallback
    try {
      if (navigator && navigator.language) {
        const language = navigator.language;
        const countryCode = language.split('-')[1] || language.substring(0, 2).toUpperCase();
        
        // Set isLocal flag for fallback
        if (countryCode === 'CM') {
          localStorage.setItem("isLocal", 'true');
        } else {
          localStorage.setItem("isLocal", 'false');
        }
        
        return { country: countryCode };
      }
    } catch (navError) {
      console.error('Navigator language fallback failed:', navError);
    }
    
    // Ultimate fallback
    localStorage.setItem("isLocal", 'false');
    return { country: 'US' };
  }
};

// Legacy function for backward compatibility
export const checkCountryLocalisation = async () => {
  try {
    const countryData = await checkCountry();
    return countryData?.country || 'US';
  } catch (error) {
    console.error('Failed to get country location:', error);
    return localStorage.getItem("country")?.country || 'US';
  }
};

// Improved getRate function with better error handling
export const getRate = async (fromCurrency, toCurrency) => {
  // If currencies are the same, return 1
  if (fromCurrency === toCurrency) return 1;
  
  try {
    // Check if we have a cached rate
    const cacheKey = `rate_${fromCurrency}_${toCurrency}`;
    const cachedRate = localStorage.getItem(cacheKey);
    
    if (cachedRate) {
      console.log(`Using cached conversion rate for ${fromCurrency} to ${toCurrency}`);
      return parseFloat(cachedRate);
    }
    
    // Fetch fresh rate from API
    console.log(`Fetching conversion rate for ${fromCurrency} to ${toCurrency}`);
    const response = await axios.get(`user/currency`, { params: { currency: fromCurrency } });
    
    if (response.data && response.data.rates && response.data.rates[toCurrency]) {
      const rate = response.data.rates[toCurrency];
      
      // Cache the result for future use (1 hour expiration)
      localStorage.setItem(cacheKey, rate.toString());
      setTimeout(() => localStorage.removeItem(cacheKey), 60 * 60 * 1000);
      
      return rate;
    } else {
      console.error("Invalid response format from currency API:", response.data);
      return getFallbackRate(fromCurrency, toCurrency);
    }
  } catch (error) {
    console.error(`Error getting conversion rate from ${fromCurrency} to ${toCurrency}:`, error);
    return getFallbackRate(fromCurrency, toCurrency);
  }
};

// Fallback for when the API fails
const getFallbackRate = (fromCurrency, toCurrency) => {
  // Common fallback rates to XAF (Central African CFA franc)
  const fallbackRates = {
    'USD': 582.25,  // USD to XAF
    'EUR': 636.88,  // EUR to XAF
    'GBP': 754.59,  // GBP to XAF
    'JPY': 3.91,    // JPY to XAF
    'CNY': 80.29,   // CNY to XAF
    'INR': 6.97,    // INR to XAF
    'PKR': 2.08,    // PKR to XAF
    'NGN': 0.37,    // NGN to XAF
    'ZAR': 31.54,   // ZAR to XAF
    'XAF': 1.0      // XAF to XAF
  };
  
  if (toCurrency === 'XAF' && fallbackRates[fromCurrency]) {
    console.log(`Using fallback rate for ${fromCurrency} to XAF`);
    return fallbackRates[fromCurrency];
  }
  
  // Default fallback (approximate USD to XAF rate)
  console.log(`No fallback rate available for ${fromCurrency} to ${toCurrency}, using USD rate`);
  return fallbackRates['USD'];
};

// New, improved function to extract currency code from country code
export const extractCurrencyCode = (countryCode) => {
  if (!countryCode) return null;
  
  const countryEntry = currencyMap[countryCode];
  if (!countryEntry) return null;
  
  // Handle the structure that comes from REST Countries API
  if (countryEntry.currency) {
    const currencyObj = countryEntry.currency;
    
    // If it's directly a string (rare case)
    if (typeof currencyObj === 'string') {
      return currencyObj;
    }
    
    // Most common case: object with currency codes as keys
    if (typeof currencyObj === 'object' && currencyObj !== null) {
      const currencyCodes = Object.keys(currencyObj);
      if (currencyCodes.length > 0) {
        return currencyCodes[0]; // Return first currency code (e.g., "PKR" for Pakistan)
      }
    }
  }
  
  // For specific countries, provide common currencies
  const countryCurrencyMap = {
    'US': 'USD', 'GB': 'GBP', 'EU': 'EUR', 'JP': 'JPY', 'CN': 'CNY',
    'IN': 'INR', 'RU': 'RUB', 'BR': 'BRL', 'CA': 'CAD', 'AU': 'AUD',
    'ZA': 'ZAR', 'CH': 'CHF', 'PK': 'PKR', 'NG': 'NGN', 'EG': 'EGP',
    'AE': 'AED', 'SA': 'SAR', 'TR': 'TRY', 'CM': 'XAF'
  };
  
  // Fallback to hardcoded map for common country/currency pairs
  return countryCurrencyMap[countryCode] || null;
};

// Updated convertToCurrency function with isLocal flag handling
export const convertToCurrency = async (defaultCurrency = null) => {
  try {
    let userCurrency;
    const cachedCurrencyData = localStorage.getItem("currencyRate");
    let cachedCurrency = null;
    
    if (cachedCurrencyData) {
      try {
        const parsed = JSON.parse(cachedCurrencyData);
        cachedCurrency = parsed.currency;
        console.log("Found cached currency:", cachedCurrency);
      } catch (e) {
        console.error("Error parsing cached currency:", e);
      }
    }
    
    // Check isLocal flag first
    const isLocal = localStorage.getItem("isLocal") === 'true';
    
    // If user is from Cameroon, immediately use XAF
    if (isLocal) {
      userCurrency = 'XAF';
      console.log("User is from Cameroon, using XAF currency");
    }
    // Use provided default currency if specified
    else if (defaultCurrency) {
      userCurrency = defaultCurrency;
      console.log("Using provided default currency:", userCurrency);
    }
    else {
      // Get country information from storage or API
      let userCountry = null;
      try {
        const countryData = localStorage.getItem('country');
        if (countryData) {
          userCountry = JSON.parse(countryData);
          console.log("Using country from localStorage:", userCountry);
        }
      } catch (e) {
        console.error("Error parsing country data:", e);
      }
      
      // If we don't have country data, get it from API
      if (!userCountry?.country) {
        userCountry = await checkCountry();
        console.log("Got country from API:", userCountry);
      }
      
      // Get currency for country using improved extraction
      if (userCountry?.country) {
        // Special case for Cameroon
        if (userCountry.country === 'CM') {
          userCurrency = 'XAF';
          localStorage.setItem("isLocal", 'true');
        } else {
          userCurrency = extractCurrencyCode(userCountry.country);
          localStorage.setItem("isLocal", 'false');
        }
        console.log("Extracted currency for country:", userCurrency);
      }
      
      // Final fallback - use cached or default
      if (!userCurrency) {
        userCurrency = cachedCurrency || 'USD';
        console.log("Using fallback currency:", userCurrency);
      }
    }
    
    // Store detected currency for future reference
    localStorage.setItem("detectedCurrency", userCurrency);
    
    // Get conversion rate
    console.log("Getting conversion rate for:", userCurrency);
    const conversionRate = await getRate(userCurrency, 'XAF');
    console.log("Conversion rate:", conversionRate);
    
    // Prepare result
    const result = { "currency": userCurrency, rate: conversionRate };
    
    // Cache the result for future use
    localStorage.setItem("currencyRate", JSON.stringify(result));
    
    return result;
  } catch (error) {
    console.error('Error in convertToCurrency:', error);
    
    // Try to use cached currency data
    try {
      const cachedData = localStorage.getItem("currencyRate");
      if (cachedData) {
        return JSON.parse(cachedData);
      }
    } catch (e) {
      console.error("Error using cached currency data:", e);
    }
    
    // Check if isLocal is true as a final fallback
    if (localStorage.getItem("isLocal") === 'true') {
      return { "currency": "XAF", rate: 1 };
    }
    
    // Ultimate fallback
    return { "currency": "USD", rate: 1 };
  }
};

// Legacy function for backward compatibility
export const convertCurrency = async (defaultCurrency = null) => {
  console.warn("convertCurrency is deprecated, use convertToCurrency instead");
  return convertToCurrency(defaultCurrency);
};

// Improved format function for displaying prices correctly
export const locationPrice = (value, rate) => {
  if (!value || value === 0) return '0.00';
  if (!rate || !rate.currency) return `${value.toFixed(2)} USD`;
  
  let formattedPrice;
  
  try {
    // Convert the value according to the rate
    const convertedValue = value / (rate.rate || 1);
    
    // Format according to currency
    switch (rate.currency) {
      case 'XAF':
        // Use comma as decimal separator for XAF
        formattedPrice = `${convertedValue.toFixed(2).replace('.', ',')} ${rate.currency}`;
        break;
      case 'EUR':
        formattedPrice = `${convertedValue.toFixed(2)} €`;
        break;
      case 'GBP':
        formattedPrice = `£${convertedValue.toFixed(2)}`;
        break;
      case 'JPY':
        // No decimal places for JPY
        formattedPrice = `¥${Math.round(convertedValue)}`;
        break;
      case 'PKR':
        formattedPrice = `Rs ${convertedValue.toFixed(2)}`;
        break;
      default:
        // Default format with currency code
        formattedPrice = `${convertedValue.toFixed(2)} ${rate.currency}`;
    }
    
    return formattedPrice;
  } catch (error) {
    console.error('Error formatting price:', error);
    return `${value.toFixed(2)} ${rate?.currency || 'USD'}`;
  }
};

// Improved getCurrencyForCountry function (legacy, for backward compatibility)
export const getCurrencyForCountry = (countryCode) => {
  console.warn("getCurrencyForCountry is deprecated, use extractCurrencyCode instead");
  return extractCurrencyCode(countryCode);
};

// Updated onInitializer function to correctly map currencies
export const onInitializer = () => {
  return axios.get('https://restcountries.com/v3/all')
    .then(response => {
      // Convert array to object with country codes as keys
      response.data.forEach(country => {
        // Store the properly structured country data
        currencyMap[country.cca2] = {
          "name": country.name.common,
          "sigle": country.cca2,
          "currency": country.currencies, // This is already in the right format
          "flag": country.flags.png,
        };
      });
      console.log("Currency map initialized with", Object.keys(currencyMap).length, "countries");
    })
    .catch(error => {
      console.error("Error initializing currency map:", error);
      // Initialize a fallback map with common currencies
      initializeFallbackCurrencyMap();
    });
};
export const onInitializer2 = async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3/all');
    const countries = response.data.map(country => {
      const flag = country.flags && country.flags.length > 1 ? country.flags[1] : '/path/to/default/flag.png';
      
      return {
        name: country.name.common,
        code: country.cca2,
        currency: country.currencies,
        flag: flag  
      };
    });

    console.log("Countries initialized:", countries);
    return countries; 
  } catch (error) {
    console.error("Error initializing countries:", error);
    return [];
  }
};

// Fallback currency map in case the API fails
const initializeFallbackCurrencyMap = () => {
  const commonCurrencies = {
    'US': 'USD', 'GB': 'GBP', 'FR': 'EUR', 'DE': 'EUR', 'IT': 'EUR', 
    'ES': 'EUR', 'JP': 'JPY', 'CN': 'CNY', 'IN': 'INR', 'RU': 'RUB',
    'BR': 'BRL', 'CA': 'CAD', 'AU': 'AUD', 'ZA': 'ZAR', 'CH': 'CHF',
    'PK': 'PKR', 'NG': 'NGN', 'EG': 'EGP', 'AE': 'AED', 'SA': 'SAR',
    'TR': 'TRY', 'CM': 'XAF'
  };
  
  Object.entries(commonCurrencies).forEach(([countryCode, currencyCode]) => {
    currencyMap[countryCode] = {
      name: countryCode,
      sigle: countryCode,
      currency: { [currencyCode]: { name: currencyCode } }
    };
  });
  
  console.log("Initialized fallback currency map with", Object.keys(currencyMap).length, "countries");
};

// Legacy function for backward compatibility
export const fetchDataWithRetry = async (url, maxRetries = 3) => {
  let attempt = 0;

  while (attempt < maxRetries) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      attempt++;
      console.error(`Attempt ${attempt} failed. Retrying...`);
      if (attempt >= maxRetries) {
        console.error('All retry attempts failed.');
        throw error;
      }
    }
  }
};