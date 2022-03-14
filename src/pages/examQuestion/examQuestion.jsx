import React from 'react';
import css from './examQuestion.module.scss'

export default function ExamQuestion(){
  return(
    <div className={css.exam__question}>
        <div>
          <p className={css.text}>Для прохождения экзамена </p>
          <p className={css.text}>Вам необходимо выбрать один билет.</p>
          <p className={css.text}>На прохождение экзамена у Вас 25 минут</p>
        </div>
        <div className={css.test__blocks}>
            <div className={css.test__circle}>
                <div>
                    <div className={css.test__number}>№1</div>
                    <div className={css.test__number}>№2</div>
                    <div className={css.test__number}>№3</div>
                    <div className={css.test__number}>№4</div>
                    <div className={css.test__number}>№5</div>
                    <div className={css.test__number}>№6</div>
                    <div className={css.test__number}>№7</div>
                    <div className={css.test__number}>№8</div>
                    <div className={css.test__number}>№9</div>
                    <div className={css.test__number}>№10</div>
                    <div className={css.test__number}>№11</div>
                    <div className={css.test__number}>№12</div>
                    <div className={css.test__number}>№13</div>
                </div> 
                <div>
                    <div className={css.test__number}>№14</div> 
                    <div className={css.test__number}>№15</div> 
                    <div className={css.test__number}>№16</div>  
                    <div className={css.test__number}>№17</div>  
                    <div className={css.test__number}>№18</div>  
                    <div className={css.test__number}>№19</div>  
                    <div className={css.test__number}>№20</div>  
                    <div className={css.test__number}>№21</div>  
                    <div className={css.test__number}>№22</div>  
                    <div className={css.test__number}>№23</div>  
                    <div className={css.test__number}>№24</div>  
                    <div className={css.test__number}>№25</div>    
                </div>
            </div>
        <div>
            <div>
                <h1 className={css.test__text}>Вопрос №1:</h1>
                <div className={css.test__image}/>
                <div>
                    <p className={css.question__text}>Разрешен ли обгон на подъеме?</p>
                </div>
                <div className={css.answer__block}>
                    <form>
                        <div className="radio">
                            <div class="radio-item">
                                <input type="radio" id="ritema" name="ritem" value="ropt1" className='inpt'/>
                                <label for="ritema">1. Запрещен</label>
                            </div>

                            <div class="radio-item">
                                <input type="radio" id="ritemb" name="ritem" value="ropt2"/>
                                <label for="ritemb">2. Разрешен</label>
                            </div>
                            <div class="radio-item">
                                <input type="radio" id="ritemd" name="ritem" value="ropt3"/>
                                <label for="ritemd">3. Запрещен только в конце подъема</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div>
           <div>
               <p className={css.test__time_text}>Время прохождения</p>
               <img src="/img/timer.svg" className={css.timer__img} />
               <p className={css.test__time_text}>Колличество баллов</p>
               <button className={css.result__test}>90</button>
           </div>
        </div>
        </div>
    </div>
  )
}