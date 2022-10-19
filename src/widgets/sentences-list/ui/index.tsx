//import modules
import React from 'react'

//import entities
import { Sentence } from '@/entities/sentence'
import { Pagination } from '@/entities/pagination'

//import shared
import { getParagraphs } from '@/shared/api/paragraphs'
import { Button } from '@/shared/ui/button'
import { Link } from '@/shared/ui/link'

export const SentencesList = () => {
  const [paragraphs, setParagraphs] = React.useState<string[]>()

  const [currentPage, setCurrentPage] = React.useState<number>(1)

  const [recordsPerPage] = React.useState<number>(5)

  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage

  const currentRecords = paragraphs
    ? paragraphs.slice(indexOfFirstRecord, indexOfLastRecord)
    : []

  const nPages = Math.ceil(paragraphs ? paragraphs.length / recordsPerPage : 0)

  React.useEffect(() => {
    getParagraphs().then((data) => setParagraphs(data))
  }, [])

  const sentencesList = currentRecords?.map((el, i) => (
    <div key={i} className='flex mt-3 text-2xl items-center'>
      <Link url={`paragraph/${el}`}>
        <Sentence sentence={el.split('.')[0]} />
      </Link>
    </div>
  ))

  if (!sentencesList) {
    return (
      <div className='bg-[wheat] h-full flex items-center justify-center'>
        Loading...
      </div>
    )
  }
  return (
    <div className='bg-[wheat] h-full flex flex-col items-center justify-center'>
      {sentencesList}
      <Button
        onClick={() => {
          getParagraphs().then((data) =>
            setParagraphs((state) => state?.concat(data))
          )
          setCurrentPage(nPages + 1)
        }}
        className='mt-3'
        label='Load new sentences'
      />
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        data={paragraphs ? paragraphs : []}
      />
    </div>
  )
}
