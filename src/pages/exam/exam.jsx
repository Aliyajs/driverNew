import React from 'react';
import css from './exam.module.scss'

export default function Exam(){
  return(
    <div className={css.exam}>
      <p className={css.title}>Экзамен</p>
      <div>
        <p className={css.text}>Для прохождения экзамена </p>
        <p className={css.text}>Вам необходимо выбрать один билет.</p>
        <p className={css.text}>На прохождение экзамена у Вас 25 минут</p>
      </div>
      <div className={css.ticket__box}>
      <div className={css.exam__btn}>
        <button className={css.ticket__btn}>№1</button>
        <button className={css.ticket__btn}>№2</button>
        <button className={css.ticket__btn}>№3</button>
        <button className={css.ticket__btn}>№4</button>
        <button className={css.ticket__btn}>№5</button>
        <button className={css.ticket__btn}>№6</button>
        <button className={css.ticket__btn}>№7</button>
        <button className={css.ticket__btn}>№8</button>
        <button className={css.ticket__btn}>№9</button>
        <button className={css.ticket__btn}>№10</button>
        <button className={css.ticket__btn}>№11</button>
        <button className={css.ticket__btn}>№12</button>
        <button className={css.ticket__btn}>№13</button>
        <button className={css.ticket__btn}>№14</button>
        <button className={css.ticket__btn}>№15</button>
        <button className={css.ticket__btn}>№16</button>
        <button className={css.ticket__btn}>№17</button>
        <button className={css.ticket__btn}>№18</button>
        <button className={css.ticket__btn}>№19</button>
        <button className={css.ticket__btn}>№20</button>
        <button className={css.ticket__btn}>№21</button>
        <button className={css.ticket__btn}>№22</button>
        <button className={css.ticket__btn}>№23</button>
        <button className={css.ticket__btn}>№24</button>
        <button className={css.ticket__btn}>№25</button>
      </div>
      </div>
    </div>
  )
}