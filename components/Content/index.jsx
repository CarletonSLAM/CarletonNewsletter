import React from 'react'
import Link from '../Link'
import Button from '../Button'
import theme from '../../models/theme'

const Content = ({ tag, children, attr }) => {
  switch (tag) {
    case 'htmlString': return <div dangerouslySetInnerHTML={{ __html: children}}></div>
    case 'a': return (<p><Link attr={attr}>{children}</Link></p>)
    case 'button': return (<p><Button attr={attr}>{children}</Button></p>)
    default: 
      const CustomTag = tag;
      return <CustomTag {...attr}>{children}</CustomTag>
  }
}

const styles = {
  links: {
    color: theme.primary
  }
}

module.exports = Content