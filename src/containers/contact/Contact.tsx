import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';
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
      .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
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
    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
      <div className="ml-[55px] container contact-page w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]">
        <div className="text-zone">
          <span className="tags top-tags gradient__text ml-8">&lt;body&gt;</span>
          <h1>
            <AnimatedLetters
              id="contactUs"
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'U', 's']}
              idx={15}
            />
          </h1>
          <p className="subtext">
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
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
          <span className="tags bottom-tags gradient__text ml-8">
            &lt;/body&gt;
            <br />
            <span className="bottom-tag-html gradient__text">&lt;/html&gt;</span>
          </span>
        </div>
      </div>
      <div className="w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] flex">
        {/* <div className="info-map">
          Slobodan Gajić,
          <br />
          Serbia,
          <br />
          Branka RadiČevića 19, 22000 <br />
          Sremska Mitrovica <br />
          <br />
          <span>freelancerslobodan@gmail.com</span>
        </div> */}
        <div className="map-wrap w-[82%] m-auto mt-8 md:mt-auto lg:mt-auto xl:mt-auto 2xl:mt-auto">
          <MapContainer center={[32.7157, -117.1611]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[32.7157, 117.1611]}>
              <Popup>AtmoWaste Headquearters, come see what we are doing!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      {/* <Loader type="pacman" active/> */}
    </div>
  )
}

export default Contact