import React from 'react'

export default function Spinner() {
  return (
    <>
        <div className="container text-center">
          <button className="btn btn-primary mx-2" type="button" disabled>
          <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
          <span className="visually-hidden">Loading...</span>
          </button>
          <button className="btn btn-primary" type="button" disabled>
            <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            Loading...
          </button>
        </div>
    </>
  )
}
