import "./form-section.css";

interface FormSectionProps {
  label: string;
  children?: React.ReactNode;
}
export const FormSection = ({
  label,
  children,
}: FormSectionProps) => {
  return (
    <div className="form-section">
      <label className="form-section-label h1">{label}:</label>
      {children}
    </div>
  );
};
