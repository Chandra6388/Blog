import React from 'react'

const page = ({params}) => {
  return (
    <>
    <div>this is the constsct page</div>
    <div>contact-slug: {params.contact_slug}</div>
    </>
  )
}

export default page