import { MapItemType } from '@/lib/graphcms';

export interface ViewportProps {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface SelectedMarkerProps {
  title: string;
  link: string | null;
}

export interface MapboxProps {
  initial: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  mapitems: MapItemType[];
}

export interface MarkerProps {
  latitude: number;
  longitude: number;
  name: string;
  link: string | null;
}
