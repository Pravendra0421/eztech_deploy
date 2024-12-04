import step1 from '../assets/step-icon01.svg'
import step2 from '../assets/step-icon02.svg'
import step3 from '../assets/step-icon03.svg'
import process from '../assets/process-image.png.webp';
const Process = () => {
  return (
    <div >
        <div className="text-center mb-10 mt-10">
            <div className="text-4xl font-bold underline mb-10">Simplified & Streamlined Process</div>
            <div className="text-xl font-tinos">Your journey with us begins in a simplified and streamlined process, ensuring a smooth ride ahead. With clarity and precision, we’ve structured</div>
            <div className="text-xl font-tinos">the path to make your experience enjoyable and hassle-free.</div>
        </div>
        <section className="py-12 px-4 bg-gray-50 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Steps */}
          <div>
            <div className="relative">
              <div className="absolute top-0 left-4 w-0.5 h-full bg-blue-600"></div>
            </div>

            <div className="relative flex items-start mb-10">
            <div className="absolute left-1/2 transform -translate-x-72 -translate-y-16 top-full h-24  border-l-2 border-dashed border-gray-400"></div>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full">
                  <img src={step1} alt='step'/>
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-bold">Step 1: Schedule an Initial Consultation</h3>
                <p className="mt-2 text-gray-700">
                  Get in touch with us, and let's discuss your business. In this call, we’ll cover
                  your team structure, goals, timeline, budget, and the specific skills needed for
                  your project.
                </p>
              </div>
            </div>

            <div className="relative flex items-start mb-10">
            <div className="absolute left-1/2 transform -translate-x-72 -translate-y-11 top-full h-20  border-l-2 border-dashed border-gray-400"></div>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full">
                  <img src={step2} alt='step'/>
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-bold">Step 2: Discuss Solution and Team Structure</h3>
                <p className="mt-2 text-gray-700">
                  We’ll work with you to finalize the project specifications. Together, we’ll agree
                  on the engagement model and select the right team for your project.
                </p>
              </div>
            </div>

            <div className="relative flex items-start mb-10">
            <div className="absolute left-1/2 transform -translate-x-72 -translate-y-14 top-full h-24  border-l-2 border-dashed border-gray-400"></div>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full">
                  <img src={step3} alt='step'/>
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-bold">Step 3: Get Started and Track Performance</h3>
                <p className="mt-2 text-gray-700">
                  Once we’ve set the milestones and objectives, we’ll hit the ground running. We’ll
                  actively monitor the progress, provide regular updates, and remain flexible to
                  adapt to your evolving needs.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button className="px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-700 transition">
                Request A Free Consultation
              </button>
            </div>
          </div>

          {/* Images */}
          <div className="flex  ml-20 flex-col gap-4">
            <div>
                <img src={process} alt='process'/>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Process;