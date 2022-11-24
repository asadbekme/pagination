import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './Countries'
import Pagination from './Pagination'

const App = () => {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPerPage] = useState(10)

  const getCountries = async () => {
    setLoading(true)
    const response = await axios.get('https://restcountries.com/v3.1/all')
    console.log(response.data)
    setCountries(response.data)
    setLoading(false) 
  }

  useEffect(() => {
    getCountries()
  }, [])

  const lastCountryIndex = currentPage * countriesPerPage
  const firtsCountryIndex = lastCountryIndex - countriesPerPage
  const currentCountries = countries.slice(firtsCountryIndex, lastCountryIndex)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1)
  }

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1)
  }

  return (
    <div className='container mt-4'>
      <h1 className='text-primary text-center my-3'>Countries</h1>
      <Countries countries={currentCountries} loading={loading} />
      <Pagination 
        currentPerPage={countriesPerPage} 
        totalCountries={countries.length} 
        paginate={paginate}
      />
      <button className="btn btn-primary" onClick={prevPage}>Prev Page</button>
      <button className="btn btn-primary ms-2" onClick={nextPage}>Next Page</button>
    </div>
  )
}

export default App