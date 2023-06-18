import React from "react";
import { useLoaderData } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blogs = () => {
  const answers = useLoaderData();
  const [answer] = answers;
  

  return (
    <div className="max-w-4xl mx-auto min-h-screen">
      <div className="text-center bg-slate-400 py-10">
        <h1 className="text-center font-semibold text-3xl mb-4">
          Answers of the Questions
        </h1>
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button className="btn glass normal-case shadow-2xl" onClick={toPdf}>
              <AiOutlineDownload className="text-xl mr-2" />
              Download Answer
            </button>
          )}
        </Pdf>
      </div>
      <div ref={ref} className="mt-8 p-10 pr-32">
        <div className="text-xl mb-4">
          <h2 className="text-2xl font-semibold">
            <span className="font-semibold">1.</span> What are differences
            between uncontrolled and controlled components?
          </h2>
          <p>
            <span className="font-semibold">Answer: </span> {answer?.answer_1}
          </p>
        </div>
        <div className="text-xl mb-4">
          <h2 className="text-2xl font-semibold">
            <span className="font-semibold">1.</span> How to validate React
            props using PropTypes?
          </h2>
          <p>
            <span className="font-semibold">Answer: </span> {answer?.answer_2}
          </p>
        </div>
        <div className="text-xl mb-4">
          <h2 className="text-2xl font-semibold">
            <span className="font-semibold">1.</span> What are difference
            between nodejs and express js?
          </h2>
          <p>
            <span className="font-semibold">Answer: </span> {answer?.answer_3}
          </p>
        </div>
        <div className="text-xl mb-4">
          <h2 className="text-2xl font-semibold">
            <span className="font-semibold">1.</span> What is a custom hook, and
            why will you create a custom hook?
          </h2>
          <p>
            <span className="font-semibold">Answer: </span> {answer?.answer_4}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
