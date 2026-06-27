import { useEffect, useRef } from 'react';
import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
import { Coordinates } from '../types';

interface RouteDisplayProps {
  origin: Coordinates;
  destination: Coordinates;
  travelMode?: 'DRIVING' | 'WALKING' | 'BICYCLING' | 'TRANSIT';
  onRouteCalculated?: (distance: string, duration: string) => void;
}

export default function RouteDisplay({
  origin,
  destination,
  travelMode = 'TRANSIT',
  onRouteCalculated
}: RouteDisplayProps) {
  const map = useMap();
  const routesLib = useMapsLibrary('routes');
  const polylinesRef = useRef<google.maps.Polyline[]>([]);

  useEffect(() => {
    if (!routesLib || !map || !origin || !destination) return;

    // Clear previous route
    polylinesRef.current.forEach(p => p.setMap(null));
    polylinesRef.current = [];

    // Formulate inputs according to latest Routes API JS SDK spec
    const request: any = {
      origin: { lat: origin.lat, lng: origin.lng },
      destination: { lat: destination.lat, lng: destination.lng },
      travelMode: travelMode,
      fields: ['path', 'distanceMeters', 'durationMillis', 'viewport'],
    };

    routesLib.Route.computeRoutes(request)
      .then(({ routes }) => {
        if (routes?.[0]) {
          const route = routes[0];
          const newPolylines = route.createPolylines();
          
          newPolylines.forEach(p => {
            p.setOptions({
              strokeColor: travelMode === 'WALKING' ? '#10B981' : '#3B82F6',
              strokeOpacity: 0.8,
              strokeWeight: 6,
            });
            p.setMap(map);
          });
          polylinesRef.current = newPolylines;

          // Adjust viewport to fit the route nicely
          if (route.viewport) {
            map.fitBounds(route.viewport);
          }

          // Format results and send back to parent
          if (onRouteCalculated) {
            const distanceKm = (route.distanceMeters / 1000).toFixed(1);
            const durationMin = Math.round(route.durationMillis / 60000);
            onRouteCalculated(`${distanceKm} 公里`, `${durationMin} 分鐘`);
          }
        }
      })
      .catch(err => {
        console.error('Error computing routes:', err);
      });

    return () => {
      polylinesRef.current.forEach(p => p.setMap(null));
    };
  }, [routesLib, map, origin.lat, origin.lng, destination.lat, destination.lng, travelMode, onRouteCalculated]);

  return null;
}
