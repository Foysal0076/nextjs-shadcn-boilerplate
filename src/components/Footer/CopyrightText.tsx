import { HtmlHTMLAttributes } from 'react'

type Props = HtmlHTMLAttributes<HTMLParagraphElement> & { productName?: string }

const CopyrightText = ({ productName = '', className, ...props }: Props) => {
  const year = new Date().getFullYear()
  return (
    <p
      data-testid='copyright-text'
      className={`${className ?? ''} flex items-center text-xs`}
      {...props}>
      {productName} © {year}. All rights reserved.
    </p>
  )
}

export default CopyrightText
