export const nodejs = `const axios = require("axios");
const options = {
    method: 'POST',
    url: 'http://localhost:3000.com/api/v1/generator',
    params: {
      element: 'div',
      name: 'StyledButton',
      color: 'blue',
      padding: '16px',
      margin: '16px',
    },
    headers: {
      'Authorization': 'YOUR_API_KEY',
    }
  };
  
axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});`

export const python = `import requests
url = 'https://localhost:3000/api/v1/generator'
api_key = 'YOUR_API_KEY'
element = 'div'
name = 'StyledButton'
color = 'blue'
padding = '16px'
margin = '16px'

headers = {
    'Authorization': api_key
}

payload = {
  'element': element,
  'name': name,
  'color': color,
  'padding': padding,
  'margin': margin,
}

response = requests.post(url, headers=headers, json=payload)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f'Request failed with status code {response.status_code}')`