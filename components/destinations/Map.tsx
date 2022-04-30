import ReactMapGL, { Marker } from 'react-map-gl';
import { useState, useMemo } from 'react';
import { MapboxProps, MarkerProps } from '@/components/destinations/MapboxTypes';
import { SelectedMarkerProps, ViewportProps } from '@/components/destinations/MapboxTypes';

const MapBox = ({ initial, mapitems }: MapboxProps) => {
  const [viewport, setViewport] = useState<ViewportProps>({
    latitude: initial.latitude,
    longitude: initial.longitude,
    zoom: initial.zoom,
  });

  const [selected, setSelected] = useState<SelectedMarkerProps>({ title: '', link: null });

  const CustomMarker = ({ latitude, longitude, name, link }: MarkerProps) => {
    const [isActive, setIsActive] = useState(false);

    return (
      <Marker onClick={() => setIsActive(!isActive)} latitude={latitude} longitude={longitude}>
        <MapPin latitude={latitude} longitude={longitude} name={name} link={link} />
      </Marker>
    );
  };

  const MapPin = ({ latitude, longitude, name, link }: MarkerProps) => (
    <button
      type='button'
      className='destination__button'
      aria-label={`${name} marker`}
      title={`${name} marker`}
      onClick={() => {
        setViewport({
          latitude: latitude,
          longitude: longitude,
          zoom: 16,
        });
        setSelected({ title: name, link: link });
      }}>
      <svg
        className='destination__pin'
        xmlns='http://www.w3.org/2000/svg'
        height='100%'
        viewBox='0 0 24 24'
        width='100%'
        fill='#ff7f00'>
        <path d='M0 0h24v24H0z' fill='none' />
        <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
      </svg>
    </button>
  );

  const InformationGUI = () => (
    <div className='destination__information'>
      <span className='destination__place--name'>{selected.title}</span>
      {selected.link && (
        <a
          target='_blank'
          rel='noreferrer noopener external nofollow'
          href={selected.link}
          className='destination__place--site'>
          Visit Site
        </a>
      )}
    </div>
  );

  const MemoizedMarkers = useMemo(() => {
    return mapitems.map((item) => (
      <CustomMarker
        key={item.id}
        latitude={item.coordinate.latitude}
        longitude={item.coordinate.longitude}
        name={item.name}
        link={item.link}
      />
    ));
  }, [mapitems, CustomMarker]);

  return (
    <ReactMapGL
      {...viewport}
      mapStyle='mapbox://styles/mapbox/streets-v11'
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY as string}
      onMove={({ viewState }) => setViewport(viewState)}>
      {MemoizedMarkers}
      <InformationGUI />
    </ReactMapGL>
  );
};

export default MapBox;
