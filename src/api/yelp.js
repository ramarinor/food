import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer d-KgUZtjap36X6ms8dV8SBUcbMndj1xsGuH1tSEioceFQ3P_mahJeA5CZMmDy9NvV6PvfQ920sjXCyDcMLvHDEFW05Yk_iZ15k1s41KRVwrrvYcPjms141iDxLx8YnYx'
  }
});
