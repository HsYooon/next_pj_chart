import dynamic from 'next/dynamic';

// server side redering false로 설정
const MapChart = dynamic(() => import('../components/charts/map'), {
  ssr: false,
})

const BarChart = dynamic(() => import('../components/charts/bar'), {
  ssr: false,
})

function Map() {
  let data = [
    {
      id: "US",
      name: "United States",
      value: 100
    }, {
      id: "GB",
      name: "United Kingdom",
      value: 100
    }, {
      id: "CN",
      name: "China",
      value: 100
    }, {
      id: "IN",
      name: "India",
      value: 100
    }, {
      id: "AU",
      name: "Australia",
      value: 100
    }, {
      id: "CA",
      name: "Canada",
      value: 100
    }, {
      id: "BR",
      name: "Brasil",
      value: 100
    }, {
      id: "ZA",
      name: "South Africa",
      value: 100
    }
  ];
  return <div>
    <BarChart />
    <MapChart data={data} />
  </div>;

}

export default Map