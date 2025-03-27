import Link from 'next/link'
import React from 'react'

const Contact = () => {
    return (
        <>
            <main>Contact</main>
            <main>
                <ul>
                    <li><Link href={`/contact/contact-details/constact-1`}> Contact 1 </Link></li>
                    <li><Link href={`/contact/contact-details/constact-2`}> Contact 2 </Link></li>
                    <li><Link href={`/contact/contact-details/constact-3`}> Contact 3 </Link></li>
                    <li><Link href={`/contact/contact-details/constact-4`}> Contact 4 </Link></li>
                    <li><Link href={`/contact/contact-details/constact-5`}> Contact 5 </Link></li>
                    <li><Link href={`/contact/contact-details/constact-6`}> Contact 6 </Link></li>
                    <li><Link href={`/contact/contact-details/constact-7`}> Contact 7 </Link></li>
                </ul>
            </main>


        </>
    )
}

export default Contact