import React from 'react'

const Steps = () => {
  return (
    <section className="text-black bg-white body-font ">
      <div className="container   py-24 mx-auto flex flex-wrap">
        <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-200 text-black relative z-10 title-font font-medium text-sm">
            1
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-black mb-1 text-xl">
                Shooting Stars
              </h2>
              <p className="leading-relaxed">
                VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                bespoke try-hard cliche palo santo offal.
              </p>
            </div>
          </div>
        </div>
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-200 text-black relative z-10 title-font font-medium text-sm">
            2
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-black mb-1 text-xl">
                The Catalyzer
              </h2>
              <p className="leading-relaxed">
                VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                bespoke try-hard cliche palo santo offal.
              </p>
            </div>
          </div>
        </div>
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-200 text-black relative z-10 title-font font-medium text-sm">
            3
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-black mb-1 text-xl">
                The 400 Blows
              </h2>
              <p className="leading-relaxed">
                VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                bespoke try-hard cliche palo santo offal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps