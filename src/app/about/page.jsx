"use client";
import React , {useState , useEffect} from 'react'
import image from '@/img/bgimg.jpeg';
import Image from 'next/image'

const About = () => {
    const [counter , setCounter] = useState(0);

    


    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prev => prev + 1);
        }, 1000);
    
        return () => {
            clearInterval(interval); // Cleanup on unmount
        };
    }, []);
    

    
  return (
    <main>
        <div>About</div>
        {/* <div style={{width: 500, height: 500, position: 'relative'}}>about cp

        <Image src={image.src} alt="cp" fill />
        </div> */}
        {/* <img src={image.src} alt="cp" /> */}

        {/* <Image src="https://images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg" alt="cp" width={500} height={500} /> */}
        <button>counter : {counter}</button>

    </main>
  )
}

export default About