function University({ data }) {
  // {
  //   country: 'United States',
  //   web_pages: [ 'http://www.sdcc.edu/' ],
  //   name: 'San Diego Christian College',
  //   'state-province': null,
  //   alpha_two_code: 'US',
  //   domains: [ 'sdcc.edu' ]
  // },
  let count = data.length
    return(
        <div>
            {data.json}
        </div>
    )
  }

  // This gets called on every request
  export async function getServerSideProps() {
    let country = ['Korea, Republic of', 'United States', 'Canada', 'Japan', 'China', 'United Kingdom', 'India']
    // Fetch data from external API

    const res = await fetch(`http://universities.hipolabs.com/search?country=United+States`)
    const data = await res.json()
    console.log(data)
    // Pass data to the page via props
    return { props: { data } }
  }

  export default University