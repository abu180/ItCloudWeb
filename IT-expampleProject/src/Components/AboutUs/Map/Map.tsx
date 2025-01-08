import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  className: string;
}

const geoUrl =
  "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

const Map: React.FC<AnimatedTextProps> = ({ className }) => {
  const locations = [
    { latitude: 41.3784, longitude: 2.1915, zoom: 3000, duration: 1500, name: "Barcelona" },
    { latitude: 42.8125, longitude: -1.6458, zoom: 3500, duration: 1500, name: "Pamplona" },
    { latitude: 38.5698, longitude: -8.9026, zoom: 3500, duration: 1500, name: "Palmela" },
    { latitude: 51.9864, longitude: 10.7865, zoom: 3000, duration: 1500, name: "Wolfsburg" },
    { latitude: 52.4064, longitude: 16.9252, zoom: 3000, duration: 1500, name: "Poznan" },
    { latitude: 53.0138, longitude: 18.5984, zoom: 3000, duration: 1500, name: "Torun" },
    { latitude: 48.1486, longitude: 17.1077, zoom: 3000, duration: 1500, name: "Bratislava" },
    { latitude: 47.6875, longitude: 17.6504, zoom: 3000, duration: 1500, name: "Gyor" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [mapCoords, setMapCoords] = useState(locations[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % locations.length;
        setMapCoords(locations[nextIndex]);
        return nextIndex;
      });
    }, locations[currentIndex].duration);

    return () => clearInterval(interval);
  }, [currentIndex, locations]);

  return (
    <div>
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ width: "100%", height: "550px" }}
      >
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: mapCoords.zoom,
            center: [mapCoords.longitude, mapCoords.latitude],
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: { fill: "#D6D6DA", outline: "none" },
                    hover: { fill: "#A8A8A8", outline: "none" },
                    pressed: { fill: "#D9D6DA", outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          <Marker coordinates={[mapCoords.longitude, mapCoords.latitude]}>
            <motion.circle
              r={10}
              fill="#436781"
              animate={{ scale: [0.8, 1.2, 1] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.text
              textAnchor="middle"
              y={-20}
              style={{
                fontFamily: "Arial",
                fontWeight:"bold",
                fill: "#436781",
                fontSize: 25,
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {mapCoords.name}
            </motion.text>
          </Marker>
        </ComposableMap>
      </motion.div>
    </div>
  );
};

export default Map;
