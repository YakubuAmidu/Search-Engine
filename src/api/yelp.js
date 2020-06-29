import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer peVSxo2PDw0AVDIZcznTAYsa0UVhtIwLB5VCcIIb12IjKeGY__KGNbhMThfLoNrm0prTKJnbGuh3PhU0D0cISpxUgNsiBaWCFU9o27LuwB_mO9ddRgn4NBuJA3FSXXYx'
  }
});
