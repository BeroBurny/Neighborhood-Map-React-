import * as React from 'react';
import styled from 'react-emotion';
import { MdLocationOn } from 'react-icons/lib/md';

interface PinProps {
  size: number;
}

const Pin = styled(MdLocationOn)`
  cursor: pointer;
  fill: #dd4918;
  stroke: none;
  font-size: ${(props: PinProps) => `${props.size}px`};
  filter: drop-shadow(0 -4px 5px #7a7274);
`;

interface Props {
  size?: number;
  onClick: () => void;
}

const MapPin: React.StatelessComponent<Props> = ({ size = 25, onClick }) => (
  <Pin
    onClick={onClick}
    size={size}
    style={{ transform: `translate(${-size / 2}px,${-size}px)` }}
  />
);

export default MapPin;
