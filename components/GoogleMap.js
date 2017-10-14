// @flow
import * as React from 'react';
import styled from 'react-emotion';

const MapContainer = styled.div(() => ({
  position: 'relative',
  display: 'block',
  width: '100%',
  padding: '0',
  overflow: 'hidden',
  paddingBottom: '50vh'
}));

const MapFrame = styled.iframe(
  () => ({
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '50vh',
    border: '0'
  }),
);

const GoogleMap = ({query}: { query: string }) => (
  <MapContainer>
    <MapFrame
      title={`Google map ${query}`}
      src={query}
      allowFullScreen
    />
  </MapContainer>
);

export default GoogleMap;
