import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  // Hook to redirect after submission
  const navigate = useNavigate();
  
  // State to hold form data
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    ingredients: '',
    instructions: '',
    image: '',
  });
  
  // State for form validation errors
  const [errors, setErrors] = useState({});
  // State for successful submission message
  const [submissionMessage, setSubmissionMessage] = useState('');

  // Universal handler for all input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  // Basic client-side validation logic
  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Recipe title is required.';
    if (!formData.summary.trim()) newErrors.summary = 'A summary is required.';
    // Check if ingredients has at least two lines (a simple validation example)
    if (formData.ingredients.split('\n').filter(line => line.trim() !== '').length < 2) {
      newErrors.ingredients = 'Please list at least two ingredients, one per line.';
    }
    if (!formData.instructions.trim()) newErrors.instructions = 'Preparation steps are required.';
    // A placeholder image URL is fine for this mock setup
    if (!formData.image.trim()) newErrors.image = 'An image URL is recommended.'; 
    
    setErrors(newErrors);
    // Form is valid if the errors object is empty
    return Object.keys(newErrors).length === 0;
  };

  // Submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionMessage(''); // Clear previous messages
    
    if (validateForm()) {
      // In a real application, you would send this data to an API endpoint
      // console.log('Form Data Ready for Submission:', formData);
      
      // Simulate successful submission
      setSubmissionMessage('Recipe submitted successfully! Redirecting to home...');
      
      // Clear form (optional)
      // setFormData({ title: '', summary: '', ingredients: '', instructions: '', image: '' });

      // After a short delay, redirect the user to the home page
      setTimeout(() => {
        navigate('/');
      }, 2000);
      
    } else {
      setSubmissionMessage('Please correct the highlighted errors before submitting.');
    }
  };

  // Helper function to render an input field block
  const renderInputBlock = (name, label, type = 'text', placeholder) => (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          rows={type === 'textarea' ? 4 : undefined}
          value={formData[name]}
          onChange={handleChange}
          placeholder={placeholder}
          // Tailwind class for input styling
          className={`mt-1 block w-full rounded-md border p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
            errors[name] ? 'border-red-500' : 'border-gray-300'
          }`}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          placeholder={placeholder}
          // Tailwind class for input styling
          className={`mt-1 block w-full rounded-md border p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
            errors[name] ? 'border-red-500' : 'border-gray-300'
          }`}
        />
      )}
      {/* Validation Error Message */}
      {errors[name] && (
        <p className="mt-1 text-sm text-red-600">{errors[name]}</p>
      )}
    </div>
  );

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-10">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 border-b-2 pb-2">
        ➕ Submit a New Recipe
      </h1>

      {/* Submission Status Message */}
      {submissionMessage && (
        <div 
          className={`p-4 mb-6 rounded-lg font-medium ${
            submissionMessage.includes('successfully') 
            ? 'bg-green-100 text-green-700' 
            : 'bg-red-100 text-red-700'
          }`}
          role="alert"
        >
          {submissionMessage}
        </div>
      )}

      {/* Recipe Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-xl shadow-2xl">
        
        {/* Title and Summary (Responsive Grid on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {renderInputBlock('title', 'Recipe Title')}
          {renderInputBlock('summary', 'Short Summary/Description')}
        </div>

        {/* Image URL (Full Width) */}
        {renderInputBlock('image', 'Image URL (e.g., https://via.placeholder.com/400x300)', 'text', 'https://example.com/image.jpg')}

        {/* Ingredients and Instructions (Full Width Textareas) */}
        {renderInputBlock(
          'ingredients', 
          'Ingredients (List each ingredient on a new line)', 
          'textarea',
          '2 cups flour\n1 cup sugar\n...'
        )}
        {renderInputBlock(
          'instructions', 
          'Preparation Steps (Write out all steps)', 
          'textarea',
          '1. Mix all dry ingredients...\n2. Add wet ingredients...\n3. Bake for 30 minutes...'
        )}

        {/* Submit Button */}
        <div className="mt-8 flex justify-end space-x-4">
          <Link 
            to="/" 
            className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-100 transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;