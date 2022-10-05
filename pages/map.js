import dynamic from 'next/dynamic';
import useSWR from 'swr'

// server side redering false로 설정
const MapChart = dynamic(() => import('../components/charts/map'), {
  ssr: false,
})

const BarChart = dynamic(() => import('../components/charts/bar'), {
  ssr: false,
})

function Map() {
  /// TODO: 밖으로 빼도록
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR('/api/university', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return(
    <div>
    <MapChart data={data} />
  </div>
  )

}

export default Map