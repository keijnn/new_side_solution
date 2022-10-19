//import modules
import clsx from 'clsx'
import React from 'react'

interface UsePaginationProps {
  nPages: number
  currentPage: number
  setCurrentPage: (page: number) => void
  data: string[]
}

export const Pagination = ({
  nPages,
  currentPage,
  setCurrentPage,
}: UsePaginationProps) => {
  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1)
  }
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1)
  }

  const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

  return (
    <div className='text-md flex mt-3'>
      <div className='page-item'>
        <p className='cursor-pointer' onClick={prevPage}>
          Previous
        </p>
      </div>
      {pageNumbers.map((pgNumber) => (
        <div
          key={pgNumber}
          className={clsx({
            ['text-blue']: currentPage === pgNumber,
          })}
        >
          <p onClick={() => setCurrentPage(pgNumber)} className='mx-3'>
            {pgNumber}
          </p>
        </div>
      ))}
      <p className='cursor-pointer' onClick={nextPage}>
        Next
      </p>
    </div>
  )
}
