import React from "react";
import "../css/aboutMe.css";

const AboutMe = () => {
  return (
    <div className="container mt-1">
      <section className="section about-section gray-bg" id="about">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6">
              <div className="about-text go-to">
                <h3 className="dark-color">Обо мне</h3>
                <h6 className="theme-color lead">Frontend разработчик</h6>
                <p>
                  В сфере ИТ работаю с 2007 года. Занимался поддержкой
                  информационных систем в сети магазинов "Магнит". С конца 2021
                  года перестроился на web разработку.
                </p>
                <div className="row about-list">
                  <div className="col-md-6">
                    <div className="media">
                      <label>Имя, Фамилия</label>
                      <p>Максим Денисенко</p>
                    </div>

                    <div className="media">
                      <label>Страна</label>
                      <p>Россия</p>
                    </div>

                    <div className="media">
                      <label>Email</label>
                      <p>MaxDenisenko2013@yandex.ru</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-avatar">
                <img
                  src="https://img.hhcdn.ru/photo/723544839.jpeg?t=1686220693&h=Y0vXgbOq5uqiaJNdq4oxbw"
                  title=""
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutMe;
