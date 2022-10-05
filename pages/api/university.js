
async function fetchData(country) {
    var str = country.query.replace(/ /g, '+')
    const response = await fetch(`http://universities.hipolabs.com/search?country=${str}`)
    const result = await response.json()
    return {
        id: country.id,
        name: country.name,
        value: result.length
    }
}

export default async function handler(req, res) {
    let countries = [
        {
            id: 'KR',
            name: 'Korea',
            query : 'Korea, Republic of'
        },
        {
            id: 'US',
            name: 'United States',
            query : 'United States'
        },
        {
            id: 'CA',
            name: 'Canada',
            query : 'Canada'
        },
        {
            id: 'JP',
            name: 'Japan',
            query : 'Japan'
        },
        {
            id: 'CN',
            name: 'China',
            query : 'China'
        },
        {
            id: 'RU',
            name: 'Russia',
            query : 'Russian Federation'
        },
    ]

    let requests = countries.map(country => fetchData(country))
    Promise.all(requests).then(responses => {
        responses.forEach((response) => {
            console.log(response)
        })
        return res.status(200).json(responses);
    });

  }
