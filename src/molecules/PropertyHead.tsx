import React from 'react';
import { IProperty } from '../interfaces';

type PropertyHeadProps = {
  property: IProperty;
};

const PropertyHead = ({ property }: PropertyHeadProps) => {
  return (
    <div className="media property-head border-secondary border-bottom-1 mb-3">
      <img src={property.images[0]} width={100} className="align-self-end mr-3" alt="..." />
      <div className="media-body">
        <h5 className="mt-0">{`${property.location} - ${property.size}m²`}</h5>
        <small>{property.address}</small>
        <p>{property.description}</p>
      </div>
    </div>
  );
};

export default PropertyHead;
