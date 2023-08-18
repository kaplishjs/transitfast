import React from "react"
import Link from 'next/link'

const SearchOption = () =>{
    return(
        <section className="searcg_filter_wrapper section_margin">
        <div className="container">
              <div className="card">
                    <div className="card-body">
                    <input type="text" className="form-control" id="" placeholder="Postcode"/>
                    <select className="form-select form-control" aria-label="Default select example">
                    <option selected>National</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <select className="form-select form-control" aria-label="Default select example">
                    <option selected>Make</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>

                  <select className="form-select form-control" aria-label="Default select example">
                    <option selected>Model</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  
                  <div className="d-flex gap-3">
                  <Link href = "/filter-search" className="btn btn-danger">Search 400 cars</Link>
                  <button className="btn btn-link fc_primary">More Options</button>
                  </div>
                    </div>
              </div>
        </div>
    </section>
    )
}

export default SearchOption