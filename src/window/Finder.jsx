import WindowControls from '#components/WindowControls';
import WindowWrapper from '#hoc/WindowWrapper';
import { locations } from '#constants';
import { Search } from 'lucide-react';
import React from 'react';
import useLocationStore from '#store/location';
import clsx from 'clsx';
import useWindowStore from '#store/window';

const Finder = () => {
    const { activeLocation, setActiveLocation } = useLocationStore();
    const {openWindow} = useWindowStore();
    const openItem = (item) => {
      if (item.fileType === "pdf") return openWindow("resume");
      if (item.kind === "folder") return setActiveLocation(item);
      // open text files in the text window and images in the image window
      if (item.fileType === "txt") return openWindow("txtfile", item);
      if (item.fileType === "img") return openWindow("imgfile", item);
      if (["fig", "url"].includes(item.fileType) && item.href)
        return window.open(item.href, "_blank");
    };
    const renderList = (name, items) => (
        <div>
            <h3>{name}</h3>
            <ul>
            {items.map((item) => (
                <li
                key={item.id}
                onClick={() => setActiveLocation(item)}
                className={clsx(item.id === activeLocation.id ? "active" : "not-active")}
                >
                <img src={item.icon} alt={item.name} className="w-4" />
                <p className="text-sm font-medium truncate">{item.name}</p>
                </li>
            ))}
            </ul>
        </div>
    );


  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
            {renderList("Favorites",Object.values(locations))}
            {renderList("Work",locations.work.children)}
        </div>
      <ul className='content'>
            {activeLocation.children.map((item) => (
                <li
                   key={item.id}
                   className={item.position}
                   onClick={()=>openItem(item)} >
                    <img src={item.icon} alt={item.name} />
                    <p>{item.name}</p>
                </li>
            ))}
      </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;
