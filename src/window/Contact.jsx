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
{/* Profile Section */}
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
  <div className="flex flex-col md:flex-row">
    <div className="md:w-2/5">
      <img 
        src="/images/yassinr_prfl.png" 
        alt="Yassin Raggad - Photographer & Video Editor" 
        className="w-full h-64 md:h-full object-cover"
      />
    </div>
    
    <div className="md:w-3/5 p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Let's Tell Your Story</h3>
      <p className="text-gray-600 leading-relaxed mb-4">
        Every picture and every frame has a story. If you have a concept you're passionate about, 
        I have the skills to bring it to life.
      </p>
      <p className="text-gray-700 font-medium">
        Get in touch, and let's make something incredible together.
      </p>
    </div>
  </div>
</div>
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
