import { useState, FormEvent } from 'react';
import { Loader2 } from 'lucide-react';

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({
    projectType: false,
    sqFootage: false,
    timeline: false
  });

  const [formData, setFormData] = useState({
    projectType: '',
    sqFootage: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const validateStep1 = () => {
    const newErrors = {
      projectType: formData.projectType === '',
      sqFootage: formData.sqFootage === '',
      timeline: formData.timeline === ''
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        projectType: '',
        sqFootage: '',
        timeline: '',
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      setTimeout(() => {
        setShowSuccess(false);
        setStep(1);
      }, 6000);
    }, 1500);
  };

  const progress = step === 1 ? 50 : 100;
  const stepText = step === 1 ? 'Step 1 of 2: Project Details' : 'Step 2 of 2: Contact Details';
  const title = step === 1 ? 'Start Your Free Quote' : 'Almost There!';
  const subtitle =
    step === 1
      ? 'Owner Mauricio Valencia will personally review your request and be in touch shortly.'
      : 'Where should we send your custom quote?';

  return (
    <div className="lg:sticky lg:top-28">
      <div className="bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
        {!showSuccess && (
          <>
            <div className="mb-6">
              <div className="overflow-hidden h-2 mb-2 text-xs flex rounded bg-blue-100">
                <div
                  style={{ width: `${progress}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-brand transition-all duration-300"
                ></div>
              </div>
              <p className="text-sm text-gray-600 text-center">{stepText}</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-3">{title}</h2>
            <p className="text-gray-600 mb-6">{subtitle}</p>
          </>
        )}

        {showSuccess && (
          <div className="p-4 mb-4 bg-green-100 text-green-800 border border-green-300 rounded-lg">
            <strong>Success!</strong> Your quote request has been sent. Mauricio will be in touch
            within 24 hours.
          </div>
        )}

        {!showSuccess && (
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <label htmlFor="project-type" className="block text-sm font-medium text-gray-700 mb-1">
                    What painting work do you need done? *
                  </label>
                  <select
                    id="project-type"
                    value={formData.projectType}
                    onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent bg-white"
                  >
                    <option value="">Please Choose...</option>
                    <option value="interior">Interior Painting</option>
                    <option value="exterior">Exterior Painting</option>
                    <option value="full_home">Full Home Painting (Interior & Exterior)</option>
                    <option value="cabinet">Cabinet Refinishing</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.projectType && (
                    <p className="text-red-500 text-xs mt-1">Please select a project type.</p>
                  )}
                </div>
                <div>
                  <label htmlFor="sq-footage" className="block text-sm font-medium text-gray-700 mb-1">
                    Estimated square footage? *
                  </label>
                  <select
                    id="sq-footage"
                    value={formData.sqFootage}
                    onChange={e => setFormData({ ...formData, sqFootage: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent bg-white"
                  >
                    <option value="">Please Choose...</option>
                    <option value="<500">&lt; 500 sq ft</option>
                    <option value="500-1000">500 - 1,000 sq ft</option>
                    <option value="1000-2000">1,000 - 2,000 sq ft</option>
                    <option value="2000+">2,000+ sq ft</option>
                    <option value="unsure">I'm not sure</option>
                  </select>
                  {errors.sqFootage && (
                    <p className="text-red-500 text-xs mt-1">Please select an estimated size.</p>
                  )}
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                    How soon do you need help? *
                  </label>
                  <select
                    id="timeline"
                    value={formData.timeline}
                    onChange={e => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent bg-white"
                  >
                    <option value="">Please Choose...</option>
                    <option value="immediately">Immediately</option>
                    <option value="<2_weeks">Within 2 weeks</option>
                    <option value="1-2_months">Within 1-2 months</option>
                    <option value="budgeting">Just budgeting</option>
                  </select>
                  {errors.timeline && (
                    <p className="text-red-500 text-xs mt-1">Please select your timeline.</p>
                  )}
                </div>
                <div>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full flex justify-center items-center bg-brand hover:bg-brand-dark text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg transition-colors"
                  >
                    Next: Contact Info
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Anything else to add?
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                    placeholder="e.g., painting 3 bedrooms, living room..."
                  ></textarea>
                </div>
                <div className="space-y-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center bg-brand hover:bg-brand-dark text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg transition-colors disabled:opacity-50"
                  >
                    {isSubmitting && <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />}
                    <span>{isSubmitting ? 'Sending...' : 'Get My Free Quote'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleBack}
                    className="w-full flex justify-center items-center bg-gray-200 text-gray-800 font-bold text-lg py-3 px-10 rounded-lg shadow-sm hover:bg-gray-300 transition-colors"
                  >
                    Back
                  </button>
                </div>
              </div>
            )}
          </form>
        )}

        {!showSuccess && (
          <p className="text-xs text-gray-500 mt-5 text-center">
            We respect your privacy. Your information is never sold or shared.
          </p>
        )}
      </div>
    </div>
  );
}
