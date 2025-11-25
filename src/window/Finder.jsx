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
    //const renderList = (name, items) => (
      //  <div>
        //    <h3>{name}</h3>
          //  <ul>
            //{items.map((item) => (
              //  <li
                //key={item.id}
                //onClick={() => setActiveLocation(item)}
                //className={clsx(item.id === activeLocation.id ? "active" : "not-active")}
                //>
                //<img src={item.icon} alt={item.name} className="w-4" />
                //<p className="text-sm font-medium truncate">{item.name}</p>
                //</li>
            //))}
            //</ul>
        //</div>
    //);

const renderList = (name, items, activeLocation, setActiveLocation) => (
  <div className="space-y-2">
    <h3 className="text-xs font-semibold text-gray-500 uppercase">{name}</h3>

    <ul className="space-y-1">
      {items.map((item) => (
        <li
          key={item.id}
          onClick={() => setActiveLocation(item)}
          className={clsx(
            "flex items-center gap-2 px-2 py-1 rounded cursor-pointer transition",
            item.id === activeLocation.id
              ? "active bg-gray-200 font-semibold"
              : "not-active hover:bg-gray-100"
          )}
        >
          <img src={item.icon} alt={item.name} className="w-4 h-4" />

          <p className="text-sm truncate">{item.name}</p>
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
            {renderList("Favorites",Object.values(locations), activeLocation, setActiveLocation)}
            {renderList("Work",locations.work.children, activeLocation, setActiveLocation)}
        </div>
      <ul className='content'>
            <div className="w-full h-full grid grid-cols-3 gap-12 content-start items-start justify-items-center">
                {activeLocation.children.map((item) => (
                    <div key={item.id} className="flex flex-col items-center w-40">
                    <img src={item.icon} alt={item.name} className="w-20" />
                    <p className="text-center mt-3 text-sm font-medium leading-tight">
                        {item.name}
                    </p>
                    </div>
                ))}
            </div>
      </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;
