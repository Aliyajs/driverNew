import  {React}  from 'react';
import { dc } from '../../database/database';
import css from './contacts.module.scss';
import { YMaps, Map, Placemark  } from 'react-yandex-maps';


export default function Contacts (){
    const mapData = {
        center: [42.8774095, 74.5920424],
        zoom: 15,
    };
    
    const coordinates = [
      [42.8774095, 74.5920424]
    ];

    return(
        <div className={css.contact}>
          <div className={css.commant}>
              <div className={css.maps}>
                <YMaps>
                  <div>
                    <Map className={css.map} defaultState={mapData}>{coordinates.map(coordinate => <Placemark geometry={coordinate} />)}</Map>
                  </div>
                </YMaps>
              </div>
              <div className={css.right}>
                  <p className={css.title}>Контакты</p>
                  <div className={css.icons}>
                      <img className={css.call} src="/img/call.svg" alt="" />
                      {/* {Object.keys(dc).map(key =>(<p className={css.text} key={key}>{dc[key]}</p>))} */}
                      <p className={css.text}>{dc.number}</p>
                  </div>
                  <div className={css.icons}>
                      <img className={css.whatsapp} src="/img/whatsapp.svg" alt="" />
                      <p className={css.text}>{dc.number}</p>
                  </div>
                  <div className={css.icons}>
                      <img className={css.gmail} src="/img/gmail.svg" alt="" />
                      <p className={css.text}>{dc.gmail}</p>
                  </div>
                  <div className={css.icons}>
                      <img className={css.geodata} src="/img/geodata.svg" alt="" />
                      <p className={css.text}>{dc.street}</p>
                  </div>
                  <div className={css.icons}>
                      <img className={css.plan} src="/img/plan.svg" alt="" />
                      <p className={css.text__plan}>{dc.workschedule}</p>
                  </div>
              </div>
          </div> 
          <div className={css.bottom}>
              <div className={css.footer}>
                <img className={css.logo__img} src="/img/logofooter.svg" alt="" />
                <p className={css.name}>ИНСТРУКТОР по вождению</p>
              </div>
              <p className={css.footer__info}>2022, Автошкола “ФОРСАЖ” Политика конфиденциальности</p>
          </div>  
        </div>
    )
}