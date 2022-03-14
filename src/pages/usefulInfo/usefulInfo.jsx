// import React from 'react';
import css from './usefulInfo.module.scss';
import { format } from 'date-fns'
import React, { Component } from 'react'



// function UsefulInfo(){
    class UsefulInfo extends Component{

    state = {
        comments: [],
        form: {
          name: '',
          comment: ''
        }
      }
    
      componentDidMount() {
        if (localStorage.getItem('state')) {
          this.setState({ ...JSON.parse(localStorage.getItem('state')) })
        }
      }
    
      addComment = () => {
        this.setState({
          comments: [
            ...this.state.comments,
            {
              id: this.state.comments.length ? this.state.comments.reduce((p, c) => p.id > c.id ? p : c).id + 1 : 1, // max id +1
              name: this.state.form.name,
              comment: this.state.form.comment,
              date: new Date()
            }
          ],
          form: {
            name: '',
            comment: ''
          }
        }, () => localStorage.setItem('state', JSON.stringify(this.state)))
      }
    
      removeComment = (id) => {
        this.setState({
          comments: this.state.comments.filter(comment => comment.id !== id)
        }, () => localStorage.setItem('state', JSON.stringify(this.state)))
      }
    
      handleChange = (e) => {
        console.log(e.target.name)
        this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
          }
        })
      }
    
    render() {
    return(
        <div className={css.useful__info}>
            <p className={css.title}>Полезное</p>
            <div className={css.container}>
                <div className={css.left}>
                    <img className={css.road} src="https://unsplash.com/photos/oxQ0egaQMfU" alt="" />
                    <p className={css.text}>vh</p>
                </div>
                <div className={css.right}>
                    <p className={css.topic__text}>Сотрудники УОБДД по УВД области <br /> предотвратили похищение девушки</p>
                    <p className={css.info__text}>Все наши автомобили и мотоциклы профессионально оборудованы под обучение. Практические занятия проводятся на автомобилях с коробкой-автомат или на механике не старше трех лет. После каждого ученика машину тщательно осматривают и обрабатывают.</p>
                    <div>
                    {this.state.comments.map(comment => <div key={comment.id}>
                      <span style={{ fontStyle: 'italic' }}>{comment.id} - {format(comment.date, 'DD/MM/YYYY')}: </span>
                      <strong>{comment.name}, </strong>
                      <span>{comment.comment}</span>
                      <button onClick={this.removeComment.bind(null, comment.id)}>Удалить комментарий</button>
                    </div>)}
                        <div>
                           <p className={css.comment__author}>Комментариями автора</p>
                           <div className={css.comment}>
                               <div className={css.author__container}>
                                  <img className={css.author} src="/img/author.svg" alt="" />
                                  <p className={css.author__word}>Наши автомобили и мотоциклы профессионально оборудованы под обучение. Практические занятия проводятся на автомобилях с коробкой-автомат или на механике не старше трех лет.</p>
                               </div>
                               <button onClick={this.addComment} className={css.btn}>Ответить</button>
                           </div>
                        </div>
                        <div>
                            <p className={css.comment__user}>Комментарии пользователей сайта по теме</p>
                            <div className={css.user__topic}>
                                <div className={css.user__container}>
                                  <img className={css.user} src="/img/user.svg" alt="" />
                                  <label>Имя: <input
                                    type="text"
                                    value={this.state.form.name}
                                    name="name"
                                    onChange={this.handleChange} /></label>
                                  {/* <p className={css.user__word}>Наши автомобили и мотоциклы профессионально оборудованы под обучение. Практические занятия проводятся на автомобилях с коробкой-автомат или на механике не старше трех лет.</p> */}
                                  <label>Комментарий: <textarea
                                    name="comment"
                                    value={this.state.form.comment}
                                    onChange={this.handleChange}>sd</textarea>
                                  </label>
                                </div>
                                <button onClick={this.addComment} className={css.btn}>Ответить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}
 
export default UsefulInfo;