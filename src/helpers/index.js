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

console.log(localStorage.getItem("lang"));

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


// export const checkCountryLocalisation = async () => {
//   const response = await fetch('https://ipapi.co/json/');
//   const data = await response.json();
//   return data.country; // e.g., 'US'
// }
export const checkCountryLocalisation = async () => {
  try {
    let ip = localStorage.getItem("ip") ?? null;
    if (!ip) {
      const res = await fetch('https://api.ipify.org?format=json');
      const data1 = await res.json();
      ip = data1.ip;
      localStorage.setItem("ip", ip);
    }
    const response = await axios.get('user/location', { params: { ip: ip } });
    return response.data.country; 
  } catch (error) {
    console.error('Failed to get country location:', error);
    return localStorage.getItem("country")?.country || 'US';
  }
};
export const checkCountry = async () => {
  // console.log('in helpers')
  let ip = localStorage.getItem("ip") ?? null;
  if (!ip) {
    const res = await fetch('https://api.ipify.org?format=json');
    const data1 = await res.json();
    ip = data1.ip;
    localStorage.setItem("ip", ip);
  }
  try {
    const response = await axios.get('user/location', { params: { ip: ip } });
    return response.data;
  } catch (error) {
    console.error('API call failed:', error);
  }
  return null;
};

export const getRate = async (fromCurrency, toCurrency) => {
  let currencyCheck;
  let userCountry = JSON.parse(localStorage.getItem('country')) ?? null;  
  if (userCountry?.country) {
    // Get currency code from the country
    const userCurrencyObject = currencyMap[userCountry?.country];
    console.log("In getRate - userCurrencyObject:", userCurrencyObject);
    
    // Extract the currency code
    if (userCurrencyObject && typeof userCurrencyObject === 'object') {
      if (userCurrencyObject.currency) {
        // If it has a currency property, extract the first currency code
        const currencyCodes = Object.keys(userCurrencyObject.currency);
        if (currencyCodes.length > 0) {
          currencyCheck = currencyCodes[0];
        }
      } else {
        // Direct access for any other structure
        currencyCheck = Object.keys(userCurrencyObject)[0];
      }
    } else if (typeof userCurrencyObject === 'string') {
      currencyCheck = userCurrencyObject;
    }
    
    console.log("In getRate - extracted currencyCheck:", currencyCheck);
  }
  
  if (currencyCheck === fromCurrency) {
    let conversionRate = localStorage.getItem("conversionRate") ?? null;
    if (!conversionRate) {
      // const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const response = await axios.get(`user/currency`, { params: { currency: fromCurrency } });
      const data = response.data;
      localStorage.setItem("conversionRate", data.rates[toCurrency]);
      return data.rates[toCurrency];
    } else {
      return conversionRate;
    }
  }
  else {
    const response = await axios.get(`user/currency`, { params: { currency: fromCurrency } });
    const data = response.data;
    return data.rates[toCurrency];
  }
}
export let currencyMap = []

async function fetchDataWithRetry(url, maxRetries = 3) {
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
        throw error; // Lance une erreur après le dernier échec
      }
    }
  }
}


export const onInitializer = () => {
  return axios.get('https://restcountries.com/v3.1/all')
    .then(response => {
      // Convert array to object with country codes as keys
      response.data.forEach(country => {
        currencyMap[country.cca2] = {
          "name": country.name.common,
          "sigle": country.cca2,
          "currency": country.currencies ,
          "flag": country.flags.png,
        };
      });
    })
}
export const convertCurrency = async (defaultCurrency = null) => {
  try {
    let userCountry = null
    let userCurrency = null
    if (!defaultCurrency) {
      userCountry = await checkCountryLocalisation();
      userCurrency = currencyMap[userCountry] || 'XAF';
    } else {
      userCurrency = defaultCurrency
    }

    const conversionRate = await getRate(userCurrency, 'XAF');

    return { "currency": userCurrency, rate: conversionRate }

  } catch (error) {
    console.error('Error:', error);
    console.error('Error in helpers:', error);
  }
}
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
    
    // Use provided default, or proceed with detection
    if (defaultCurrency) {
      userCurrency = defaultCurrency;
      console.log("Using default currency:", userCurrency);
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
        
        // Save country data for future use
        if (userCountry) {
          localStorage.setItem('country', JSON.stringify(userCountry));
        }
      }
      
      // Debug: Check country map
      console.log("Country code:", userCountry?.country);
      console.log("Currency map entry:", currencyMap[userCountry?.country]);
      
      // Get currency for country
      if (userCountry?.country) {
        // Direct access to country's currency map
        const countryMapEntry = currencyMap[userCountry.country];
        console.log("Currency map entry for country:", countryMapEntry);
        
        if (countryMapEntry) {
          // Check currency property format
          if (countryMapEntry.currency) {
            // If it has a currency property with object structure
            const currencyObj = countryMapEntry.currency;
            if (typeof currencyObj === 'object') {
              // Get first currency code
              const firstCurrencyKey = Object.keys(currencyObj)[0];
              userCurrency = firstCurrencyKey;
              console.log("Extracted currency from object:", userCurrency);
            } else {
              // Direct string value
              userCurrency = currencyObj;
              console.log("Using direct currency string:", userCurrency);
            }
          } else {
            // Try getCurrencyForCountry as fallback
            userCurrency = getCurrencyForCountry(userCountry.country);
            console.log("Using getCurrencyForCountry result:", userCurrency);
          }
        }
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
    
    // Ultimate fallback
    return { "currency": "USD", rate: 1 };
  }
};

// Improved getCurrencyForCountry function with better debugging
export const getCurrencyForCountry = (countryCode) => {
  console.log("getCurrencyForCountry called with:", countryCode);
  
  if (!countryCode) {
    console.log("No country code provided, returning USD");
    return 'USD';
  }
  
  if (!currencyMap[countryCode]) {
    console.log("Country not found in currency map, returning USD");
    return 'USD';
  }
  
  console.log("Currency map entry:", currencyMap[countryCode]);
  
  // Get the currency object from the country's data
  const countryData = currencyMap[countryCode];
  
  // Check if currency is directly a string
  if (typeof countryData === 'string') {
    console.log("Currency is direct string:", countryData);
    return countryData;
  }
  
  // If the country data contains a currency property
  if (countryData.currency) {
    const currencyObj = countryData.currency;
    console.log("Currency object:", currencyObj);
    
    // If it's already a string, return it
    if (typeof currencyObj === 'string') {
      console.log("Currency is string:", currencyObj);
      return currencyObj;
    }
    
    // If it's an object, get the first currency code
    if (typeof currencyObj === 'object') {
      const currencyCodes = Object.keys(currencyObj);
      if (currencyCodes.length > 0) {
        console.log("Extracted currency code:", currencyCodes[0]);
        return currencyCodes[0];
      }
    }
  }
  
  // If we couldn't find the currency, log it and return USD
  console.log("Could not determine currency, returning USD");
  return 'USD';
};

