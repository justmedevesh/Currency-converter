const apiKey = 'f4375004b97f3b505056c9fd'; // Use a currency API key like from https://openexchangerates.org or any other currency API
const countries = [
    { name: 'Afghanistan', code: 'AFN', flag: 'https://www.countryflags.io/af/flat/32.png' },
    { name: 'Albania', code: 'ALL', flag: 'https://www.countryflags.io/al/flat/32.png' },
    { name: 'Algeria', code: 'DZD', flag: 'https://www.countryflags.io/dz/flat/32.png' },
    { name: 'Andorra', code: 'EUR', flag: 'https://www.countryflags.io/ad/flat/32.png' },
    { name: 'Angola', code: 'AOA', flag: 'https://www.countryflags.io/ao/flat/32.png' },
    { name: 'Antigua and Barbuda', code: 'XCD', flag: 'https://www.countryflags.io/ag/flat/32.png' },
    { name: 'Argentina', code: 'ARS', flag: 'https://www.countryflags.io/ar/flat/32.png' },
    { name: 'Armenia', code: 'AMD', flag: 'https://www.countryflags.io/am/flat/32.png' },
    { name: 'Australia', code: 'AUD', flag: 'https://www.countryflags.io/au/flat/32.png' },
    { name: 'Austria', code: 'EUR', flag: 'https://www.countryflags.io/at/flat/32.png' },
    { name: 'Azerbaijan', code: 'AZN', flag: 'https://www.countryflags.io/az/flat/32.png' },
    { name: 'Bahamas', code: 'BSD', flag: 'https://www.countryflags.io/bs/flat/32.png' },
    { name: 'Bahrain', code: 'BHD', flag: 'https://www.countryflags.io/bh/flat/32.png' },
    { name: 'Bangladesh', code: 'BDT', flag: 'https://www.countryflags.io/bd/flat/32.png' },
    { name: 'Barbados', code: 'BBD', flag: 'https://www.countryflags.io/bb/flat/32.png' },
    { name: 'Belarus', code: 'BYN', flag: 'https://www.countryflags.io/by/flat/32.png' },
    { name: 'Belgium', code: 'EUR', flag: 'https://www.countryflags.io/be/flat/32.png' },
    { name: 'Belize', code: 'BZD', flag: 'https://www.countryflags.io/bz/flat/32.png' },
    { name: 'Benin', code: 'XOF', flag: 'https://www.countryflags.io/bj/flat/32.png' },
    { name: 'Bhutan', code: 'BTN', flag: 'https://www.countryflags.io/bt/flat/32.png' },
    { name: 'Bolivia', code: 'BOB', flag: 'https://www.countryflags.io/bo/flat/32.png' },
    { name: 'Bosnia and Herzegovina', code: 'BAM', flag: 'https://www.countryflags.io/ba/flat/32.png' },
    { name: 'Botswana', code: 'BWP', flag: 'https://www.countryflags.io/bw/flat/32.png' },
    { name: 'Brazil', code: 'BRL', flag: 'https://www.countryflags.io/br/flat/32.png' },
    { name: 'Brunei', code: 'BND', flag: 'https://www.countryflags.io/bn/flat/32.png' },
    { name: 'Bulgaria', code: 'BGN', flag: 'https://www.countryflags.io/bg/flat/32.png' },
    { name: 'Burkina Faso', code: 'XOF', flag: 'https://www.countryflags.io/bf/flat/32.png' },
    { name: 'Burundi', code: 'BIF', flag: 'https://www.countryflags.io/bi/flat/32.png' },
    { name: 'Cambodia', code: 'KHR', flag: 'https://www.countryflags.io/kh/flat/32.png' },
    { name: 'Cameroon', code: 'XAF', flag: 'https://www.countryflags.io/cm/flat/32.png' },
    { name: 'Canada', code: 'CAD', flag: 'https://www.countryflags.io/ca/flat/32.png' },
    { name: 'Cape Verde', code: 'CVE', flag: 'https://www.countryflags.io/cv/flat/32.png' },
    { name: 'Central African Republic', code: 'XAF', flag: 'https://www.countryflags.io/cf/flat/32.png' },
    { name: 'Chad', code: 'XAF', flag: 'https://www.countryflags.io/td/flat/32.png' },
    { name: 'Chile', code: 'CLP', flag: 'https://www.countryflags.io/cl/flat/32.png' },
    { name: 'China', code: 'CNY', flag: 'https://www.countryflags.io/cn/flat/32.png' },
    { name: 'Colombia', code: 'COP', flag: 'https://www.countryflags.io/co/flat/32.png' },
    { name: 'Comoros', code: 'KMF', flag: 'https://www.countryflags.io/km/flat/32.png' },
    { name: 'Congo', code: 'XAF', flag: 'https://www.countryflags.io/cg/flat/32.png' },
    { name: 'Costa Rica', code: 'CRC', flag: 'https://www.countryflags.io/cr/flat/32.png' },
    { name: 'Croatia', code: 'EUR', flag: 'https://www.countryflags.io/hr/flat/32.png' },
    { name: 'Cuba', code: 'CUP', flag: 'https://www.countryflags.io/cu/flat/32.png' },
    { name: 'Cyprus', code: 'EUR', flag: 'https://www.countryflags.io/cy/flat/32.png' },
    { name: 'Czech Republic', code: 'CZK', flag: 'https://www.countryflags.io/cz/flat/32.png' },
    { name: 'Democratic Republic of the Congo', code: 'CDF', flag: 'https://www.countryflags.io/cd/flat/32.png' },
    { name: 'Denmark', code: 'DKK', flag: 'https://www.countryflags.io/dk/flat/32.png' },
    { name: 'Djibouti', code: 'DJF', flag: 'https://www.countryflags.io/dj/flat/32.png' },
    { name: 'Dominica', code: 'XCD', flag: 'https://www.countryflags.io/dm/flat/32.png' },
    { name: 'Dominican Republic', code: 'DOP', flag: 'https://www.countryflags.io/do/flat/32.png' },
    { name: 'East Timor', code: 'USD', flag: 'https://www.countryflags.io/tl/flat/32.png' },
    { name: 'Ecuador', code: 'USD', flag: 'https://www.countryflags.io/ec/flat/32.png' },
    { name: 'Egypt', code: 'EGP', flag: 'https://www.countryflags.io/eg/flat/32.png' },
    { name: 'El Salvador', code: 'USD', flag: 'https://www.countryflags.io/sv/flat/32.png' },
    { name: 'Equatorial Guinea', code: 'XAF', flag: 'https://www.countryflags.io/gq/flat/32.png' },
    { name: 'Eritrea', code: 'ERN', flag: 'https://www.countryflags.io/er/flat/32.png' },
    { name: 'Estonia', code: 'EUR', flag: 'https://www.countryflags.io/ee/flat/32.png' },
    { name: 'Eswatini', code: 'SZL', flag: 'https://www.countryflags.io/sz/flat/32.png' },
    { name: 'Ethiopia', code: 'ETB', flag: 'https://www.countryflags.io/et/flat/32.png' },
    { name: 'Fiji', code: 'FJD', flag: 'https://www.countryflags.io/fj/flat/32.png' },
    { name: 'Finland', code: 'EUR', flag: 'https://www.countryflags.io/fi/flat/32.png' },
    { name: 'France', code: 'EUR', flag: 'https://www.countryflags.io/fr/flat/32.png' },
    { name: 'Gabon', code: 'XAF', flag: 'https://www.countryflags.io/ga/flat/32.png' },
    { name: 'Gambia', code: 'GMD', flag: 'https://www.countryflags.io/gm/flat/32.png' },
    { name: 'Georgia', code: 'GEL', flag: 'https://www.countryflags.io/ge/flat/32.png' },
    { name: 'Germany', code: 'EUR', flag: 'https://www.countryflags.io/de/flat/32.png' },
    { name: 'Ghana', code: 'GHS', flag: 'https://www.countryflags.io/gh/flat/32.png' },
    { name: 'Greece', code: 'EUR', flag: 'https://www.countryflags.io/gr/flat/32.png' },
    { name: 'Grenada', code: 'XCD', flag: 'https://www.countryflags.io/gd/flat/32.png' },
    { name: 'Guatemala', code: 'GTQ', flag: 'https://www.countryflags.io/gt/flat/32.png' },
    { name: 'Guinea', code: 'GNF', flag: 'https://www.countryflags.io/gn/flat/32.png' },
    { name: 'Guinea-Bissau', code: 'XOF', flag: 'https://www.countryflags.io/gw/flat/32.png' },
    { name: 'Guyana', code: 'GYD', flag: 'https://www.countryflags.io/gy/flat/32.png' },
    { name: 'Haiti', code: 'HTG', flag: 'https://www.countryflags.io/ht/flat/32.png' },
    { name: 'Honduras', code: 'HNL', flag: 'https://www.countryflags.io/hn/flat/32.png' },
    { name: 'Hungary', code: 'HUF', flag: 'https://www.countryflags.io/hu/flat/32.png' },
    { name: 'Iceland', code: 'ISK', flag: 'https://www.countryflags.io/is/flat/32.png' },
    { name: 'India', code: 'INR', flag: 'https://www.countryflags.io/in/flat/32.png' },
    { name: 'Indonesia', code: 'IDR', flag: 'https://www.countryflags.io/id/flat/32.png' },
    { name: 'Iran', code: 'IRR', flag: 'https://www.countryflags.io/ir/flat/32.png' },
    { name: 'Iraq', code: 'IQD', flag: 'https://www.countryflags.io/iq/flat/32.png' },
    { name: 'Ireland', code: 'EUR', flag: 'https://www.countryflags.io/ie/flat/32.png' },
    { name: 'Israel', code: 'ILS', flag: 'https://www.countryflags.io/il/flat/32.png' },
    { name: 'Italy', code: 'EUR', flag: 'https://www.countryflags.io/it/flat/32.png' },
    { name: 'Jamaica', code: 'JMD', flag: 'https://www.countryflags.io/jm/flat/32.png' },
    { name: 'Japan', code: 'JPY', flag: 'https://www.countryflags.io/jp/flat/32.png' },
    { name: 'Jordan', code: 'JOD', flag: 'https://www.countryflags.io/jo/flat/32.png' },
    { name: 'Kazakhstan', code: 'KZT', flag: 'https://www.countryflags.io/kz/flat/32.png' },
    { name: 'Kenya', code: 'KES', flag: 'https://www.countryflags.io/ke/flat/32.png' },
    { name: 'Kiribati', code: 'AUD', flag: 'https://www.countryflags.io/ki/flat/32.png' },
    { name: 'Kuwait', code: 'KWD', flag: 'https://www.countryflags.io/kw/flat/32.png' },
    { name: 'Kyrgyzstan', code: 'KGS', flag: 'https://www.countryflags.io/kg/flat/32.png' },
    { name: 'Laos', code: 'LAK', flag: 'https://www.countryflags.io/la/flat/32.png' },
    { name: 'Latvia', code: 'EUR', flag: 'https://www.countryflags.io/lv/flat/32.png' },
    { name: 'Lebanon', code: 'LBP', flag: 'https://www.countryflags.io/lb/flat/32.png' },
    { name: 'Lesotho', code: 'LSL', flag: 'https://www.countryflags.io/ls/flat/32.png' },
    { name: 'Liberia', code: 'LRD', flag: 'https://www.countryflags.io/lr/flat/32.png' },
    { name: 'Libya', code: 'LYD', flag: 'https://www.countryflags.io/ly/flat/32.png' },
    { name: 'Liechtenstein', code: 'CHF', flag: 'https://www.countryflags.io/li/flat/32.png' },
    { name: 'Lithuania', code: 'EUR', flag: 'https://www.countryflags.io/lt/flat/32.png' },
    { name: 'Luxembourg', code: 'EUR', flag: 'https://www.countryflags.io/lu/flat/32.png' },
    { name: 'Madagascar', code: 'MGA', flag: 'https://www.countryflags.io/mg/flat/32.png' },
    { name: 'Malawi', code: 'MWK', flag: 'https://www.countryflags.io/mw/flat/32.png' },
    { name: 'Malaysia', code: 'MYR', flag: 'https://www.countryflags.io/my/flat/32.png' },
    { name: 'Maldives', code: 'MVR', flag: 'https://www.countryflags.io/mv/flat/32.png' },
    { name: 'Mali', code: 'XOF', flag: 'https://www.countryflags.io/ml/flat/32.png' },
    { name: 'Malta', code: 'EUR', flag: 'https://www.countryflags.io/mt/flat/32.png' },
    { name: 'Marshall Islands', code: 'USD', flag: 'https://www.countryflags.io/mh/flat/32.png' },
    { name: 'Mauritania', code: 'MRU', flag: 'https://www.countryflags.io/mr/flat/32.png' },
    { name: 'Mauritius', code: 'MUR', flag: 'https://www.countryflags.io/mu/flat/32.png' },
    { name: 'Mexico', code: 'MXN', flag: 'https://www.countryflags.io/mx/flat/32.png' },
    { name: 'Micronesia', code: 'USD', flag: 'https://www.countryflags.io/fm/flat/32.png' },
    { name: 'Moldova', code: 'MDL', flag: 'https://www.countryflags.io/md/flat/32.png' },
    { name: 'Monaco', code: 'EUR', flag: 'https://www.countryflags.io/mc/flat/32.png' },
    { name: 'Mongolia', code: 'MNT', flag: 'https://www.countryflags.io/mn/flat/32.png' },
    { name: 'Montenegro', code: 'EUR', flag: 'https://www.countryflags.io/me/flat/32.png' },
    { name: 'Morocco', code: 'MAD', flag: 'https://www.countryflags.io/ma/flat/32.png' },
    { name: 'Mozambique', code: 'MZN', flag: 'https://www.countryflags.io/mz/flat/32.png' },
    { name: 'Myanmar', code: 'MMK', flag: 'https://www.countryflags.io/mm/flat/32.png' },
    { name: 'Namibia', code: 'NAD', flag: 'https://www.countryflags.io/na/flat/32.png' },
    { name: 'Nauru', code: 'AUD', flag: 'https://www.countryflags.io/nr/flat/32.png' },
    { name: 'Nepal', code: 'NPR', flag: 'https://www.countryflags.io/np/flat/32.png' },
    { name: 'Netherlands', code: 'EUR', flag: 'https://www.countryflags.io/nl/flat/32.png' },
    { name: 'New Zealand', code: 'NZD', flag: 'https://www.countryflags.io/nz/flat/32.png' },
    { name: 'Nicaragua', code: 'NIO', flag: 'https://www.countryflags.io/ni/flat/32.png' },
    { name: 'Niger', code: 'XOF', flag: 'https://www.countryflags.io/ne/flat/32.png' },
    { name: 'Nigeria', code: 'NGN', flag: 'https://www.countryflags.io/ng/flat/32.png' },
    { name: 'North Korea', code: 'KPW', flag: 'https://www.countryflags.io/kp/flat/32.png' },
    { name: 'North Macedonia', code: 'MKD', flag: 'https://www.countryflags.io/mk/flat/32.png' },
    { name: 'Norway', code: 'NOK', flag: 'https://www.countryflags.io/no/flat/32.png' },
    { name: 'Oman', code: 'OMR', flag: 'https://www.countryflags.io/om/flat/32.png' },
    { name: 'Pakistan', code: 'PKR', flag: 'https://www.countryflags.io/pk/flat/32.png' },
    { name: 'Palau', code: 'USD', flag: 'https://www.countryflags.io/pw/flat/32.png' },
    { name: 'Palestine', code: 'ILS', flag: 'https://www.countryflags.io/ps/flat/32.png' },
    { name: 'Panama', code: 'PAB', flag: 'https://www.countryflags.io/pa/flat/32.png' },
    { name: 'Papua New Guinea', code: 'PGK', flag: 'https://www.countryflags.io/pg/flat/32.png' },
    { name: 'Paraguay', code: 'PYG', flag: 'https://www.countryflags.io/py/flat/32.png' },
    { name: 'Peru', code: 'PEN', flag: 'https://www.countryflags.io/pe/flat/32.png' },
    { name: 'Philippines', code: 'PHP', flag: 'https://www.countryflags.io/ph/flat/32.png' },
    { name: 'Poland', code: 'PLN', flag: 'https://www.countryflags.io/pl/flat/32.png' },
    { name: 'Portugal', code: 'EUR', flag: 'https://www.countryflags.io/pt/flat/32.png' },
    { name: 'Qatar', code: 'QAR', flag: 'https://www.countryflags.io/qa/flat/32.png' },
    { name: 'Romania', code: 'RON', flag: 'https://www.countryflags.io/ro/flat/32.png' },
    { name: 'Russia', code: 'RUB', flag: 'https://www.countryflags.io/ru/flat/32.png' },
    { name: 'Rwanda', code: 'RWF', flag: 'https://www.countryflags.io/rw/flat/32.png' },
    { name: 'Saint Kitts and Nevis', code: 'XCD', flag: 'https://www.countryflags.io/kn/flat/32.png' },
    { name: 'Saint Lucia', code: 'XCD', flag: 'https://www.countryflags.io/lc/flat/32.png' },
    { name: 'Saint Vincent and the Grenadines', code: 'XCD', flag: 'https://www.countryflags.io/vc/flat/32.png' },
    { name: 'Samoa', code: 'WST', flag: 'https://www.countryflags.io/ws/flat/32.png' },
    { name: 'San Marino', code: 'EUR', flag: 'https://www.countryflags.io/sm/flat/32.png' },
    { name: 'Sao Tome and Principe', code: 'STN', flag: 'https://www.countryflags.io/st/flat/32.png' },
    { name: 'Saudi Arabia', code: 'SAR', flag: 'https://www.countryflags.io/sa/flat/32.png' },
    { name: 'Senegal', code: 'XOF', flag: 'https://www.countryflags.io/sn/flat/32.png' },
    { name: 'Serbia', code: 'RSD', flag: 'https://www.countryflags.io/rs/flat/32.png' },
    { name: 'Seychelles', code: 'SCR', flag: 'https://www.countryflags.io/sc/flat/32.png' },
    { name: 'Sierra Leone', code: 'SLL', flag: 'https://www.countryflags.io/sl/flat/32.png' },
    { name: 'Singapore', code: 'SGD', flag: 'https://www.countryflags.io/sg/flat/32.png' },
    { name: 'Slovakia', code: 'EUR', flag: 'https://www.countryflags.io/sk/flat/32.png' },
    { name: 'Slovenia', code: 'EUR', flag: 'https://www.countryflags.io/si/flat/32.png' },
    { name: 'Solomon Islands', code: 'SBD', flag: 'https://www.countryflags.io/sb/flat/32.png' },
    { name: 'Somalia', code: 'SOS', flag: 'https://www.countryflags.io/so/flat/32.png' },
    { name: 'South Africa', code: 'ZAR', flag: 'https://www.countryflags.io/za/flat/32.png' },
    { name: 'South Korea', code: 'KRW', flag: 'https://www.countryflags.io/kr/flat/32.png' },
    { name: 'South Sudan', code: 'SSP', flag: 'https://www.countryflags.io/ss/flat/32.png' },
    { name: 'Spain', code: 'EUR', flag: 'https://www.countryflags.io/es/flat/32.png' },
    { name: 'Sri Lanka', code: 'LKR', flag: 'https://www.countryflags.io/lk/flat/32.png' },
    { name: 'Sudan', code: 'SDG', flag: 'https://www.countryflags.io/sd/flat/32.png' },
    { name: 'Suriname', code: 'SRD', flag: 'https://www.countryflags.io/sr/flat/32.png' },
    { name: 'Sweden', code: 'SEK', flag: 'https://www.countryflags.io/se/flat/32.png' },
    { name: 'Switzerland', code: 'CHF', flag: 'https://www.countryflags.io/ch/flat/32.png' },
    { name: 'Syria', code: 'SYP', flag: 'https://www.countryflags.io/sy/flat/32.png' },
    { name: 'Taiwan', code: 'TWD', flag: 'https://www.countryflags.io/tw/flat/32.png' },
    { name: 'Tajikistan', code: 'TJS', flag: 'https://www.countryflags.io/tj/flat/32.png' },
    { name: 'Tanzania', code: 'TZS', flag: 'https://www.countryflags.io/tz/flat/32.png' },
    { name: 'Thailand', code: 'THB', flag: 'https://www.countryflags.io/th/flat/32.png' },
    { name: 'Togo', code: 'XOF', flag: 'https://www.countryflags.io/tg/flat/32.png' },
    { name: 'Tonga', code: 'TOP', flag: 'https://www.countryflags.io/to/flat/32.png' },
    { name: 'Trinidad and Tobago', code: 'TTD', flag: 'https://www.countryflags.io/tt/flat/32.png' },
    { name: 'Tunisia', code: 'TND', flag: 'https://www.countryflags.io/tn/flat/32.png' },
    { name: 'Turkey', code: 'TRY', flag: 'https://www.countryflags.io/tr/flat/32.png' },
    { name: 'Turkmenistan', code: 'TMT', flag: 'https://www.countryflags.io/tm/flat/32.png' },
    { name: 'Tuvalu', code: 'AUD', flag: 'https://www.countryflags.io/tv/flat/32.png' },
    { name: 'Uganda', code: 'UGX', flag: 'https://www.countryflags.io/ug/flat/32.png' },
    { name: 'Ukraine', code: 'UAH', flag: 'https://www.countryflags.io/ua/flat/32.png' },
    { name: 'United Arab Emirates', code: 'AED', flag: 'https://www.countryflags.io/ae/flat/32.png' },
    { name: 'United Kingdom', code: 'GBP', flag: 'https://www.countryflags.io/gb/flat/32.png' },
    { name: 'United States', code: 'USD', flag: 'https://www.countryflags.io/us/flat/32.png' },
    { name: 'Uruguay', code: 'UYU', flag: 'https://www.countryflags.io/uy/flat/32.png' },
    { name: 'Uzbekistan', code: 'UZS', flag: 'https://www.countryflags.io/uz/flat/32.png' },
    { name: 'Vanuatu', code: 'VUV', flag: 'https://www.countryflags.io/vu/flat/32.png' },
    { name: 'Vatican City', code: 'EUR', flag: 'https://www.countryflags.io/va/flat/32.png' },
    { name: 'Venezuela', code: 'VES', flag: 'https://www.countryflags.io/ve/flat/32.png' },
    { name: 'Vietnam', code: 'VND', flag: 'https://www.countryflags.io/vn/flat/32.png' }
    // Add more countries as needed from https://restcountries.com/v3.1/all 
    
];

