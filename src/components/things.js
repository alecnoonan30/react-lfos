import React from 'react';
import Cards from './Cards';
import data from '../tinybackend/Data';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Things() {
    return (
        <div className="container-fluid">
          <div className="container py-4">
          <p className="thingsinfo2">Click any item for more information</p>
            <div className="row pt-5 d-flex justify-content-center">
              {data.work.map((item, index) => {
                return (
                  <Cards href={item.href} img={item.img} title={item.title} desc={item.desc} />
                )
              })} 
            </div>
          </div>
        </div> 
    )
}
