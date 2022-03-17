import { cs } from "date-fns/locale";
import React from "react";
import css from "./aboutUs.module.css"

export default function AboutUs(){
    return(
        <div className={css.about__us}>
            <p className={css.title}>Раздел О Нас</p>
            <div className={css.common__top}>
               <div className={css.box}>
                    <img className={css.img} src="/img/manOnBussiness.svg" alt="" />
                    <p className={css.big_krug}></p>
                    <p className={css.krug}></p>
                </div>
                <div className={css.history__text}>
                    <p className={css.made__history}><b>История создания</b> Мы подготовили для вас комфортные условия для обучения и разработали несколько курсов с максимально выгодными ценами. Но самое главное — Вы можете научиться водить и получить права всего за 24 400 рублей.</p>
                    <p className={css.mission}><b>Наша миссия</b> - В каждый наш тариф включены следующие опции: полный теоретический курс по ПДД, вождение с инструктором (преодоление препятствий на автодроме и езда по городу), ГСМ, топливо, сбор всей необходимой документации для ГИБДД, предоставление автомобилей на экзамен в ГИБДД и сопровождение ученика сотрудниками автошколы. Тарифы различаются только количеством практических занятий.</p>
                </div>
            </div>
            <div>
                <p className={css.title}>Аргументы в нашу пользу</p>
                <p className={css.arguments__text}>Мы не потребуем дополнительных плат</p>
                <div className={css.common__middle}>
                    <div className={css.left}>
                        <div className={css.econom__time}>
                            <p className={css.econom__text}>Экономия времени</p>
                            <div className={css.training}>
                                <img className={css.clock} src="/img/clock.svg" alt="" />
                                <p className={css.clock__text}>Обучение длится 2,5 месяца категория B 3,5 месяца категория BC </p>
                            </div>
                        </div>
                        <div className={css.choose__instructor}>
                            <p className={css.choose__text}>Возможность выбрать инструктора</p>
                            <div className={css.common__experience}>
                                <img className={css.experience} src="/img/experience.svg" alt="" />
                                <p className={css.experience__text}>Суммарный опыт работы более 10 лет</p>
                            </div>
                        </div>
                        <div className={css.price}>
                            <p className={css.price__text}>Выгодная цена за обучение</p>
                            <div className={css.with__instructors}>
                                <img className={css.person} src="/img/person.svg" alt="" />
                                <p className={css.person__text}>Обучение с интсруктором,выпустившим более 7 тыс учеников</p>
                            </div>
                        </div>
                    </div>
                    <div className={css.center}>
                        <img className={css.wheel} src="/img/wheel.svg" alt="" />
                    </div>
                    <div className={css.right}>
                        <div className={css.comfort}>
                            <p className={css.comfort__text}>Комфортное расписание лекций</p>
                            <div className={css.comfortable}>
                                <p className={css.schedule__text}>Мы подберем удобное для вас время</p>
                                <img className={css.schedule} src="/img/schedule.svg" alt="" />
                            </div>
                        </div>
                        <div className={css.activity}>
                            <p className={css.activity__text}>Занятие рядом с домом или работой </p>
                            <div className={css.area}>
                                <p className={css.location__text}>Наши площадки рассредоточены по всему городу- Вы будете тренироваться, где хотите</p>
                                <img className={css.location} src="/img/location.svg" alt="" />
                            </div>
                        </div>
                        <div className={css.variant}>
                            <p className={css.variant__text}>Множество вариантов обучения</p>
                            <div className={css.study}>
                                <p className={css.book__text}>Возможность заниматься как на специальной обучающей машине, так и на своем авто</p>
                                <img className={css.book} src="/img/book.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}