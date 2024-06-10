import React, { useEffect } from 'react';
import DrawList from '@/components/DrawList'; // Ensure this is the correct import path for DrawList
import Map from '@/components/Map';
import Info from '@/components/Info';

const DataMap: React.FC = () => {
    const coordinates = [
        { name: "Dongdaemun-gu", id: { lat: 37.5744, lng: 127.0395 } },
        { name: "Dobong-gu", id: { lat: 37.6688, lng: 127.0471 } },
        { name: "Yongsan-gu", id: { lat: 37.5323, lng: 126.9900 } }
    ];

    const [currIndex, setCurrIndex] = React.useState(0);
    const [coords, setCoords] = React.useState(coordinates[0].id);
    const [key, setKey] = React.useState(0);

    const nextCoords = () => {
        setCurrIndex(prevIndex => (prevIndex + 1) % coordinates.length);
        setKey(prevKey => prevKey + 1);
    };

    const handleSelectLocation = (index: number) => {
        setCurrIndex(index);
        setKey(prevKey => prevKey + 1);
    };

    useEffect(() => {
        setCoords(coordinates[currIndex].id);
    }, [currIndex, coordinates]);

    return (
        <div className="flex flex-col h-screen">
            <div className="flex h-16 items-center p-8 backdrop-brightness-75">
                <DrawList locations={coordinates} onSelectLocation={handleSelectLocation} />
                <div className="pl-3">
                    25 districts
                </div>
            </div>
            <div className="flex h-screen">
                <div className="flex justify-center items-center w-2/5">
                    <div className="text-center">
                        <Info data={{ name: coordinates[currIndex].name }} />
                        <button className='hover:text-purple-300' onClick={nextCoords}>next place</button> {/* Button to cycle to next place */}
                    </div>
                </div>
                <div className="w-3/5 invert text-center content-center">
                    <Map coordinates={coordinates[currIndex].id} />
                </div>
            </div>
        </div>
    );
};

export default DataMap;