function populateDropdown() {
    const fromSelect = document.getElementById('from');
    const toSelect = document.getElementById('to');
    
    countries.forEach(country => {
        const optionFrom = document.createElement('option');
        optionFrom.value = country.code;
        optionFrom.innerHTML = `${country.name} (${country.code}) <img src="${country.flag}" alt="${country.name}" />`;
        
        const optionTo = document.createElement('option');
        optionTo.value = country.code;
        optionTo.innerHTML = `${country.name} (${country.code}) <img src="${country.flag}" alt="${country.name}" />`;
        
        fromSelect.appendChild(optionFrom);
        toSelect.appendChild(optionTo);
    });
}

async function getRates() {
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
    
    if (fromCurrency && toCurrency) {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();
        const rate = data.rates[toCurrency];
        document.getElementById('rate').innerText = `Rate: ${rate}`;
        convertCurrency(rate);
    }
}

function convertCurrency() {
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
    const amount = document.getElementById('amount').value;

    if (!amount || !fromCurrency || !toCurrency) return;

    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[toCurrency];
            const convertedAmount = (amount * rate).toFixed(2);
            document.getElementById('convertedAmount').innerText = `${convertedAmount} ${toCurrency}`;
        });
}

populateDropdown(); // Populate dropdowns on page load

document.addEventListener('DOMContentLoaded', () => {
    // Find Nepal in the countries array and set it as selected in the "From" dropdown
    const nepalOption = countries.find(country => country.name === 'Nepal');
    if (nepalOption) {
        // Set the selected value in the dropdown
        document.querySelector('#from-country').value = 'Nepal';
        
        // If you're displaying the flag somewhere, update it
        const fromFlag = document.querySelector('#from-flag');
        if (fromFlag) {
            fromFlag.src = nepalOption.flag;
        }
        
        // If you're displaying the currency code somewhere, update it
        const fromCurrency = document.querySelector('#from-currency');
        if (fromCurrency) {
            fromCurrency.textContent = nepalOption.code;
        }
    }
    
    // ... rest of your initialization code ...
});
