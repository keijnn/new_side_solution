interface SentenceProps {
  sentence: string
}

export const Sentence = ({ sentence }: SentenceProps) => (
  <p className='text-blue p-1 rounded-md bg-slate-500 cursor-pointer'>
    {sentence}
  </p>
)
