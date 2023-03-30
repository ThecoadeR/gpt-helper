import LoadingBox from '@/components/Primitives/LoadingBox'
import {Box} from '@/components/Primitives/Box'
import { PromptItem } from '@/types'
import Link from 'next/link'
const PromptItem = () => {
  return <Box></Box>
}
const PromptList = () => {
  const loading = false;
  const prompts: PromptItem[] = [

  ]
  return (
  <LoadingBox loading={loading}>
    {prompts.map(item => (<Box key={item.id}>{item.name}</Box>))}
  </LoadingBox>
  )
}

export default PromptList