import { Callout } from '@radix-ui/themes'
import React, {PropsWithChildren, ReactNode} from 'react'

interface Props {
    children: ReactNode
}

const ErrorMessage = ({children}: PropsWithChildren) => {
    if(!children) return null;
  return (
    <Callout.Root color='red' size="1" variant='soft'>
        <Callout.Text>{children}</Callout.Text>
    </Callout.Root>
  )
}

export default ErrorMessage