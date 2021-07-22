import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";

import { ProgressBarLine } from "react-progressbar-line";
import { questionBank } from "./const/questionBank";

import "./styles/styles.scss";
import {
  submitQuestionAction,
  fetchQuestionAction,
} from "core/redux/actions/QuestionAction";

const totalQuestion = 30;
function QuizPage() {
  const { questions } = useSelector((state) => state.QuestionReducer);
  const [localQuestion, setLocalQuestion] = useState([]);
  const [progresValue, setProgresValue] = useState(1);
  const { question } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const renderQuestion = questionBank.find((ques) => ques.key === question);
  // DOM to element
  const bodyQuiz = document.querySelector(".content-quiz");

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("question"));

    if (local === null) {
      history.push("/quiz/question1");
    } else {
      history.push(`/quiz/question${local.length + 1}`);
      setProgresValue(Math.floor(((local.length + 1) / totalQuestion) * 100));

      local && setLocalQuestion(local);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // fetch first question from localstorage
  useEffect(() => {
    dispatch(fetchQuestionAction(localQuestion));
  }, [dispatch, localQuestion]);

  const goBack = (index) => {
    setTimeout(() => {
      bodyQuiz.classList.remove("quiz-animation");
    }, 1000);
    history.push(`/quiz/question${index - 1}`);
    bodyQuiz.classList.add("quiz-animation");
  };

  const handleQuestion = (answer, index, page) => {
    setTimeout(() => {
      bodyQuiz.classList.remove("quiz-animation");

      if (page === questions.length + 1) {
        setProgresValue(Math.floor((page / totalQuestion) * 100));
      }
    }, 1000);

    dispatch(submitQuestionAction(answer, index, page, history)); // answer 2, index: question 2, page : 1

    bodyQuiz.classList.add("quiz-animation");
  };

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

      <div className="wrapper-quiz quiz-animation">
        {renderQuestion?.id > 1 && (
          <div className="status-quiz">
            <div className="quiz-info">
              <p
                onClick={() => {
                  goBack(renderQuestion?.id);
                }}
              >
                <i className="fas fa-arrow-left mr-1"></i> Trở lại
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
                    textAlign: "right",
                    fontSize: "20px",
                  },
                }}
              />
            </div>
          </div>
        )}
        <div className="content-quiz">
          <div className="question">
            <p>{renderQuestion?.question}</p>

            <p className="subtitle">{renderQuestion?.subTitle}</p>
          </div>

          <div className="answer">
            <div className="answer-w row">
              {renderQuestion?.answer.map((item, index) => {
                return (
                  <div
                    className="col-12 col-lg-3"
                    key={index}
                    onClick={() => {
                      handleQuestion(
                        item.key,
                        renderQuestion?.key,
                        renderQuestion?.id
                      );
                    }}
                  >
                    <div className={`answer-q p-3`}>
                      {item?.img && (
                        <img src={item?.img} alt="" className="img-fluid" />
                      )}

                      <div className="text-quiz">
                        <p className="mb-0">{item.text}</p>

                        {item?.desc && <span>{item.desc}</span>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
