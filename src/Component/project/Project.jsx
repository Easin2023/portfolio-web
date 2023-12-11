const Project = () => {
  return (
    <div className="mt-20 font-font-ubuntu">
     <h1 className="text-4xl mb-5">My Project</h1>
      <div className="flex gap-6">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-[200px]"
              src="https://i.ibb.co/jwdJ2dc/Screenshot-2023-12-12-020631.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">LearnLoom Pro</h2>
            <p>
              This platform facility Empower education with our dynamic
              dashboard—seamless member management, energized teaching, and
              efficiency. Step into the future enrollment, payments, and
              aspiring faculty in one powerful hub
              <br />● This project Features Google Login, Payment Features
            </p>
            <div className="card-actions justify-end">
              <a href="https://abrupt-collar.surge.sh/">
                <button className="btn btn-primary">Live Link</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-[200px]"
              src="https://i.ibb.co/Sd9t8JK/Screenshot-2023-12-12-024240.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Food Sharing</h2>
            <p>
              A Platform for Food Sharing and Community Collaboration, Share and
              enjoy meals effortlessly on our platform. Easily manage your food
              listings or request, edit, and cancel meal requests with
              simplicity and customization at your fingertips!
              <br />● This project Features Google Login
            </p>
            <div className="card-actions justify-end">
              <a href="https://forgetful-birth.surge.sh/">
                <button className="btn btn-primary">Live Link</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-[200px]"
              src="https://i.ibb.co/BLd8Zgz/Screenshot-2023-12-12-024626.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Care Bazar.com</h2>
            <p>
              Effortlessly buy any car, manage your selection in a virtual cart,
              and enjoy the flexibility to update or add new choices on our
              user-friendly website. 
              <br />
              ● This project Features Google Login
            </p>
            <div className="card-actions justify-end">
              <a href="https://carbazar-firebase-auth.web.app/">
                <button className="btn btn-primary">Live Link</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
