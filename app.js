const express = require('express'),
app = express(),
outh0Token = ')JQx:B/ULp!bZkCv.eYIGot?:vC:M_XlDDOBgeHC',
outh = ')JQx:B/ULp!bZkCv.eYIGot?:vC:M_XlDDOBgeHC',
axios = require("axios"), 
qs = require("qs");
// fetch = require('node-fetch')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/token',async (req,res)=>{
    
    const clientId = "6bec7995-9312-4fca-a5e5-6d9d7c04211c"
    const clientSecret = "rW_%e]<L<Yz/mz5#78!Q(q*d:An*O)ul9hPeIOPJ"
    const response = await axios({
        method: 'post',
        url: 'https://services.sentinel-hub.com/oauth/token',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: `grant_type=client_credentials&client_id=${encodeURIComponent(
          clientId,
        )}&client_secret=${encodeURIComponent(clientSecret)}`,
      });
     console.log(response.data.access_token);
})


// const instance = axios.create({
//   baseURL: "https://services.sentinel-hub.com"
// })

// const config = {
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
//   }
// }

// const body = qs.stringify({
//   client_id,
//   client_secret,
//   grant_type: "client_credentials"
// })


// // All requests using this instance will have an access token automatically added
// instance.post("/oauth/token", body, config).then(resp => {
//   Object.assign(instance.defaults, {headers: {authorization: `Bearer ${resp.data.access_token}`}})
// })



app.listen(3000,()=> console.log('connected'))

curl -X POST \
  https://services.sentinel-hub.com/api/v1/process \
  -H 'Authorization: Bearer eyJraWQiOiJzaCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIyMDA1ZTZhMi1lOGZkLTQ3ZjItYjQzOC1lOGI1ZGFhMzJjMjUiLCJhdWQiOiI2YmVjNzk5NS05MzEyLTRmY2EtYTVlNS02ZDlkN2MwNDIxMWMiLCJqdGkiOiJkNTU4NjgzNS04ZjIyLTQ3MGMtYThlNi03NWE3MWY2ZjA2OWMiLCJleHAiOjE2MjkwMjIwMzQsIm5hbWUiOiJIYW1pZGUgQWxhZWUiLCJlbWFpbCI6ImhhbWlkZWhhbGFlZXlhc2FyQGdtYWlsLmNvbSIsImdpdmVuX25hbWUiOiJIYW1pZGUiLCJmYW1pbHlfbmFtZSI6IkFsYWVlIiwic2lkIjoiOGE0YTIxZTEtYzg0MC00ZWYyLThhMDEtYmU0YjY2ODlkM2ViIiwiZGlkIjoxLCJhaWQiOiIwNTliNmNhYS0zOTFjLTQ0NDAtOWY1OS1iOTNmYjA0MDY4NWIiLCJkIjp7IjEiOnsicmEiOnsicmFnIjoxfSwidCI6MTEwMDB9fX0.BEfmtnV3VJS9mOLXZkXOFU4V-H-vlAd7vZbuJmzCy2azYscV0Jo2PmJ3pF0h_MjLzQUe2W2qXX4jxkMH9nhLIAJVJ7ZP30SCuSHIKAfcUsfDBxD2hzAq0Xt5XBZg4V9tWtydRiJM8IbbEkZ1SyRtdFRDDg-s0MfMSLjEzJ4yf5cMzbIqYYgOkdNNnxYa6BGXxpbhk8_DBSJHAd8RG4e8mC43Ko5tmfDhn3p1-nMXneOm_GEOKjVGnf8UWGxwyQ4en5w1kVwQhelsi_v6Csl1K0yIqtz-905tNtvvSpzouN0fukkIQD8Og0Ba7iAFvZ4ULkTeEzMp0Z7hbUIYe6w90Q' \
  -F 'request={
    "input": {
        "bounds": {
            "properties": {
                "crs": "http://www.opengis.net/def/crs/OGC/1.3/CRS84"
            },
            "bbox": [
                13.822174072265625,
                45.85080395917834,
                14.55963134765625,
                46.29191774991382
            ]
        },
        "data": [
            {
                "type": "sentinel-2-l1c",
                "dataFilter": {
                    "timeRange": {
                        "from": "2018-10-01T00:00:00Z",
                        "to": "2018-12-31T00:00:00Z"
                    }
                }
            }
        ]
    },
    "output": {
        "width": 512,
        "height": 512
    }
}' \
  -F 'evalscript=//VERSION=3

function setup() {
  return {
    input: ["B02", "B03", "B04"],
    output: { 
      bands: 3,
      sampleType: "AUTO" // default value - scales the output values from [0,1] to [0,255].   
     }
  }
}

function evaluatePixel(sample) {
  return [2.5 * sample.B04, 2.5 * sample.B03, 2.5 * sample.B02]
}'
