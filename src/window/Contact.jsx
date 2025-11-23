import WindowControls from "#components/WindowControls"
import { socials } from "#constants"
import WindowWrapper from "#hoc/WindowWrapper"

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls  target="contact" />
        <h2>Contact ME</h2>
      </div>

      <div className="p-5 space-y-5">
        <img src="/images/adrian.jpg" alt="adrian" className="w-20 rounded-full"/>
        <h3>let's Connect</h3>
        <p>Got an idea? contact me</p>
        <ul>
            {socials.map(({id, bg, link, icon, text})=>(
                <li key={id} style={{background: bg}}>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={text}                    >
                        <img src={icon} alt={text} className="size-5" />
                        <p>{text}</p>
                    </a>
                </li>
            ))}
        </ul>
      </div>
    </>
  )
}

const ContactWindow = WindowWrapper(Contact, "contact")
export default ContactWindow
