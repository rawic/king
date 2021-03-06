import React from 'react'

import {
  StyledTransactionElement,
  StyledTransactionHeader,
  StyledTransactionWrapper
} from './Transaction.styles'

const SkeletonTransaction = () => (
  <StyledTransactionWrapper>
    <StyledTransactionHeader>
      <StyledTransactionElement $circle $right="1.6rem" />
      <div>
        <StyledTransactionElement $width="17rem" />
        <StyledTransactionElement $width="6.5rem" $height="1.8rem" $top="0.2rem" />
      </div>
    </StyledTransactionHeader>

    <StyledTransactionElement $height="3.4rem" $width="9.5rem" $radius="1.2rem" />
    <StyledTransactionElement $width="7rem" />
    <StyledTransactionElement $width="8.5rem" />
    <StyledTransactionElement $width="1.5rem" $height="1.5rem" />
  </StyledTransactionWrapper>
)

export default SkeletonTransaction
