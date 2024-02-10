import React from 'react'
import '../Css/Home.css'
import { Link } from 'react-router-dom'
import p1 from '../Assets/TestimonialPic_1.jpg'
import p2 from '../Assets/TestimonialPic_2.jpg'

const Home = () => {
  return (
    <>
      <div className="Home">
        <div className='content1'>
          <div className="heading">
            <h1>Spark your financial journey</h1>
          </div>
          <div className="paragraph">
            Money Sparks empowers you to manage your finances with ease. Track your income and expenses, set budgets, analyze trends, and reach your financial goals. Take control of your financial future, one spark at a time.
          </div>
          <div className="btn">
            <button><Link to='/Income'>Get Started</Link></button>
          </div>
        </div>

        <div className="content2">
          <div className="uppercontent">
            <div className="heading">
              <h2>Services We Offer</h2>
            </div>
            <div className="paragraph">
              <p>Track, manage, and report. Money Sparks provides the tools you need to take control of your finances.</p>
            </div>
          </div>
          <div className="services">
            <div className="serviceItem">
              <h3>Income Management</h3>
              <p>Effortlessly track your income Enter your income sources and amounts with ease.
                Gain insights into your income trends.
                Stay organized and avoid missing payments.</p>
            </div>

            <div className="serviceItem">
              <h3>Expense Management:</h3>
              <p>Categorize and track your expenses.
                Set budgets and stay on track.
                Identify areas where you can save.</p>
            </div>

            <div className="serviceItem">
              <h3>Reporting</h3>
              <p>Generate comprehensive reports on your finances.Gain valuable insights into your spending habits.Make data-driven financial decisions.</p>
            </div>
          </div>
        </div>

        <div className="content3">
          <div className="uppercontent">
            <h2>What our customers say</h2>
            <p>We have alot of happy customers</p>
          </div>

          <div className="testimonials">
            <div className="item">
              <div className="item-up">
                <div className="img">
                  <img src={p1} alt="" />
                </div>
                <div className="paragraph">
                  <p>
                    I have been a customer of Money Sparks for over a year now and I am very happy with the service. It has helped me to track my income and expenses more easily, and to set budgets and stay on track. I would highly recommend Money Sparks to anyone who is looking for a better way to manage their finances.</p>
                </div>
              </div>

              <div className="item-down">
                <h3>Tayyab Sami</h3>
                <div className="icons">
                  <img width="35" height="35" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1" />
                  <img width="35" height="35" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1" />
                  <img width="35" height="35" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1" />
                  <img width="35" height="35" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1" />
                  <img width="35" height="35" src="https://img.icons8.com/color/48/star--v1.png" alt="star--v1" />
                </div>
              </div>
            </div>
            
            <div className="item">
              <div className="item-up">
                <div className="img">
                  <img src={p2} alt="" />
                </div>
                <div className="paragraph">
                  <p>
                    I've been using Money Sparks for about six months now, and I can confidently say it's been a game-changer for my finances. It's a comprehensive and user-friendly platform that makes it easy to track income, categorize expenses, and gain valuable insights into your spending habits.</p>
                </div>
              </div>

              <div className="item-down">
                <h3>Imran Ahmed</h3>
                <div className="icons">
                  <img width="35" height="35" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1" />
                  <img width="35" height="35" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1" />
                  <img width="35" height="35" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1" />
                  <img width="35" height="35" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1" />
                  <img width="35" height="35" src="https://img.icons8.com/fluency/48/star-half-empty.png" alt="star-half-empty"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
