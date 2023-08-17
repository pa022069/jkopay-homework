import { memo } from 'react'
import { Wrapper } from './style'
function PageLoading() {
  return (
    <Wrapper>
      <p>PageLoading</p>
    </Wrapper>
  )
}


export default memo(PageLoading)