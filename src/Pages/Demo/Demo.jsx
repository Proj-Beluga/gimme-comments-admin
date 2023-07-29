import React from 'react';

const Demo = () => {
  return (
    <>
      <section className=" container mt-5 ">
        <h1 className="font-weight-bold my-3">Gimme Comments Demo</h1>

        <div className="bg-light text-dark p-4 rounded-4 shadow-lg">
          <p>
            Welcome to the
            <span className="bg-dark fw-light px-2">Gimme Comments</span> demo!
            This is a minimal page for you to get a feel for what Commento looks
            like. I do not monitor this page actively. If you face any errors or
            issues, please report them in the project's issue tracker, not here.
            Please note that your comments will be automatically deleted after 3
            days to keep the demo pristine.
          </p>
          <div
            id="gimme-comments-root"
            data-gimme_comments_website_id="64c54d66713debf61a462d01"
          ></div>
        </div>
      </section>
    </>
  );
};

export default Demo;
