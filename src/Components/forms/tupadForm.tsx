// popupForm.tsx
import Apply from '../Beneficiaries/TabsLInk/Apply'

// The component takes 'isOpen' to control visibility and 'onClose' to hide itself
const popupForm = ({ isOpen, onClose }) => {
  // Conditional rendering: if not open, return null (render nothing)
  if (!isOpen) {
    return null;
  }

  return (
    // The main popup container with fixed positioning and backdrop
    <>
        <Apply />
    </>
  );
};

export default popupForm;