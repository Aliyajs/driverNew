import React from 'react';
import css from './usefulInfo.module.scss';

function UsefulInfo(){
  return(
      <div className={css.useful__info}>
          <p className={css.title}>Полезное</p>
          <div className={css.container}>
              <div className={css.left}>
                  <img className={css.road} src="/img/road.svg" alt="" />
                  <p className={css.text}>Сотрудники УОБДД по УВД области предотвратили похищение девушки</p>
              </div>
              <div className={css.right}>
                  <p className={css.info__text}>Сотрудники УОБДД по УВД области <br /> предотвратили похищение девушки</p>
                  <p className={css.info__text}>Все наши автомобили и мотоциклы профессионально оборудованы под обучение. Практические занятия проводятся на автомобилях с коробкой-автомат или на механике не старше трех лет. После каждого ученика машину тщательно осматривают и обрабатывают.</p>
                  <div>
                      <div>
                         <p className={css.comment__author}>Комментариями автора</p>
                         <div className={css.comment}>
                             <div className={css.author__container}>
                                <img className={css.author} src="/img/author.svg" alt="" />
                                <p className={css.author__word}>Наши автомобили и мотоциклы профессионально оборудованы под обучение. Практические занятия проводятся на автомобилях с коробкой-автомат или на механике не старше трех лет.</p>
                             </div>
                             <button className={css.btn}>Ответить</button>
                         </div>
                      </div>
                      <div>
                          <p className={css.comment__user}>Комментарии пользователей сайта по теме</p>
                          <div className={css.user__topic}>
                              <div className={css.user__container}>
                                <img className={css.user} src="/img/user.svg" alt="" />
                                <p>name</p>
                                <p className={css.user__word}>Наши автомобили и мотоциклы профессионально оборудованы под обучение. Практические занятия проводятся на автомобилях с коробкой-автомат или на механике не старше трех лет.</p>
                              </div>
                              <button className={css.btn}>Ответить</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}
 
export default UsefulInfo;