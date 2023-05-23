import { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './contact.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef<HTMLFormElement>(null!);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e: any) => {
    e.preventDefault()

    emailjs
      .sendForm('service_7tmwh4g', 'template_alac4wk', form.current, 'b6TJmQrjbqUmxIZnF')
      .then(
        () => {
          alert('Message successfully sent!')
          // window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <section className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row pt-8 relative">
      <div className="mx-auto container contact-page w-[90%] md:w-[90%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%]">
        <div className="text-zone">
          <h1 className="gradient__text text-4xl py-6">
            Lets start a conversation about your climate goals
          </h1>
          <p className="subtext">
            For any press related questions, please email <a>jeremy@atmowaste.com</a>
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
          {/* <IconSlider /> */}
        </div>
      </div>
    </section>
  )
}

export default Contact