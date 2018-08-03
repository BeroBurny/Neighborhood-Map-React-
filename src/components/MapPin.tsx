import * as React from 'react';
import styled from 'react-emotion';
import { MdLocationOn } from 'react-icons/lib/md';

interface PinProps {
  size: number;
  selected: boolean;
}

const Pin = styled(MdLocationOn)`
  cursor: pointer;
  fill: ${(props: PinProps) => props.selected ? '#0fff4f' : '#dd4918'};
  stroke: none;
  font-size: ${(props: PinProps) => `${props.size}px`};
  filter: drop-shadow(0 -4px 5px #7a7274);
  transition: fill 0.5s ease-in;
`;

interface Props {
  size?: number;
  selected?: boolean;
  onClick: () => void;
}

const MapPin: React.StatelessComponent<Props> = ({ size = 25, onClick, selected = false }) => (
  <Pin
    onClick={onClick}
    size={size}
    selected={selected}
    style={{ transform: `translate(${-size / 2}px,${-size}px)` }}
  />
);

export default MapPin;
