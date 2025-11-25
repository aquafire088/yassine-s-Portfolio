import { locations } from '#constants'
import useLocationStore from '#store/location'
import useWindowStore from '#store/window'
import { useGSAP } from '@gsap/react'
import clsx from 'clsx'
import { Draggable } from 'gsap/Draggable'



const projects = locations.work.children ?? []

const Home = () => {
    const {openWindow}= useWindowStore();
    const {setActiveLocation} = useLocationStore();

    const handleOpenProjects = (projects)=>{
        setActiveLocation(projects)
        openWindow("finder")
    }
    useGSAP(()=>{
        Draggable.create('.folder');
    }, [])
  return <section id='home'>
    <ul>
        {projects.map((projects)=>(
            <li 
                key={projects.id} 
                className={clsx("group folder", projects.windowPosition)}
                onClick={()=>handleOpenProjects(projects)}>
                <img src="/images/folder.png" alt={projects.name} />
                <p>{projects.name}</p>
            </li>
        ))}
    </ul>
  </section>
}

export default Home