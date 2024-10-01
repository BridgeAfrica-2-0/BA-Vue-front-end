import moment from "moment";
import axios from "axios";

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
            <img src="${
              notification.avatar
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


const checkCountryLocalisation = async () => {
  const response = await fetch('https://ipapi.co/json/');
  const data = await response.json();
  return data.country; // e.g., 'US'
}

export const checkCountry = async () => {
  let ip = localStorage.getItem("ip") ?? null;
  if(!ip) {  
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

const getRate =  async (fromCurrency, toCurrency) => {
  let conversionRate = localStorage.getItem("conversionRate") ?? null;
  if(!conversionRate){
    // const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const response = await axios.get(`user/currency`,{ params: { currency: fromCurrency } });
    const data = response.data
    localStorage.setItem("conversionRate", data.rates[toCurrency]);
    return data.rates[toCurrency]; 
  } else {
    return conversionRate;
  }
}

export const currencyMap = {
  'US': 'USD',  // United States Dollar
  'CA': 'CAD',  // Canadian Dollar
  'GB': 'GBP',  // British Pound Sterling
  'CM': 'XAF',  // Central African CFA Franc
  'FR': 'EUR',  // Euro
  'DE': 'EUR',  // Euro
  'JP': 'JPY',  // Japanese Yen
  'IN': 'INR',  // Indian Rupee
  'AU': 'AUD',  // Australian Dollar
  'CN': 'CNY',  // Chinese Yuan
  'BR': 'BRL',  // Brazilian Real
  'ZA': 'ZAR',  // South African Rand
  'MX': 'MXN',  // Mexican Peso
  'RU': 'RUB',  // Russian Ruble
  'NG': 'NGN',  // Nigerian Naira
  'KR': 'KRW',  // South Korean Won
  'SE': 'SEK',  // Swedish Krona
  'NO': 'NOK',  // Norwegian Krone
  'CH': 'CHF',  // Swiss Franc
  'SG': 'SGD',  // Singapore Dollar
  'PK': 'PKR',
};

export const convertCurrency = async(defaultCurrency=null)  => {
  try {

      let userCountry
      if (!defaultCurrency) {
        userCountry = await checkCountryLocalisation();
      }else{
        userCountry = defaultCurrency
      }
      

      const userCurrency = currencyMap[userCountry] || 'XAF'; 
      
      const conversionRate = await getRate(userCurrency, 'XAF');
      
      // console.log(`1 ${userCurrency} = ${conversionRate} XAF`);

      return  {"currency": userCurrency, rate:conversionRate}
      
  } catch (error) {
      console.error('Error:', error);
  }
}

export const convertToCurrency = async(defaultCurrency=null)  => {
  try {
      let userCurrency;
      let userCountry = JSON.parse(localStorage.getItem('country')) ?? null;      
      if (!defaultCurrency && !userCountry.country) {
        userCountry = await checkCountry();
      }
      if(defaultCurrency && !userCountry.country){
        userCountry = defaultCurrency
      }
      if(!userCountry)
      {
        userCurrency = currencyMap['US']; 
      }
      else
      {
        userCurrency = currencyMap[userCountry.country]; 
        if(!userCurrency)
        {
          userCurrency = 'USD' 
        }
      }      
      
      const conversionRate = await getRate(userCurrency, 'XAF');
      console.log(conversionRate, "crate");
      return  {"currency": userCurrency, rate:conversionRate}
      
  } catch (error) {
      console.error('Error:', error);
  }
}