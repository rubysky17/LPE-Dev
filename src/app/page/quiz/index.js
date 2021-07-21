import React from "react";
import { Link, NavLink, useHistory, useParams } from "react-router-dom";

import { ProgressBarLine } from "react-progressbar-line";
import { questionBank } from "./const/questionBank";

import "./styles/styles.scss";

const totalQuestion = 30;
function QuizPage() {
  // const [questionNum, setQuestionNum] = useState("question1");
  const { question } = useParams();
  const history = useHistory();

  const renderQuestion = questionBank.find((ques) => ques.key === question);
  const goBack = () => {
    history.goBack();
  };

  const progresValue = Math.floor((renderQuestion?.id / totalQuestion) * 100);
  console.log("progresValue", progresValue);
  return (
    <div className="container quiz">
      <header>
        <Link to="/">
          <img
            src="http://lpe.vn//storage/logo/lpe-nlp-logo.png"
            alt="http://lpe.vn//storage/logo/lpe-nlp-logo.png"
            className="img-fluid"
          />
        </Link>
      </header>

      <div className="wrapper-quiz">
        {renderQuestion?.id > 1 && (
          <div className="status-quiz">
            <div className="quiz-info">
              <p
                onClick={() => {
                  goBack();
                }}
              >
                <i class="fas fa-arrow-left mr-1"></i> Trở lại
              </p>

              <p>
                {renderQuestion?.id}/{totalQuestion}
              </p>
            </div>
            <div className="quiz-progress mb-5">
              <ProgressBarLine
                value={progresValue}
                min={0}
                max={100}
                strokeWidth={0.5}
                trailWidth={0.5}
                styles={{
                  path: {
                    stroke: "#77b497",
                  },
                  trail: {
                    stroke: "#e4e6ec",
                  },
                  text: {
                    fill: "#404040",
                    textAlign: "center",
                    fontSize: "32px",
                  },
                }}
              />
            </div>
          </div>
        )}

        <div className="question">
          <p>{renderQuestion?.question}</p>

          <p className="subtitle">{renderQuestion?.subTitle}</p>
        </div>

        <div className="answer">
          <div className="answer-w row">
            {renderQuestion?.answer.map((item, index) => {
              return (
                <NavLink
                  className="col-12 col-lg-3"
                  key={index}
                  to={`/quiz/question${renderQuestion.id + 1}`}
                >
                  <div className={`answer-q ${index === 0 && "active"}`}>
                    {item?.img && (
                      <img src={item?.img} alt="" className="img-fluid" />
                    )}
                    <p>{item.text}</p>

                    {item?.desc && <span>{item.desc}</span>}
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
